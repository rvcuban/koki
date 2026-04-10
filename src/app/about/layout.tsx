import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Koki",
  description:
    "Descubre la misión de Koki: hacer que cada celebración en el trabajo sea fácil y significativa.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
