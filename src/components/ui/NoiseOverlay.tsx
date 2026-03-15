interface NoiseOverlayProps {
  opacity?: string;
}

export function NoiseOverlay({ opacity = 'opacity-[0.03]' }: NoiseOverlayProps) {
  return (
    <div
      className={`absolute inset-0 ${opacity} mix-blend-overlay pointer-events-none rounded-3xl`}
      style={{
        backgroundImage: `url("/noise-pattern.png")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
      aria-hidden="true"
    />
  );
}
