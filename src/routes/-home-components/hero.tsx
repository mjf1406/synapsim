import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function HeroLabVisual() {
  return (
    <div className="group relative mt-14 w-full max-w-[1200px]">
      <div className="absolute top-2 left-1/2 h-24 w-[90%] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl lg:-top-8 lg:h-80" />

      <div className="relative mx-auto overflow-hidden rounded-xl border border-t-2 border-secondary border-t-primary/30 bg-card leading-none shadow-lg dark:bg-card">
        <div className="relative aspect-16/10 w-full bg-linear-to-b from-muted/80 via-background to-background p-6 sm:p-10">
          {/* Soft grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in oklch, var(--primary) 18%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--primary) 18%, transparent) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="animate-lab-float relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-6">
            <svg
              viewBox="0 0 480 220"
              className="h-auto w-full max-w-xl text-primary"
              role="img"
              aria-label="Friendly robot and glowing neural pathways"
            >
              <title>Synapsim learning lab preview</title>
              {/* Circuit paths */}
              <path
                className="animate-circuit-draw fill-none stroke-primary/40"
                strokeWidth="2"
                d="M40 110 H120 C140 110 150 70 180 70 H220"
              />
              <path
                className="animate-circuit-draw fill-none stroke-primary/35"
                strokeWidth="2"
                style={{ animationDelay: "0.6s" }}
                d="M440 110 H360 C340 110 330 150 300 150 H260"
              />
              <path
                className="animate-circuit-draw fill-none stroke-primary/30"
                strokeWidth="2"
                style={{ animationDelay: "1.2s" }}
                d="M240 40 V70 M240 180 V150"
              />

              {/* Synapse nodes */}
              <circle className="animate-synapse-pulse fill-primary" cx="40" cy="110" r="6" />
              <circle
                className="animate-synapse-pulse fill-primary"
                cx="440"
                cy="110"
                r="6"
                style={{ animationDelay: "0.5s" }}
              />
              <circle
                className="animate-synapse-pulse fill-primary/80"
                cx="240"
                cy="40"
                r="5"
                style={{ animationDelay: "1s" }}
              />
              <circle
                className="animate-synapse-pulse fill-primary/80"
                cx="240"
                cy="180"
                r="5"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Friendly robot */}
              <g transform="translate(190, 55)">
                <rect
                  x="20"
                  y="8"
                  width="60"
                  height="50"
                  rx="14"
                  className="fill-card stroke-primary"
                  strokeWidth="3"
                />
                <circle cx="38" cy="30" r="6" className="fill-primary" />
                <circle cx="62" cy="30" r="6" className="fill-primary" />
                <path
                  d="M36 42 Q50 50 64 42"
                  className="fill-none stroke-primary"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <rect
                  x="8"
                  y="62"
                  width="84"
                  height="48"
                  rx="12"
                  className="fill-muted stroke-primary/70"
                  strokeWidth="2.5"
                />
                <circle className="animate-synapse-pulse fill-primary" cx="50" cy="86" r="8" />
                <line
                  x1="50"
                  y1="8"
                  x2="50"
                  y2="-6"
                  className="stroke-primary"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="-10" r="5" className="fill-primary" />
              </g>
            </svg>

            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
              <span className="rounded-lg bg-primary/15 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
                Explore AI
              </span>
              <span className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground sm:text-sm">
                Build robots
              </span>
              <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Think like a computer
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-20 w-full rounded-b-xl bg-linear-to-b from-background/0 via-background/50 to-background md:h-28" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="container w-full">
      <div className="mx-auto grid place-items-center gap-8 py-16 md:py-28 lg:max-w-7xl">
        <div className="space-y-8 text-center">
          <Badge variant="outline" className="rounded-full py-2 text-sm">
            <span className="mr-2 text-primary">
              <Badge className="rounded-full">New</Badge>
            </span>
            <span>A playful lab for kids to explore AI and robots</span>
          </Badge>

          <div className="mx-auto max-w-3xl text-center text-4xl font-bold md:text-6xl">
            <h1 className="font-heading tracking-tight text-foreground">
              Synapsim is a place to explore{" "}
              <span className="bg-linear-to-r from-primary to-[color-mix(in_oklch,var(--primary)_55%,oklch(0.65_0.12_170))] bg-clip-text px-1 text-transparent">
                AI and robots
              </span>
            </h1>
          </div>

          <p className="mx-auto max-w-screen-sm text-lg text-muted-foreground md:text-xl">
            Elementary and middle school learners try interactive activities; teachers get
            classroom-ready ideas that pair with the same concepts.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-4">
            <Link
              to="/"
              hash="pages"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group/arrow h-11 w-5/6 rounded-xl text-base font-bold md:w-auto md:min-w-44",
              )}
            >
              Start learning
              <ArrowRight className="ml-1 size-5 transition-transform group-hover/arrow:translate-x-1" />
            </Link>
            <Link
              to="/"
              hash="teachers"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 w-5/6 rounded-xl text-base font-bold md:w-auto md:min-w-44",
              )}
            >
              I&apos;m a teacher
            </Link>
          </div>
        </div>

        <HeroLabVisual />
      </div>
    </section>
  );
}
