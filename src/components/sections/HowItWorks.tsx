"use client";

import { Users, Settings, Cake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "Connect Your Team",
    description:
      "Upload your employee list via CSV or connect your HR platform. We're building integrations with the most popular tools in Europe.",
    icon: Users,
    accent: "from-coral-400 to-coral-500",
    accentBg: "bg-coral-50",
  },
  {
    number: "02",
    title: "Set Your Rules",
    description:
      "Choose cakes, set dietary preferences, and configure automation rules. Set it once — it runs forever.",
    icon: Settings,
    accent: "from-teal-400 to-teal-500",
    accentBg: "bg-teal-50",
  },
  {
    number: "03",
    title: "Sit Back & Celebrate",
    description:
      "We handle everything — ordering, delivery, and notifications. Your team feels valued every single time.",
    icon: Cake,
    accent: "from-vanilla-500 to-vanilla-600",
    accentBg: "bg-vanilla-50",
  },
] as const;

function AnimatedConnectingLine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-24 right-[16.6%] left-[16.6%] hidden md:block"
    >
      <motion.div
        className="h-[2px] w-full origin-left bg-gradient-to-r from-coral-300/60 via-teal-300/60 to-vanilla-500/60"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="koki-section">
      <div className="koki-container">
        {/* Section header */}
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
              Simple as 1-2-3
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How Koki Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to automate birthday celebrations and make your
              team feel truly appreciated.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <motion.div
          className="relative mt-16 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Animated connecting line (desktop only) */}
          <AnimatedConnectingLine />

          {STEPS.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <Card className="group relative border-0 bg-transparent shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <span className="mb-4 text-sm font-bold tracking-wider text-primary/40">
                    {step.number}
                  </span>

                  {/* Icon with gradient background */}
                  <div
                    className={`mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} shadow-warm transition-transform duration-300 group-hover/card:scale-110`}
                  >
                    <step.icon
                      className="size-7 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
