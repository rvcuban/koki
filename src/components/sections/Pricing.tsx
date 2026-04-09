"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
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

interface PricingTier {
  name: string;
  price: string;
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
    price: "$8",
    period: "/cake",
    description: "Perfect for small teams getting started with automated celebrations.",
    features: [
      "Up to 25 employees",
      "CSV employee upload",
      "Email notifications",
      "Standard cake selection",
      "Birthday calendar dashboard",
    ],
    cta: "Get Started",
    href: "#",
  },
  {
    name: "Business",
    price: "$6",
    period: "/cake",
    description: "Full automation for growing companies that care about their people.",
    features: [
      "Up to 100 employees",
      "HRIS integration",
      "Celebration rules engine",
      "Full cake menu",
      "Priority support",
      "Custom delivery scheduling",
    ],
    cta: "Start Free Trial",
    href: "#",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for organizations with unique celebration needs.",
    features: [
      "Unlimited employees",
      "Custom bakery partnerships",
      "Full API access",
      "Dedicated account manager",
      "Custom branding",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "#",
  },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col",
        tier.popular
          ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary"
          : ""
      )}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-3 py-0.5 text-xs font-semibold">
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
          <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
          {tier.period && (
            <span className="text-sm text-muted-foreground">{tier.period}</span>
          )}
        </div>

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
            "w-full"
          )}
        >
          {tier.cta}
        </a>
      </CardFooter>
    </Card>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No hidden fees. No long-term contracts. Just delicious cakes
            delivered on the right day.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include free setup and a 14-day money-back guarantee. No
          credit card required to start.
        </p>
      </div>
    </section>
  );
}
