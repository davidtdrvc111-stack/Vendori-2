'use client';

// Inhaltsverzeichnisse und FAQ-Themen: aktuellen Abschnitt markieren (1:1 aus dem Prototyp).
// Wirkt auf alle <nav data-spy> der aktuellen Seite.
import { useEffect } from 'react';

export function ScrollSpy() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observers: IntersectionObserver[] = [];
    document.querySelectorAll('[data-spy]').forEach((nav) => {
      const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            links.forEach((l) => {
              if (l.getAttribute('href') === '#' + en.target.id) l.setAttribute('aria-current', 'true');
              else l.removeAttribute('aria-current');
            });
          });
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );
      links.forEach((l) => {
        const t = document.getElementById(l.getAttribute('href')!.slice(1));
        if (t) io.observe(t);
      });
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return null;
}
