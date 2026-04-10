"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonHover, buttonTap } from "@/lib/animations";

function FloatingParticle({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary-foreground/10"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

const PARTICLES = [
  { delay: 0, x: "10%", y: "20%", size: 8 },
  { delay: 1.2, x: "85%", y: "15%", size: 6 },
  { delay: 0.6, x: "75%", y: "70%", size: 10 },
  { delay: 2.0, x: "20%", y: "75%", size: 5 },
  { delay: 0.3, x: "50%", y: "10%", size: 7 },
  { delay: 1.8, x: "30%", y: "60%", size: 9 },
  { delay: 1.0, x: "90%", y: "45%", size: 6 },
  { delay: 0.8, x: "5%", y: "50%", size: 8 },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "No credit card required" },
  { icon: Zap, text: "Set up in minutes" },
  { icon: MapPin, text: "Made in Barcelona" },
];

export function CallToAction() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-16 sm:py-24">
            {/* Animated floating particles */}
            {PARTICLES.map((p, i) => (
              <FloatingParticle key={i} {...p} />
            ))}

            {/* Decorative gradient blob */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
            >
              <div className="h-[250px] w-[600px] rounded-full bg-primary-foreground/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
              >
                Ready to never forget a birthday{" "}
                <span className="bg-gradient-to-r from-vanilla-200 to-vanilla-400 bg-clip-text text-transparent">
                  again
                </span>
                ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80"
              >
                Be among the first teams in Barcelona to automate
                celebrations. Set it up once — Koki handles the rest.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <motion.a
                  href="#pricing"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "group relative bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 text-base font-semibold transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]"
                  )}
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  Get Early Access — It&apos;s Free
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-6"
              >
                {TRUST_BADGES.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.text}
                      className="flex items-center gap-1.5 text-sm text-primary-foreground/70"
                    >
                      <Icon className="size-4" />
                      <span>{badge.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
