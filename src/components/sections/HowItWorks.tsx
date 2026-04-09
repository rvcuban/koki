import { Users, Settings, Cake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const STEPS = [
  {
    number: "01",
    title: "Connect Your Team",
    description:
      "Upload your employee list via CSV or sync directly with your HR system. We integrate with 80+ platforms.",
    icon: Users,
    accent: "bg-coral-100 text-coral-600",
  },
  {
    number: "02",
    title: "Set Your Rules",
    description:
      "Choose cakes, set dietary preferences, and configure automation rules. Set it once — it runs forever.",
    icon: Settings,
    accent: "bg-teal-100 text-teal-600",
  },
  {
    number: "03",
    title: "Sit Back & Celebrate",
    description:
      "We handle everything — ordering, delivery, and notifications. Your team feels valued every single time.",
    icon: Cake,
    accent: "bg-vanilla-100 text-vanilla-700",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="koki-section">
      <div className="koki-container">
        {/* Section header */}
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

        {/* Steps */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-24 right-[16.6%] left-[16.6%] hidden h-px bg-gradient-to-r from-coral-300/50 via-teal-300/50 to-vanilla-500/50 md:block"
          />

          {STEPS.map((step) => (
            <Card
              key={step.number}
              className="group relative border-0 bg-transparent shadow-none transition-all"
            >
              <CardContent className="flex flex-col items-center text-center">
                {/* Step number */}
                <span className="mb-4 text-sm font-bold tracking-wider text-primary/40">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`mb-6 flex size-16 items-center justify-center rounded-2xl ${step.accent} shadow-warm transition-transform group-hover:scale-110`}
                >
                  <step.icon className="size-7" strokeWidth={1.5} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
