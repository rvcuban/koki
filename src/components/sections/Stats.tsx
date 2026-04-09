"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Cake, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const STATS = [
  {
    target: 300,
    suffix: "+",
    label: "Companies",
    icon: Building2,
  },
  {
    target: 100,
    suffix: "%",
    label: "Retention",
    icon: TrendingUp,
  },
  {
    target: 10000,
    suffix: "+",
    label: "Cakes Delivered",
    icon: Cake,
  },
  {
    target: 4.9,
    suffix: "/5",
    label: "Satisfaction",
    decimals: 1,
    icon: Star,
  },
] as const;

export function Stats() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-vanilla-50/20">
      {/* Subtle dot pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-coral-50/30 via-transparent to-coral-50/30"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4"
          >
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-coral-100/60 text-coral-600">
                    <Icon className="size-6" />
                  </div>

                  <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                    />
                  </p>

                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
