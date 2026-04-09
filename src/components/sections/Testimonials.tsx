"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const TESTIMONIALS = [
  {
    quote:
      "Koki completely transformed how we celebrate birthdays. Our team morale has never been higher, and I never have to worry about forgetting someone.",
    name: "Rachel Adams",
    role: "People Operations Manager",
    company: "TechFlow Inc.",
    initials: "RA",
  },
  {
    quote:
      "We went from a messy spreadsheet to fully automated celebrations in under an hour. The cakes are incredible and always arrive on time.",
    name: "Marcus Chen",
    role: "HR Director",
    company: "Bright Studio",
    initials: "MC",
  },
  {
    quote:
      "Our employees actually look forward to birthdays now. Koki made celebration a real part of our company culture — effortlessly.",
    name: "Priya Sharma",
    role: "CEO",
    company: "Growthly",
    initials: "PS",
  },
] as const;

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm text-yellow-500">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by teams everywhere
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it — hear from the companies
              making every birthday count.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeInUp}>
              <Card className="group relative flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Quote icon */}
                <div className="absolute left-4 top-4 text-4xl font-serif leading-none text-coral-200/60 select-none">
                  &ldquo;
                </div>

                <CardContent className="flex flex-1 flex-col gap-4 pt-10">
                  <StarRating />

                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary ring-2 ring-coral-300">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
