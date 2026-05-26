import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// base is injected by the GitHub Actions `configure-pages` step as VITE_BASE_URL.
// For local dev it defaults to "/".
// If deploying to a project page manually, set VITE_BASE_URL=/your-repo-name before building.
export default defineConfig({
  base: process.env.VITE_BASE_URL ?? "/",
  plugins: [
    TanStackRouterVite({
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
