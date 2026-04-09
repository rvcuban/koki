"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { useState } from "react";

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

const INPUT_CLASSES =
  "flex h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs transition-all duration-300 placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                  Get in touch
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have a question or want to learn more? We&apos;d love to hear
                  from you.
                </p>
              </div>
            </AnimatedSection>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
              {/* Contact form */}
              <AnimatedSection
                variants={fadeInLeft}
                className="lg:col-span-3"
              >
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <div className="flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                          <CheckCircle className="size-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">
                          Message sent!
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6"
                          onClick={() => setSubmitted(false)}
                        >
                          Send another message
                        </Button>
                      </motion.div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                      >
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div className="group">
                            <label
                              htmlFor="name"
                              className="mb-1.5 block text-sm font-medium transition-colors duration-300 group-focus-within:text-primary"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="Your name"
                              className={INPUT_CLASSES}
                            />
                          </div>
                          <div className="group">
                            <label
                              htmlFor="email"
                              className="mb-1.5 block text-sm font-medium transition-colors duration-300 group-focus-within:text-primary"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="you@company.com"
                              className={INPUT_CLASSES}
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label
                            htmlFor="company"
                            className="mb-1.5 block text-sm font-medium transition-colors duration-300 group-focus-within:text-primary"
                          >
                            Company
                          </label>
                          <input
                            id="company"
                            type="text"
                            placeholder="Your company name"
                            className={INPUT_CLASSES}
                          />
                        </div>

                        <div className="group">
                          <label
                            htmlFor="message"
                            className="mb-1.5 block text-sm font-medium transition-colors duration-300 group-focus-within:text-primary"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            placeholder="How can we help?"
                            className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-all duration-300 placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 resize-none"
                          />
                        </div>

                        <Button
                          size="lg"
                          type="submit"
                          disabled={submitting}
                          className="w-full sm:w-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70"
                        >
                          {submitting ? (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-2"
                            >
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="inline-block size-4 rounded-full border-2 border-current border-t-transparent"
                              />
                              Sending...
                            </motion.span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="size-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Company info */}
              <AnimatedSection
                variants={fadeInRight}
                className="lg:col-span-2"
              >
                <div className="flex flex-col gap-8">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{label}</p>
                        <a
                          href={href}
                          className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
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

                  {/* Decorative element */}
                  <div className="mt-2 rounded-xl border border-dashed border-primary/20 bg-primary/5 p-6 text-center">
                    <motion.span
                      animate={{ y: [-5, 5, -5] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-block text-4xl"
                    >
                      🎂
                    </motion.span>
                    <p className="mt-2 text-sm font-medium text-primary">
                      Ready to celebrate?
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      We&apos;ll help you get started in under 5 minutes.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
