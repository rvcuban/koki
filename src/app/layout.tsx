import type { Metadata } from "next";
import { Nunito, Baloo_2, Geist_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const baloo2 = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://koki.app";
const siteName = "Koki";
const siteDescription =
  "Koki automatiza las celebraciones de cumpleaños de tu equipo. Desde el seguimiento de fechas hasta la entrega de la tarta perfecta — nunca más olvides un cumpleaños.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Koki — Haz cada cumpleaños inolvidable",
    template: "%s | Koki",
  },
  description: siteDescription,
  keywords: [
    "cumpleaños empleados",
    "entrega tartas cumpleaños",
    "celebraciones equipo",
    "cumpleaños oficina",
    "automatización RRHH",
    "engagement empleados",
    "gestión cumpleaños",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName,
    title: "Koki — Haz cada cumpleaños inolvidable",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Koki — Celebraciones de cumpleaños automatizadas para tu equipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koki — Haz cada cumpleaños inolvidable",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${baloo2.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
