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
    title: "Celebración",
    description:
      "Creemos que cada cumpleaños merece reconocimiento. Los pequeños gestos construyen grandes culturas.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description:
      "Configúralo una vez, olvídate para siempre. Nos encargamos de la logística para que te centres en lo que importa.",
  },
  {
    icon: Award,
    title: "Calidad",
    description:
      "Trabajamos solo con las mejores panaderías locales para asegurar que cada tarta sea una experiencia memorable.",
  },
] as const;

// TODO: Replace with real team member names and photos
const TEAM = [
  {
    name: "Sofia Martinez",
    role: "CEO y cofundadora",
    initials: "SM",
  },
  {
    name: "Lucas Chen",
    role: "CTO y cofundador",
    initials: "LC",
  },
  {
    name: "Maria Gonzalez",
    role: "Directora de operaciones",
    initials: "MG",
  },
  {
    name: "David Kim",
    role: "Director de alianzas",
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
                  Haciendo las oficinas más cálidas, una tarta a la vez
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Empezamos Koki con una simple observación: las empresas olvidan
                  los cumpleaños. No es porque no les importe — simplemente no
                  tienen tiempo. Construimos la solución.
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
                  Nuestra historia
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-7">
                  <p>
                    Todo empezó cuando nuestra cofundadora olvidó el cumpleaños
                    de su compañera de equipo — por tercer año consecutivo. Se
                    dio cuenta de que en empresas de 50, 100 o 500 personas,
                    llevar el control de cada celebración es prácticamente
                    imposible sin las herramientas adecuadas.
                  </p>
                  <p>
                    Así que construimos Koki: una plataforma automatizada que se
                    conecta a tu sistema de RRHH, encuentra cada cumpleaños
                    próximo y entrega una tarta recién hecha en la oficina. Sin
                    hojas de cálculo. Sin recordatorios de calendario. Nadie
                    queda fuera.
                  </p>
                  <p>
                    Estamos empezando — lanzando en Barcelona y trabajando con
                    nuestros primeros equipos para construir algo que haga cada
                    oficina un poco más cálida. Porque cuando las personas se
                    sienten valoradas, dan lo mejor de sí.
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
                Conoce al equipo
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Un equipo pequeño con una gran misión — hacer cada oficina un
                poco más cálida.
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
                Nuestros valores
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
