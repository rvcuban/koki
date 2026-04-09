import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Koki",
  description:
    "Learn about Koki's mission to make every workplace celebration effortless and meaningful.",
};

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
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Making workplaces warmer, one cake at a time
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We started Koki with a simple observation: companies forget
                birthdays. It&apos;s not because they don&apos;t care — they just
                don&apos;t have the time. We built the solution.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-7">
                <p>
                  It all started when our co-founder missed her own
                  teammate&apos;s birthday — for the third year in a row. She
                  realized that in companies of 50, 100, or 500 people, keeping
                  track of every celebration is practically impossible without
                  the right tools.
                </p>
                <p>
                  So we built Koki: an automated platform that connects to your
                  HR system, finds every upcoming birthday, and delivers a
                  freshly baked cake right to the office. No spreadsheets. No
                  calendar reminders. No one left out.
                </p>
                <p>
                  Today, over 300 companies trust Koki to handle their
                  celebrations. Because when people feel appreciated, they do
                  their best work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Meet the Team
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              A small team with a big mission — making every workplace a little
              warmer.
            </p>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member) => (
                <Card key={member.name} className="text-center">
                  <CardContent className="flex flex-col items-center gap-3 pt-6">
                    <div className="flex size-20 items-center justify-center rounded-full bg-muted text-xl font-bold text-muted-foreground">
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
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Our Values
            </h2>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
              {VALUES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
