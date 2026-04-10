"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, Zap, Cake } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp, iconHover } from "@/lib/animations";

const STATS = [
  {
    target: 70,
    suffix: "%",
    label: "de empleados dice que el reconocimiento mejora la moral",
    icon: TrendingUp,
  },
  {
    target: 2,
    suffix: "x",
    label: "más probabilidad de quedarse si se sienten valorados",
    icon: Heart,
  },
  {
    target: 10,
    suffix: "min",
    label: "para configurarlo — después funciona solo",
    icon: Zap,
  },
  {
    target: 0,
    suffix: "",
    label: "cumpleaños olvidados",
    icon: Cake,
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
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
              Por qué importa
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Las celebraciones impulsan la cultura
            </h2>
          </div>
        </AnimatedSection>

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
                  <motion.div
                    whileHover={iconHover}
                    className="mb-3 flex size-12 items-center justify-center rounded-xl bg-coral-100/60 text-coral-600"
                  >
                    <Icon className="size-6" />
                  </motion.div>

                  <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {stat.target === 0 ? (
                      <span>0</span>
                    ) : (
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        decimals={0}
                      />
                    )}
                  </p>

                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Sources footnote */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground/60">
            Fuentes: Gallup State of the Global Workplace Report; Deloitte
            Talent 2020
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
