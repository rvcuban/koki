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
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

/* =============================================
   Mini Mockup Components
   ============================================= */

function EmployeeTableMockup() {
  const rows = [
    { initials: "SM", name: "Sarah Mitchell", birthday: "Mar 15", color: "bg-coral-400", status: "Active", statusColor: "bg-teal-100 text-teal-700" },
    { initials: "JC", name: "James Chen", birthday: "Apr 02", color: "bg-teal-400", status: "Active", statusColor: "bg-teal-100 text-teal-700" },
    { initials: "LP", name: "Luna Park", birthday: "May 21", color: "bg-vanilla-600", status: "Upcoming", statusColor: "bg-vanilla-100 text-vanilla-800" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-vanilla-50/50 shadow-sm">
      {/* Table header */}
      <div className="grid grid-cols-3 gap-2 border-b border-border/40 bg-teal-50/60 px-3 py-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
          Employee
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
          Birthday
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
          Status
        </span>
      </div>
      {/* Table rows */}
      {rows.map((row, i) => (
        <div
          key={row.name}
          className={cn(
            "grid grid-cols-3 items-center gap-2 px-3 py-2",
            i % 2 === 1 && "bg-vanilla-50/30"
          )}
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white",
                row.color
              )}
            >
              {row.initials}
            </div>
            <span className="truncate text-xs font-medium text-foreground">
              {row.name}
            </span>
          </div>
          <span className="text-xs text-teal-700/70">{row.birthday}</span>
          <span className={cn("inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-medium", row.statusColor)}>
            {row.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function RulesEngineMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-vanilla-50/40 p-3 shadow-sm">
      {/* Toggle rows */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-foreground">
            Birthday cakes
          </span>
          {/* Toggle ON */}
          <div className="flex h-5 w-9 items-center rounded-full bg-teal-500 px-0.5">
            <div className="ml-auto size-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-foreground">
            Work anniversaries
          </span>
          {/* Toggle OFF */}
          <div className="flex h-5 w-9 items-center rounded-full bg-warm-200 px-0.5">
            <div className="size-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div className="mt-3 rounded-lg border border-teal-200/50 bg-teal-50/30 px-3 py-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-teal-600">Default cake</span>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-foreground">
              Chocolate Cake
            </span>
            <svg
              className="size-3 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Status badge */}
      <div className="mt-3 flex items-center gap-1.5">
        <div className="size-2 rounded-full bg-teal-500 animate-pulse" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
          Active
        </span>
      </div>
    </div>
  );
}

function OrderDashboardMockup() {
  const orders = [
    {
      status: "bg-teal-500",
      label: "Delivered",
      labelColor: "text-teal-600",
      name: "Sarah M.",
      date: "Mar 15",
    },
    {
      status: "bg-vanilla-500",
      label: "In transit",
      labelColor: "text-vanilla-700",
      name: "James C.",
      date: "Apr 02",
    },
    {
      status: "bg-warm-300",
      label: "Scheduled",
      labelColor: "text-warm-500",
      name: "Luna P.",
      date: "May 21",
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-teal-50/30 p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
          Recent orders
        </span>
        <span className="rounded-full bg-vanilla-100 px-2 py-0.5 text-[9px] font-medium text-vanilla-800">
          3 total
        </span>
      </div>
      <div className="space-y-2.5">
        {orders.map((order) => (
          <div key={order.name} className="flex items-center gap-3 rounded-lg bg-white/60 px-2.5 py-1.5">
            {/* Status dot */}
            <div className={cn("size-2.5 shrink-0 rounded-full", order.status)} />
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">
                  {order.name}
                </span>
                <span className="text-[10px] text-teal-500/70">
                  {order.date}
                </span>
              </div>
              <span className={cn("text-[10px]", order.labelColor)}>
                {order.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationsMockup() {
  return (
    <div className="space-y-2">
      {/* Email preview */}
      <div className="overflow-hidden rounded-xl border border-coral-200/50 bg-coral-50/30 p-3 shadow-sm">
        <div className="flex items-start gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-coral-100 text-sm">
            🎂
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-foreground">
              Birthday Reminder
            </p>
            <p className="mt-0.5 truncate text-[10px] text-teal-600/80">
              Sarah&apos;s birthday is in 3 days
            </p>
          </div>
          <span className="shrink-0 text-[9px] text-coral-400">
            2m ago
          </span>
        </div>
      </div>
      {/* Push notification */}
      <div className="overflow-hidden rounded-xl border border-teal-200/50 bg-teal-50/30 p-3 shadow-sm">
        <div className="flex items-start gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-vanilla-100 text-sm">
            🔔
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-foreground">
              Cake ordered!
            </p>
            <p className="mt-0.5 truncate text-[10px] text-teal-600/80">
              Chocolate cake for James — delivery Apr 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CelebrationMockup() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-vanilla-50 to-coral-50 p-4 shadow-sm">
      {/* Confetti dots */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          "top-2 left-4 bg-coral-300",
          "top-3 right-6 bg-teal-300",
          "bottom-4 left-8 bg-vanilla-400",
          "top-6 right-12 bg-coral-400",
          "bottom-2 right-4 bg-teal-400",
          "top-4 left-16 bg-vanilla-500",
          "bottom-6 left-12 bg-coral-200",
          "top-1 right-16 bg-teal-200",
        ].map((classes) => (
          <div
            key={classes}
            className={cn(
              "absolute size-1.5 rounded-full opacity-60",
              classes
            )}
          />
        ))}
      </div>
      {/* Card content */}
      <div className="relative text-center">
        <p className="text-2xl">🎉</p>
        <p className="mt-1 text-sm font-semibold text-foreground">
          Congratulations!
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          5 years at the company
        </p>
        <div className="mx-auto mt-2 h-px w-12 bg-gradient-to-r from-transparent via-coral-300 to-transparent" />
      </div>
    </div>
  );
}

/* =============================================
   Mockup map
   ============================================= */

const MOCKUP_MAP: Record<string, React.FC> = {
  "Smart Employee Management": EmployeeTableMockup,
  "Intelligent Rules Engine": RulesEngineMockup,
  "Real-time Order Dashboard": OrderDashboardMockup,
  "Automated Notifications": NotificationsMockup,
  "Special Occasions": CelebrationMockup,
};

/* =============================================
   Feature data
   ============================================= */

const FEATURES = [
  {
    icon: Users,
    title: "Smart Employee Management",
    description:
      "Bulk upload employee data via CSV or connect directly with your HR platform. We're actively building integrations with tools like Personio, Factorial, and BambooHR — with more on the way.",
    accent: "bg-coral-100 text-coral-600",
    span: "md:col-span-2",
  },
  {
    icon: Settings2,
    title: "Intelligent Rules Engine",
    description:
      "Set your celebration rules once and let Koki run forever. Configure per-team preferences, dietary restrictions, cake styles, and delivery windows.",
    accent: "bg-teal-100 text-teal-600",
    span: "",
  },
  {
    icon: LayoutDashboard,
    title: "Real-time Order Dashboard",
    description:
      "Track every delivery in real time. See upcoming celebrations, manage orders, and get full visibility into your celebration pipeline.",
    accent: "bg-vanilla-200 text-vanilla-800",
    span: "",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description:
      "Never miss a birthday again. Automatic reminders at 2 weeks, 1 week, and 1 day before — for managers, teams, and admins.",
    accent: "bg-teal-100 text-teal-600",
    span: "md:col-span-2",
  },
  {
    icon: PartyPopper,
    title: "Special Occasions",
    description:
      "Go beyond birthdays — celebrate work anniversaries, promotions, new hires, and personal milestones. Koki handles every occasion that matters.",
    accent: "bg-coral-100 text-coral-600",
    span: "md:col-span-3",
  },
] as const;

/* =============================================
   Features Component
   ============================================= */

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
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
              Platform Features
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Everything you need to{" "}
              <span className="text-primary">celebrate your team</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From employee onboarding to delivery tracking, Koki gives you the
              tools to make every team member feel special.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature cards — bento grid */}
        <motion.div
          className="mt-16 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FEATURES.map(({ icon: Icon, title, description, accent, span }) => {
            const Mockup = MOCKUP_MAP[title];
            return (
              <motion.div key={title} variants={fadeInUp} className={cn(span)}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div
                      className={cn(
                        "mb-2 inline-flex size-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover/card:scale-110",
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
                    {Mockup ? (
                      <Mockup />
                    ) : (
                      <div className="flex h-32 items-center justify-center rounded-lg bg-muted/50">
                        <span className="text-xs font-medium text-muted-foreground/60">
                          Preview coming soon
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
