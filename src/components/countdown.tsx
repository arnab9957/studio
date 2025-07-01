"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    // Set initial value to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    if (isNaN(value)) {
      return null;
    }
    return (
      <div key={interval} className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-bold text-secondary tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
        <span className="text-sm md:text-base font-medium uppercase text-muted-foreground">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timerComponents.length ? timerComponents : <div className="text-2xl font-bold text-primary">The event has started!</div>}
    </div>
  );
}
