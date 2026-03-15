"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 text-white transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]

            /* Einheitliche Farben für alle Breakpoints - Titanium Edge Industrial Gradient */
            [--aurora:repeating-linear-gradient(100deg,var(--aurora-steel-blue)_10%,var(--aurora-warm-bronze)_15%,var(--aurora-deep-slate)_20%,var(--aurora-copper-glow)_25%,var(--aurora-charcoal)_30%)]
            blur-[10px] opacity-50
            [--aurora-speed:32s] md:[--aurora-speed:60s]

            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] will-change-transform`,

            showRadialGradient &&
            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_80%)]`
          )}
          style={{
            animationDuration: prefersReducedMotion ? '0s' : 'var(--aurora-speed)',
            animation: prefersReducedMotion ? 'none' : undefined,
          } as React.CSSProperties}
        ></div>
        {/* Soft transition fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent z-[5]" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
