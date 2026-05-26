import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Vite inlines import.meta.env.BASE_URL at build time.
    // In dev it is "/"; for GitHub Pages project pages it becomes "/repo-name/".
    // This lets TanStack Router correctly strip the base from URLs.
    basepath: import.meta.env.BASE_URL,
  });

  return router;
};
