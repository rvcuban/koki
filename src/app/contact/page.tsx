import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Koki",
  description:
    "Get in touch with the Koki team. We'd love to hear from you.",
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@koki.com",
    href: "mailto:hello@koki.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Celebration St, San Francisco, CA 94105",
    href: "#",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Get in touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or want to learn more? We&apos;d love to hear
                from you.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
              {/* Contact form */}
              <Card className="lg:col-span-3">
                <CardContent className="p-6 sm:p-8">
                  <form className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Your company name"
                        className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="How can we help?"
                        className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 resize-none"
                      />
                    </div>

                    <Button size="lg" type="button" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Company info */}
              <div className="flex flex-col gap-8 lg:col-span-2">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{label}</p>
                      <a
                        href={href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="mt-4 rounded-xl border bg-muted/50 p-6">
                  <p className="text-sm font-medium">Office Hours</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monday — Friday: 9:00 AM – 6:00 PM PST
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Saturday — Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
