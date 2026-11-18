"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  title: string;
  color: string;
  titleLineHeight?: string;
}

export default function AnimatedCounter({
  value,
  title,
  color,
  titleLineHeight = "1.9em",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth ease-out cubic matching Divi counter feel
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(eased * value));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          setDisplayValue(0);
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
          fontSize: "72px",
          fontWeight: 500,
          lineHeight: "72px",
          color,
          textAlign: "center",
          margin: 0,
        }}
      >
        <span>{displayValue}</span>
      </p>
      <h3
        style={{
          fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: titleLineHeight,
          color: "#333333",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "10px",
          margin: 0,
        }}
      >
        {title}
      </h3>
    </div>
  );
}
