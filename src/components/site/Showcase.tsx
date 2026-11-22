'use client';

// Shop-Karussell im Hero (1:1 aus dem Prototyp): Fortschrittsbalken füllt sich 10 s, dann Wechsel.
// Der Wechsel hängt am Ende der Balken-Animation -> Pause/Hover halten beides synchron an (WCAG 2.2.2).
// Steuerung bewusst imperativ wie im Prototyp, weil die CSS-Animation per Attributwechsel neu gestartet wird.
import { useEffect, useRef } from 'react';

const SLIDES = [
  { label: '1 von 3: myToolStore', src: '/images/shop-mytoolstore.jpg', alt: 'Startseite von myToolStore' },
  { label: '2 von 3: ShowerNIZR®', src: '/images/shop-showernizr.jpg', alt: 'Startseite von ShowerNIZR®' },
  { label: '3 von 3: yourNOVA', src: '/images/shop-yournova.jpg', alt: 'Startseite von yourNOVA' },
];

// AVIF in zwei Breiten, JPG als Rückfall für Browser ohne AVIF.
// Laptop-Bildschirm: Desktop max. ca. 620 px breit, mobil ca. 88 % der Seitenbreite.
function SlideImage({ src, alt }: { src: string; alt: string }) {
  const base = src.replace(/\.jpg$/, '');
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${base}-720.avif 720w, ${base}-1440.avif 1440w`}
        sizes="(min-width: 960px) 620px, 88vw"
      />
      <img src={src} width="1440" height="900" alt={alt} />
    </picture>
  );
}

export function Showcase() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const track = root.querySelector<HTMLElement>('.slides')!;
    const all = Array.from(track.children) as HTMLElement[];
    const slides = all.slice(0, SLIDES.length); // letzter Eintrag ist der Klon der ersten Folie
    const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('.tab'));
    const toggle = root.querySelector<HTMLButtonElement>('.showcase__toggle')!;
    const n = slides.length;
    let index = 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let userPaused = reduce;
    let hoverPaused = false;

    function render(animate: boolean) {
      track.style.transition = animate ? '' : 'none';
      track.style.transform = 'translateX(' + -index * 100 + '%)';
      const real = index % n;
      slides.forEach((s, i) => s.setAttribute('aria-hidden', i === real ? 'false' : 'true'));
      dots.forEach((d, i) => {
        d.removeAttribute('aria-current');
        if (i === real) {
          void d.offsetWidth;
          d.setAttribute('aria-current', 'true');
        }
      });
    }
    const onTransitionEnd = () => {
      if (index === n) {
        index = 0;
        render(false);
        void track.offsetWidth;
      }
    };
    function next() {
      if (reduce) {
        index = (index + 1) % n;
        render(false);
      } else {
        index = index + 1;
        render(true);
      }
    }
    function updateHold() {
      root!.classList.toggle('is-held', userPaused || hoverPaused || document.hidden);
    }
    function setUserPaused(p: boolean) {
      userPaused = p;
      root!.classList.toggle('is-paused', p);
      toggle.setAttribute('aria-label', p ? 'Automatischen Wechsel starten' : 'Automatischen Wechsel anhalten');
      updateHold();
    }

    const cleanups: Array<() => void> = [];
    const on = <K extends keyof HTMLElementEventMap>(
      el: HTMLElement | Document,
      type: K | string,
      fn: (e: HTMLElementEventMap[K]) => void
    ) => {
      el.addEventListener(type, fn as EventListener);
      cleanups.push(() => el.removeEventListener(type, fn as EventListener));
    };

    on(track, 'transitionend', onTransitionEnd);
    dots.forEach((d, i) => {
      on(d, 'animationend', () => {
        if (d.getAttribute('aria-current') === 'true') next();
      });
      on(d, 'click', () => {
        index = i;
        render(!reduce);
      });
    });
    on(toggle, 'click', () => setUserPaused(!userPaused));
    on(root, 'pointerenter', (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        hoverPaused = true;
        updateHold();
      }
    });
    on(root, 'pointerleave', (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        hoverPaused = false;
        updateHold();
      }
    });
    on(root, 'focusin', (e: FocusEvent) => {
      // Nur Tastatur-Fokus pausiert; nach Antippen (Touch) bleibt der Fokus sonst hängen
      let kb = true;
      try {
        kb = (e.target as HTMLElement).matches(':focus-visible');
      } catch {
        /* ältere Browser */
      }
      if (kb) {
        hoverPaused = true;
        updateHold();
      }
    });
    on(root, 'focusout', (e: FocusEvent) => {
      if (!root.contains(e.relatedTarget as Node)) {
        hoverPaused = false;
        updateHold();
      }
    });
    on(document, 'visibilitychange', updateHold);
    setUserPaused(userPaused);
    render(false);

    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <section ref={rootRef} className="hero__media showcase" aria-roledescription="Karussell" aria-label="Unsere eigenen Shops">
      <div className="laptop">
        <div className="laptop__screen">
          <div className="laptop__viewport">
            <div className="slides">
              {SLIDES.map((s) => (
                <div key={s.src} className="slide" role="group" aria-roledescription="Folie" aria-label={s.label}>
                  <SlideImage src={s.src} alt={s.alt} />
                </div>
              ))}
              {/* Klon der ersten Folie -> nahtloser Übergang von der letzten zur ersten */}
              <div className="slide" aria-hidden="true">
                <SlideImage src={SLIDES[0].src} alt={SLIDES[0].alt} />
              </div>
            </div>
          </div>
        </div>
        <div className="laptop__base" aria-hidden="true" />
      </div>
      <p className="showcase__label" aria-hidden="true">
        Unsere eigenen Shops
      </p>
      <div className="showcase__bar">
        <div className="showcase__tabs">
          <button type="button" className="tab" aria-current="true">
            <picture>
              <source type="image/avif" srcSet="/images/logo-mytoolstore.avif" />
              <img className="tab__logo tab__logo--mts" src="/images/logo-mytoolstore.png" width="923" height="308" alt="myToolStore" />
            </picture>
          </button>
          <button type="button" className="tab">
            <img className="tab__logo tab__logo--snz" src="/images/logo-showernizr.svg" width="683" height="293" alt="ShowerNIZR®" />
          </button>
          <button type="button" className="tab">
            <picture>
              <source type="image/avif" srcSet="/images/logo-yournova.avif" />
              <img className="tab__logo tab__logo--nova" src="/images/logo-yournova.png" width="261" height="61" alt="yourNOVA" />
            </picture>
          </button>
        </div>
        <button type="button" className="showcase__toggle" aria-label="Automatischen Wechsel anhalten">
          <svg className="icon icon--pause" aria-hidden="true">
            <use href="#i-pause" />
          </svg>
          <svg className="icon icon--play" aria-hidden="true">
            <use href="#i-play" />
          </svg>
        </button>
      </div>
    </section>
  );
}
