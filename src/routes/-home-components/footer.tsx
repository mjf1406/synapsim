import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function FooterSection({ className }: { className?: string }) {
  return (
    <footer id="footer" className={cn("container mx-auto w-full py-24 sm:py-32", className)}>
      <div className="rounded-2xl border border-secondary bg-card p-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between md:gap-12">
          <Link to="/" className="flex w-fit items-center font-bold">
            <img
              src="/brand/robot-head-100x67.webp"
              alt=""
              draggable={false}
              aria-hidden
              className="mr-2 h-9 w-auto shrink-0 object-contain select-none"
            />
            <h3 className="font-heading text-2xl">Synapsim</h3>
          </Link>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Explore</h3>
              <Link
                to="/"
                hash="pages"
                className="font-medium text-muted-foreground hover:text-primary/90"
              >
                Start learning
              </Link>
              <Link
                to="/"
                hash="teachers"
                className="font-medium text-muted-foreground hover:text-primary/90"
              >
                For teachers
              </Link>
              <Link to="/about" className="font-medium text-muted-foreground hover:text-primary/90">
                About
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Contact</h3>
              <a
                href="https://github.com/mjf1406"
                className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLink aria-hidden className="size-3.5 shrink-0" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Designed and developed by{" "}
            <a
              className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:text-primary/90"
              href="https://github.com/mjf1406"
              target="_blank"
              rel="noopener noreferrer"
            >
              Michael Fitzgerald
              <ExternalLink aria-hidden className="size-3.5 shrink-0" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
            .
          </p>
        </section>
      </div>
    </footer>
  );
}
