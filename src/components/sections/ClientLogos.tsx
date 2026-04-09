"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const LOGOS = [
  "TechFlow",
  "Bright Studio",
  "Growthly",
  "Acme Corp",
  "Nova Labs",
  "Zenith AI",
  "Pulse Health",
  "Stratos",
] as const;

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-center px-8 transition-all duration-300 grayscale hover:grayscale-0">
      <span className="text-xl font-bold tracking-tight text-muted-foreground/40 select-none whitespace-nowrap transition-colors duration-300 hover:text-foreground/70">
        {name}
      </span>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="border-y bg-muted/20 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Trusted by 300+ companies worldwide
          </p>
        </AnimatedSection>

        {/* Marquee-style scrolling logos */}
        <div className="relative mt-10 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee items-center gap-16">
            {/* Duplicate logos for seamless infinite loop */}
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <LogoPlaceholder key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
