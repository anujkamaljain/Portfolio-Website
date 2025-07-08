import React, { useMemo } from "react";

const GlowingDotsBackground = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 600 }).map(() => ({
        x: Math.random() * 110,
        y: Math.random() * 110,
        size: Math.random() * 6 + 3,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden ">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-primary opacity-40 animate-breathe"
          style={{
            top: `${dot.y}%`,
            left: `${dot.x}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default GlowingDotsBackground;