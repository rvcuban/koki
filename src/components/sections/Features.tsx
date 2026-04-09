"use client";

import {
  Users,
  Settings2,
  LayoutDashboard,
  Bell,
  PartyPopper,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Import your team via CSV or connect your HRIS — Koki keeps every birthday up to date automatically.",
    accent: "bg-coral-100 text-coral-600",
    span: "md:col-span-2",
  },
  {
    icon: Settings2,
    title: "Smart Rules Engine",
    description:
      "Define celebration rules once: cake type, dietary preferences, budget per person. Koki handles the rest.",
    accent: "bg-teal-100 text-teal-600",
    span: "",
  },
  {
    icon: LayoutDashboard,
    title: "Order Dashboard",
    description:
      "Track every delivery in real time. See what's scheduled, what's been delivered, and what's coming up.",
    accent: "bg-vanilla-200 text-vanilla-800",
    span: "",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automated reminders for upcoming birthdays. Slack, email, or in-app — your team never misses a celebration.",
    accent: "bg-teal-100 text-teal-600",
    span: "md:col-span-2",
  },
  {
    icon: PartyPopper,
    title: "Special Occasions",
    description:
      "Work anniversaries, promotions, farewells — trigger ad-hoc celebrations anytime with a couple of clicks.",
    accent: "bg-coral-100 text-coral-600",
    span: "md:col-span-3",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-vanilla-100/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
            Platform Features
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Everything You Need to{" "}
            <span className="text-primary">Celebrate</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From employee onboarding to delivery tracking, Koki gives you the
            tools to make every team member feel special.
          </p>
        </div>

        {/* Feature cards — bento grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description, accent, span }) => (
            <Card
              key={title}
              className={cn(
                "group transition-shadow duration-300 hover:shadow-lg",
                span
              )}
            >
              <CardHeader>
                <div
                  className={cn(
                    "mb-2 inline-flex size-10 items-center justify-center rounded-lg",
                    accent
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for future screenshot / mockup */}
                <div className="flex h-32 items-center justify-center rounded-lg bg-muted/50">
                  <span className="text-xs font-medium text-muted-foreground/60">
                    Preview coming soon
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
