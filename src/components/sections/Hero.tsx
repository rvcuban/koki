"use client";

import * as React from "react";
import { ArrowRight, Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      {/* Background gradient decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-primary/8 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Automate birthday celebrations for your team
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground [animation-delay:100ms] sm:text-5xl md:text-6xl lg:text-7xl">
          Make Every Birthday{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Unforgettable
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:200ms] sm:text-xl">
          Koki handles the whole celebration — from tracking birthdays to
          delivering the perfect cake. Your team feels valued, and you never
          miss a date again.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
          <a
            href="#pricing"
            onClick={(e) => smoothScroll(e, "#pricing")}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 gap-2 px-8 text-base"
            )}
          >
            Begin the Celebration
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => smoothScroll(e, "#how-it-works")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 gap-2 px-8 text-base"
            )}
          >
            <Play className="size-4" />
            See How it Works
          </a>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="animate-fade-in-up mx-auto mt-16 w-full max-w-5xl [animation-delay:400ms]">
        <div className="relative overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-muted/80 via-muted/40 to-background shadow-2xl">
          <div className="flex aspect-[16/9] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                <span className="text-3xl" role="img" aria-label="Birthday cake">
                  🎂
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Product preview coming soon
              </p>
            </div>
          </div>
          {/* Decorative grid overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49.5%,var(--border)_49.5%,var(--border)_50.5%,transparent_50.5%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49.5%,var(--border)_49.5%,var(--border)_50.5%,transparent_50.5%,transparent_100%)] bg-[size:60px_60px] opacity-[0.03]"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-up mt-12 mb-8 [animation-delay:600ms]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">
            Scroll to explore
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/20 p-1">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-muted-foreground/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
