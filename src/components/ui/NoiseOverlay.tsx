interface NoiseOverlayProps {
  opacity?: string;
}

export function NoiseOverlay({ opacity = 'opacity-[0.03]' }: NoiseOverlayProps) {
  // CSS-basiertes Noise Pattern - 0 HTTP-Requests, 0 KB!
  const noisePattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E`;

  return (
    <div
      className={`absolute inset-0 ${opacity} mix-blend-overlay pointer-events-none rounded-3xl`}
      style={{
        backgroundImage: `url("${noisePattern}")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
      aria-hidden="true"
    />
  );
}
