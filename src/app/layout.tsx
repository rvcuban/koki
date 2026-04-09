import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://koki.app";
const siteName = "Koki";
const siteDescription =
  "Koki automates birthday celebrations for your team. From tracking dates to delivering the perfect cake — never miss a birthday again.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Koki — Make Every Birthday Unforgettable",
    template: "%s | Koki",
  },
  description: siteDescription,
  keywords: [
    "employee birthdays",
    "birthday cake delivery",
    "team celebrations",
    "office birthdays",
    "HR automation",
    "employee engagement",
    "birthday management",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Koki — Make Every Birthday Unforgettable",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Koki — Automated birthday celebrations for your team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koki — Make Every Birthday Unforgettable",
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
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
