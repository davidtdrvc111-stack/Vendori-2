// SVG-Symbole aus dem Prototyp (1:1). Verwendung: <svg className="icon"><use href="#i-arrow" /></svg>
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </symbol>
      <symbol id="i-external" viewBox="0 0 24 24">
        <path d="M7 17 17 7M8 7h9v9" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14" />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </symbol>
      <symbol id="i-pause" viewBox="0 0 24 24">
        <path d="M9 6v12M15 6v12" />
      </symbol>
      <symbol id="i-play" viewBox="0 0 24 24">
        <path d="M8 5.5v13l11-6.5z" />
      </symbol>
      <symbol id="i-phone" viewBox="0 0 24 24">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24">
        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
        <path d="m3 7 9 6 9-6" />
      </symbol>
      <symbol id="i-close" viewBox="0 0 24 24">
        <path d="M6 6l12 12M18 6 6 18" />
      </symbol>
      <symbol id="i-monitor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </symbol>
      <symbol id="i-globe" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </symbol>
      <symbol id="i-cycle" viewBox="0 0 24 24">
        <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 13a8 8 0 0 0 14.3 4.9L20 16" />
        <path d="M4 4v4h4M20 20v-4h-4" />
      </symbol>
      <symbol id="i-chev-left" viewBox="0 0 24 24">
        <path d="M15 5l-7 7 7 7" />
      </symbol>
      <symbol id="i-chev-right" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" />
      </symbol>
      <symbol id="i-users" viewBox="0 0 24 24">
        {/* überarbeitet 22.11.2026 (David): saubere Geometrie, beide Figuren auf einer Grundlinie */}
        <circle cx="8.5" cy="7.5" r="3.5" />
        <path d="M2.5 20v-.5A5.5 5.5 0 0 1 8 14h1a5.5 5.5 0 0 1 5.5 5.5v.5" />
        <path d="M15 4a3.5 3.5 0 0 1 0 7M16.5 14h.5a4.5 4.5 0 0 1 4.5 4.5V20" />
      </symbol>
      <symbol id="i-calendar" viewBox="0 0 24 24">
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </symbol>
      <symbol id="i-send" viewBox="0 0 24 24">
        <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7z" />
      </symbol>
    </svg>
  );
}
