import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-2 px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">synapsim</h1>
      <p className="text-muted-foreground">
        TanStack Router is ready. Use the theme toggle in the header to switch light, dark, or
        system.
      </p>
    </main>
  );
}
