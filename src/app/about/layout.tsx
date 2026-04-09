import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Koki",
  description:
    "Learn about Koki's mission to make every workplace celebration effortless and meaningful.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
