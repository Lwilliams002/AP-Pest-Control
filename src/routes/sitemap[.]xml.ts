// The sitemap is served as a static file from public/sitemap.xml.
// This stub keeps the route tree valid without any server-only handlers.
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({});
