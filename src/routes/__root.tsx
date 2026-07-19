import type { ReactNode } from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-svh bg-background text-foreground">
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-2 px-4">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground"
            >
              <img
                src="/brand/robot-head-100x67.webp"
                alt=""
                draggable={false}
                aria-hidden
                className="h-8 w-auto shrink-0 object-contain select-none"
              />
              Synapsim
            </Link>
            <nav
              className="flex min-w-0 items-center justify-center gap-1 sm:gap-2"
              aria-label="Main"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
            <div className="flex items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <Outlet />
      </div>
      <Toaster />
      <TanStackRouterDevtools />
    </ThemeProvider>
  );
}

function NavLink({ to, children }: { to: "/" | "/about"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        "rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
      )}
      activeProps={{
        className: "rounded-lg px-3 py-1.5 text-sm font-medium text-foreground bg-muted",
      }}
    >
      {children}
    </Link>
  );
}
