"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
] as const;

function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  // For absolute paths like /about, let the browser navigate normally
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlighting (only hash links)
  React.useEffect(() => {
    const hashLinks = NAV_LINKS.filter((link) => link.href.startsWith("#"));
    const sectionIds = hashLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-[background-color,box-shadow,border-color] duration-500 ease-in-out",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/80 border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo with hover animation */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-2xl font-bold tracking-tight text-foreground transition-transform duration-300 hover:scale-105 hover:text-primary"
        >
          Koki
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300",
                  activeSection === href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
                {activeSection === href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-xl font-bold">
                  Koki
                </SheetTitle>
              </SheetHeader>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col gap-1 px-4"
                  >
                    {NAV_LINKS.map(({ label, href }, index) => (
                      <motion.a
                        key={href}
                        href={href}
                        onClick={(e) => {
                          handleNavClick(e, href);
                          setOpen(false);
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted hover:text-foreground",
                          activeSection === href
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground"
                        )}
                      >
                        {label}
                      </motion.a>
                    ))}
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: NAV_LINKS.length * 0.08,
                      }}
                    >
                      <a
                        href="#pricing"
                        onClick={(e) => {
                          handleNavClick(e, "#pricing");
                          setOpen(false);
                        }}
                        className={cn(buttonVariants({ size: "lg" }), "w-full")}
                      >
                        Get Early Access
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
