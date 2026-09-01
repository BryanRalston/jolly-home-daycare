import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// @ts-expect-error JS plugin alongside the TS vite config
import { appEnvPlugin } from "./scripts/app-env-plugin.mjs";

const PAGES_BASE = "/jolly-home-daycare/";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const staticRoutes = [
  { path: "/" },
  { path: "/about" },
  { path: "/programs" },
  { path: "/enrollment" },
];

export default defineConfig({
  base: isGitHubPages ? PAGES_BASE : "/",
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    appEnvPlugin(),
    tailwindcss(),
    tanstackStart({
      pages: staticRoutes,
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});
