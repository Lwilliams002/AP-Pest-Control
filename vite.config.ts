import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// base is injected by the GitHub Actions `configure-pages` step as VITE_BASE_URL.
// For local dev it defaults to "/".
// If deploying to a project page manually, set VITE_BASE_URL=/your-repo-name before building.
// Vite requires a trailing slash; normalise here so "/repo-name" → "/repo-name/".
const rawBase = process.env.VITE_BASE_URL ?? "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export default defineConfig({
  base,
  resolve: {
    // Vite 8 native tsconfig paths — no plugin needed
    tsconfigPaths: true,
  },
  plugins: [
    TanStackRouterVite({
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
  ],
});
