import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-svh bg-background text-foreground">
        <header className="flex justify-end p-4">
          <ModeToggle />
        </header>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  );
}
