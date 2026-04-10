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
import { staggerContainer, scaleIn, buttonHover, buttonTap, springTransition } from "@/lib/animations";

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
      "Perfecto para equipos pequeños que empiezan con celebraciones automatizadas.",
    features: [
      "Hasta 25 empleados",
      "Carga de empleados por CSV",
      "Notificaciones por email",
      "Selección estándar de tartas",
      "Panel de calendario de cumpleaños",
    ],
    cta: "Unirse a la lista de espera",
    href: "#contact",
  },
  {
    name: "Business",
    monthlyPrice: "€7",
    annualPrice: "€5.50",
    period: "/cake",
    description:
      "Automatización completa para empresas en crecimiento que se preocupan por su gente.",
    features: [
      "Hasta 100 empleados",
      "Integración con RRHH",
      "Motor de reglas de celebración",
      "Menú completo de tartas",
      "Soporte prioritario",
      "Programación personalizada de entregas",
    ],
    cta: "Solicitar acceso anticipado",
    href: "#contact",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "A medida",
    annualPrice: "A medida",
    description:
      "Soluciones a medida para organizaciones con necesidades únicas de celebración.",
    features: [
      "Empleados ilimitados",
      "Asociaciones personalizadas con panaderías",
      "Acceso completo a la API",
      "Gestor de cuenta dedicado",
      "Branding personalizado",
      "Garantía SLA",
    ],
    cta: "Habla con nosotros",
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
        Mensual
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
        <motion.span
          layout
          transition={springTransition}
          className={cn(
            "pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg ring-0 mt-0.5",
            isAnnual ? "ml-auto mr-0.5" : "ml-0.5"
          )}
        />
      </button>
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          isAnnual ? "text-foreground" : "text-muted-foreground"
        )}
      >
        Anual
      </span>
      {isAnnual && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={springTransition}
          >
            <Badge
              variant="secondary"
              className="bg-teal-100 text-teal-600 text-xs"
            >
              Ahorra 20%
            </Badge>
          </motion.div>
        </AnimatePresence>
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
  const isCustom = price === "A medida";

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
            Más popular
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
            Facturación anual — ahorra 20%
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
        <motion.a
          href={tier.href}
          whileHover={buttonHover}
          whileTap={buttonTap}
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
        </motion.a>
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
              Precios de acceso anticipado
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Precio simple por tarta — solo pagas cuando entregamos. Las empresas
              fundadoras aseguran tarifas de acceso anticipado.
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
          Todos los planes incluyen onboarding personalizado. Los early adopters aseguran
          precios de miembro fundador durante 12 meses.
        </p>
      </div>
    </section>
  );
}
