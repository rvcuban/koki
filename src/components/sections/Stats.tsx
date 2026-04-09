"use client";

import * as React from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 300, suffix: "+", label: "Companies trust Koki" },
  { value: 100, suffix: "%", label: "Client retention rate" },
  { value: 15000, suffix: "+", label: "Cakes delivered" },
  { value: 4.9, suffix: "/5", label: "Average rating" },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const isDecimal = target % 1 !== 0;

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ stat }: { stat: StatItem }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tracking-tight sm:text-5xl">
        {stat.value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
