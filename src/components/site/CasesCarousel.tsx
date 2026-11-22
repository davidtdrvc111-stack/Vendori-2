'use client';

// Shops-Karussell (mobil, 1:1 aus dem Prototyp): Pfeile links/rechts, an den Enden deaktiviert.
// Ab 960 px blendet das CSS die Pfeile aus und zeigt die Karten als Zeilen.
import { useEffect, useRef, type ReactNode } from 'react';

export function CasesCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const track = trackRef.current!;
    const prev = prevRef.current!;
    const next = nextRef.current!;
    const cards = track.querySelectorAll<HTMLElement>('.case');
    const step = () => (cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth);
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    };
    const smooth: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    const onPrev = () => track.scrollBy({ left: -step(), behavior: smooth });
    const onNext = () => track.scrollBy({ left: step(), behavior: smooth });
    const onScroll = () => window.requestAnimationFrame(update);
    prev.addEventListener('click', onPrev);
    next.addEventListener('click', onNext);
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      prev.removeEventListener('click', onPrev);
      next.removeEventListener('click', onNext);
      track.removeEventListener('scroll', onScroll);
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
