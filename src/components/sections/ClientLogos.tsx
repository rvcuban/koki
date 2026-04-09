const LOGOS = [
  "TechFlow",
  "Bright Studio",
  "Growthly",
  "Acme Corp",
  "Nova Labs",
  "Zenith AI",
  "Pulse Health",
  "Stratos",
] as const;

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-10 shrink-0 items-center justify-center px-6">
      <span className="text-lg font-semibold tracking-tight text-muted-foreground/50 select-none whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="border-y bg-muted/20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by 300+ companies worldwide
        </p>

        {/* Marquee-style scrolling logos */}
        <div className="relative mt-8 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee items-center gap-12">
            {/* Duplicate the logos for seamless loop */}
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <LogoPlaceholder key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
