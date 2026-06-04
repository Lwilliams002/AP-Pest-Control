import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// The production site is served from the custom domain root: https://ap-pest-control.com/.
// GitHub Pages' `configure-pages` action can inject VITE_BASE_URL=/AP-Pest-Control,
// which breaks assets on a custom domain. Ignore that injected value by default.
// If you intentionally need a repository subpath build later, set:
// VITE_USE_CONFIGURED_BASE=true VITE_BASE_URL=/AP-Pest-Control/
const rawBase =
  process.env.VITE_USE_CONFIGURED_BASE === "true" ? (process.env.VITE_BASE_URL ?? "/") : "/";
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
