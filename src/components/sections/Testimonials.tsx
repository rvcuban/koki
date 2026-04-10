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
    title: "Programa piloto gratuito",
    description:
      "Únete como equipo fundador y obtén 3 meses gratis. Sin compromiso, sin tarjeta de crédito.",
  },
  {
    icon: MessageCircle,
    title: "Línea directa con los fundadores",
    description:
      "Trabajarás con nosotros directamente. Tu feedback define la hoja de ruta del producto.",
  },
  {
    icon: Tag,
    title: "Precio de miembro fundador",
    description:
      "Asegura nuestra mejor tarifa — para siempre. Como agradecimiento por confiar desde el principio.",
  },
] as const;

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-vanilla-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Sé parte del inicio
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Buscamos nuestros primeros equipos en Barcelona para dar forma a Koki juntos. Los early adopters tienen voz en el producto — y algunos beneficios extra.
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
            Solicitar acceso anticipado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
