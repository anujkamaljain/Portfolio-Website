import React, { useMemo } from "react";

const GlowingDotsBackground = () => {
  // Reduced dot count for smoother performance (200 instead of 600)
  const dots = useMemo(
    () =>
      Array.from({ length: 200 }).map(() => ({
        x: Math.random() * 110,
        y: Math.random() * 110,
        size: Math.random() * 6 + 3,
        delay: Math.random() * 6, // Staggered delays for smoother effect
        duration: 3 + Math.random() * 2, // Variable duration for organic feel
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        contain: 'layout paint style',
        willChange: 'auto',
      }}
    >
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-primary animate-breathe"
          style={{
            top: `${dot.y}%`,
            left: `${dot.x}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
            opacity: 0.35,
            transform: 'translateZ(0)',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default GlowingDotsBackground;