'use client';

// Shops-Karussell (mobil, 1:1 aus dem Prototyp): Pfeile links/rechts, an den Enden deaktiviert.
// Ab 960 px blendet das CSS die Pfeile aus und zeigt die Karten als Zeilen.
// Pfeile springen auf eine feste Karte (Index), nicht relativ zur aktuellen Position:
// relatives scrollBy während eines auslaufenden Swipes landete zwischen den Karten.
import { useEffect, useRef, type ReactNode } from 'react';

export function CasesCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const track = trackRef.current!;
    const prev = prevRef.current!;
    const next = nextRef.current!;
    const cards = Array.from(track.querySelectorAll<HTMLElement>('.case'));
    const offsetOf = (i: number) => cards[i].offsetLeft - cards[0].offsetLeft;
    const nearest = () => {
      let best = 0;
      cards.forEach((_, i) => {
        if (Math.abs(offsetOf(i) - track.scrollLeft) < Math.abs(offsetOf(best) - track.scrollLeft)) best = i;
      });
      return best;
    };
    // Ziel eines laufenden Pfeil-Sprungs; null = Position folgt dem Wischen
    let target: number | null = null;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    const update = () => {
      const i = target ?? nearest();
      prev.disabled = i <= 0;
      next.disabled = i >= cards.length - 1;
    };
    const smooth: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    const go = (dir: -1 | 1) => {
      const i = Math.min(cards.length - 1, Math.max(0, (target ?? nearest()) + dir));
      target = i;
      track.scrollTo({ left: offsetOf(i), behavior: smooth });
      update();
    };
    const onPrev = () => go(-1);
    const onNext = () => go(1);
    const onScroll = () => {
      // Sprungziel freigeben, sobald das Scrollen zur Ruhe gekommen ist
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        target = null;
        update();
      }, 150);
      window.requestAnimationFrame(update);
    };
    // Neues Wischen bricht einen laufenden Pfeil-Sprung ab
    const onTouchStart = () => {
      target = null;
    };
    prev.addEventListener('click', onPrev);
    next.addEventListener('click', onNext);
    track.addEventListener('scroll', onScroll, { passive: true });
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      clearTimeout(settleTimer);
      prev.removeEventListener('click', onPrev);
      next.removeEventListener('click', onNext);
      track.removeEventListener('scroll', onScroll);
      track.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="cases-wrap">
      <button ref={prevRef} className="cases__nav cases__nav--prev" type="button" aria-controls="cases" aria-label="Vorheriger Shop" disabled>
        <svg className="icon" aria-hidden="true">
          <use href="#i-chev-left" />
        </svg>
      </button>
      <button ref={nextRef} className="cases__nav cases__nav--next" type="button" aria-controls="cases" aria-label="Nächster Shop">
        <svg className="icon" aria-hidden="true">
          <use href="#i-chev-right" />
        </svg>
      </button>
      <div ref={trackRef} className="cases" id="cases" tabIndex={0} role="region" aria-label="Unsere Shops und Marken">
        {children}
      </div>
    </div>
  );
}
