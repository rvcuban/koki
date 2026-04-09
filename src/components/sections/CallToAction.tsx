import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CallToAction() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-16 sm:py-24">
          {/* Decorative gradient blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2"
          >
            <div className="h-[300px] w-[600px] rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to make every birthday special?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Join 300+ companies that never miss a celebration. Set it up once,
              and Koki handles the rest.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#pricing"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 text-base font-semibold"
                )}
              >
                Start Celebrating — Free Setup
              </a>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              No credit card required &middot; Free setup &middot; Cancel
              anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
