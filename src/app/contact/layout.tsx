import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Koki",
  description:
    "Ponte en contacto con el equipo de Koki. Nos encantaría saber de ti.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
