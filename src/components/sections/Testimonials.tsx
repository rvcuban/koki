"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp, buttonHover, buttonTap } from "@/lib/animations";
import { Gift, MessageCircle, Tag } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PERKS = [
  {
    icon: Gift,
    title: "Free pilot programme",
    description:
      "Join as a founding team and get 3 months free. No commitment, no credit card.",
  },
  {
    icon: MessageCircle,
    title: "Direct line to founders",
    description:
      "You'll work with us directly. Your feedback shapes the product roadmap.",
  },
  {
    icon: Tag,
    title: "Founding member pricing",
    description:
      "Lock in our best rate — forever. As a thank you for believing early.",
  },
] as const;

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-vanilla-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Be part of the beginning
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re looking for our first teams in Barcelona to shape Koki
              together. Early adopters get a voice in the product — and a few
              perks, too.
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
          {PERKS.map((perk) => {
            const Icon = perk.icon;
            return (
              <motion.div key={perk.title} variants={fadeInUp}>
                <Card className="group relative flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex flex-1 flex-col items-center gap-4 pt-8 text-center">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-coral-100/60 text-coral-600">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{perk.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {perk.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Early access CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#pricing"
            whileHover={buttonHover}
            whileTap={buttonTap}
            className={cn(
              buttonVariants({ size: "lg" }),
              "px-8 text-base font-semibold"
            )}
          >
            Apply for Early Access
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
