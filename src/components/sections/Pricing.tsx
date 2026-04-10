"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, scaleIn } from "@/lib/animations";

interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "€5",
    annualPrice: "€4",
    period: "/cake",
    description:
      "Perfect for small teams getting started with automated celebrations.",
    features: [
      "Up to 25 employees",
      "CSV employee upload",
      "Email notifications",
      "Standard cake selection",
      "Birthday calendar dashboard",
    ],
    cta: "Join the Waitlist",
    href: "#contact",
  },
  {
    name: "Business",
    monthlyPrice: "€7",
    annualPrice: "€5.50",
    period: "/cake",
    description:
      "Full automation for growing companies that care about their people.",
    features: [
      "Up to 100 employees",
      "HRIS integration",
      "Celebration rules engine",
      "Full cake menu",
      "Priority support",
      "Custom delivery scheduling",
    ],
    cta: "Request Early Access",
    href: "#contact",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description:
      "Tailored solutions for organisations with unique celebration needs.",
    features: [
      "Unlimited employees",
      "Custom bakery partnerships",
      "Full API access",
      "Dedicated account manager",
      "Custom branding",
      "SLA guarantee",
    ],
    cta: "Talk to Us",
    href: "/contact",
  },
];

function PricingToggle({
  isAnnual,
  onToggle,
}: {
  isAnnual: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          !isAnnual ? "text-foreground" : "text-muted-foreground"
        )}
      >
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        onClick={onToggle}
        className={cn(
          "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isAnnual ? "bg-primary" : "bg-muted"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 mt-0.5",
            isAnnual ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </button>
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          isAnnual ? "text-foreground" : "text-muted-foreground"
        )}
      >
        Annual
      </span>
      {isAnnual && (
        <Badge
          variant="secondary"
          className="bg-teal-100 text-teal-600 text-xs"
        >
          Save 20%
        </Badge>
      )}
    </div>
  );
}

function PricingCard({
  tier,
  isAnnual,
}: {
  tier: PricingTier;
  isAnnual: boolean;
}) {
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const isCustom = price === "Custom";

  return (
    <Card
      className={cn(
        "relative flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        tier.popular
          ? "scale-105 border-coral-500 bg-coral-50/30 shadow-lg shadow-coral-500/10 ring-2 ring-coral-500"
          : "hover:border-teal-300"
      )}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="animate-pulse bg-coral-500 text-white px-3 py-0.5 text-xs font-semibold">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{tier.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {tier.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-6">
        <div className="flex items-baseline gap-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={price}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold tracking-tight"
            >
              {price}
            </motion.span>
          </AnimatePresence>
          {tier.period && !isCustom && (
            <span className="text-sm text-muted-foreground">{tier.period}</span>
          )}
        </div>

        {isAnnual && !isCustom && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-xs text-teal-600 font-medium -mt-4"
          >
            Billed annually — save 20%
          </motion.p>
        )}

        <ul className="flex flex-col gap-3 text-sm">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="border-t-0 bg-transparent pt-0 pb-4 px-4">
        <a
          href={tier.href}
          className={cn(
            buttonVariants({
              variant: tier.popular ? "default" : "outline",
              size: "lg",
            }),
            "w-full",
            tier.popular && "bg-coral-500 hover:bg-coral-600 text-white"
          )}
        >
          {tier.cta}
        </a>
      </CardFooter>
    </Card>
  );
}

export function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <section id="pricing" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Early access pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple per-cake pricing — you only pay when we deliver. Founding
              companies lock in early-access rates.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-8">
          <PricingToggle
            isAnnual={isAnnual}
            onToggle={() => setIsAnnual(!isAnnual)}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-3"
        >
          {TIERS.map((tier) => (
            <motion.div key={tier.name} variants={scaleIn}>
              <PricingCard tier={tier} isAnnual={isAnnual} />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include personal onboarding. Early adopters get
          founding-member pricing locked in for 12 months.
        </p>
      </div>
    </section>
  );
}
