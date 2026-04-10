"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

const PRODUCT_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#features" },
] as const;

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// TODO: GDPR REQUIREMENT — Privacy Policy, Terms, and Cookie Policy pages must exist before collecting any user data (newsletter, contact form)
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map(({ label, href }) => {
          const isExternal = href.startsWith("#");
          const Component = isExternal ? "a" : Link;
          return (
            <li key={label}>
              <Component
                href={href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-coral-400"
              >
                {label}
              </Component>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SocialIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
    >
      {children}
    </a>
  );
}

function NewsletterForm() {
  return (
    <div className="mt-6">
      <p className="text-sm font-medium text-foreground">Stay in the loop</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Get updates on new features and celebrations tips.
      </p>
      <div className="mt-3 flex gap-2">
        <input
          type="email"
          placeholder="you@company.com"
          className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-all duration-300 placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        />
        <button className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-md">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <AnimatedSection variants={staggerContainer}>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary"
              >
                Koki
              </Link>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Automated birthday cake delivery for workplaces. Never miss a
                celebration again.
              </p>
              <div className="mt-5 flex items-center gap-4">
                {/* TODO: Add real X/Twitter profile URL */}
                <SocialIcon href="#" label="Twitter">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialIcon>
                {/* TODO: Add real LinkedIn profile URL */}
                <SocialIcon href="#" label="LinkedIn">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialIcon>
                {/* TODO: Add real Instagram profile URL */}
                <SocialIcon href="#" label="Instagram">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialIcon>
              </div>
              <NewsletterForm />
            </div>

            <FooterColumn title="Product" links={PRODUCT_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </motion.div>
        </AnimatedSection>

        <Separator className="my-8" />

        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Koki. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground/60">
            Built with 🎂 by Koki
          </p>
        </div>
      </div>
    </footer>
  );
}
