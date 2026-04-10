"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Award } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/lib/animations";

const VALUES = [
  {
    icon: Heart,
    title: "Celebration",
    description:
      "We believe every birthday deserves recognition. Small gestures build big cultures.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Set it once, forget it forever. We handle the logistics so you can focus on what matters.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We partner only with the best local bakeries to ensure every cake is a memorable experience.",
  },
] as const;

// TODO: Replace with real team member names and photos
const TEAM = [
  {
    name: "Sofia Martinez",
    role: "CEO & Co-founder",
    initials: "SM",
  },
  {
    name: "Lucas Chen",
    role: "CTO & Co-founder",
    initials: "LC",
  },
  {
    name: "Maria Gonzalez",
    role: "Head of Operations",
    initials: "MG",
  },
  {
    name: "David Kim",
    role: "Head of Partnerships",
    initials: "DK",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                  Making workplaces warmer, one cake at a time
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  We started Koki with a simple observation: companies forget
                  birthdays. It&apos;s not because they don&apos;t care — they
                  just don&apos;t have the time. We built the solution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.1}>
              <div className="mx-auto max-w-3xl">
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-7">
                  <p>
                    It all started when our co-founder missed her own
                    teammate&apos;s birthday — for the third year in a row. She
                    realized that in companies of 50, 100, or 500 people,
                    keeping track of every celebration is practically impossible
                    without the right tools.
                  </p>
                  <p>
                    So we built Koki: an automated platform that connects to
                    your HR system, finds every upcoming birthday, and delivers a
                    freshly baked cake right to the office. No spreadsheets. No
                    calendar reminders. No one left out.
                  </p>
                  <p>
                    We&apos;re just getting started — launching in Barcelona and
                    working with our first teams to build something that makes
                    every workplace a little warmer. Because when people feel
                    appreciated, they do their best work.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Meet the Team
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                A small team with a big mission — making every workplace a
                little warmer.
              </p>
            </AnimatedSection>

            <AnimatedSection variants={staggerContainer} delay={0.2}>
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {TEAM.map((member, index) => (
                  <motion.div key={member.name} variants={fadeInUp}>
                    <Card className="text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-warm-lg cursor-default">
                      <CardContent className="flex flex-col items-center gap-3 pt-6">
                        <div className="flex size-20 items-center justify-center rounded-full bg-muted text-xl font-bold text-muted-foreground transition-colors duration-300 group-hover/card:bg-primary/10">
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Our Values
              </h2>
            </AnimatedSection>

            <AnimatedSection variants={staggerContainer} delay={0.2}>
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
                {VALUES.map(({ icon: Icon, title, description }) => (
                  <motion.div
                    key={title}
                    variants={scaleIn}
                    className="text-center"
                  >
                    <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 hover:scale-110">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
