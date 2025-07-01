"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
};

export function AnimatedCounter({
  target,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const startTime = Date.now();

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min(1, (now - startTime) / duration);
        const current = Math.floor(progress * (end - start) + start);
        setCount(current);

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 25);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function useInView(ref: React.RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const currentRef = ref.current;

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}
