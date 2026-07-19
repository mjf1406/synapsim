import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import LoadingScreen from "./components/navigation/loading-screen";
import "./style.css";

const router = createRouter({
  routeTree,
  defaultPendingComponent: LoadingScreen,
  defaultPendingMs: 50,
  defaultPendingMinMs: 200,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error('Root element "#app" not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
