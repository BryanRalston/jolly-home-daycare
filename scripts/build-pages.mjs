#!/usr/bin/env node
/** Production GitHub Pages build (sets the /jolly-home-daycare/ base). */
import { spawn } from "node:child_process";

process.env.GITHUB_PAGES = "true";
const child = spawn("npm", ["run", "build"], {
  stdio: "inherit",
  env: process.env,
  shell: true,
});
child.on("exit", (code) => process.exit(code ?? 1));
