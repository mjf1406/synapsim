import * as React from "react";
import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

function subscribeHtmlDarkClass(onStoreChange: () => void) {
  const obs = new MutationObserver(onStoreChange);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onStoreChange);
  return () => {
    obs.disconnect();
    mq.removeEventListener("change", onStoreChange);
  };
}

function useResolvedTheme(): NonNullable<ToasterProps["theme"]> {
  const isDark = React.useSyncExternalStore(
    subscribeHtmlDarkClass,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );
  return isDark ? "dark" : "light";
}

const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useResolvedTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "color-mix(in oklch, var(--primary) 28%, var(--border))",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "cn-toast data-[type=default]:!bg-popover data-[type=default]:!text-popover-foreground data-[type=default]:!border data-[type=default]:!border-primary/25",
          description: "!text-muted-foreground",
          // mint / teal-green
          success: "!bg-teal-200 !text-teal-950 dark:!bg-teal-700 dark:!text-teal-50",
          // electric cyan / sky
          info: "!bg-cyan-200 !text-cyan-950 dark:!bg-cyan-700 dark:!text-cyan-50",
          // amber / warm gold
          warning: "!bg-amber-200 !text-amber-950 dark:!bg-amber-600 dark:!text-amber-50",
          // coral / rose-red
          error: "!bg-rose-400 !text-rose-950 dark:!bg-rose-700 dark:!text-rose-50",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
