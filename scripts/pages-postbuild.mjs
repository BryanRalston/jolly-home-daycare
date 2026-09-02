#!/usr/bin/env node
/**
 * Normalize the static build for GitHub Pages:
 * copy HTML into ./site, add 404.html + .nojekyll, drop Grok chrome.
 */
import { copyFileSync, cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sources = ["dist/client", "dist", ".output/public"];
const src = sources.find(
  (dir) => existsSync(join(dir, "index.html")) || existsSync(join(dir, "_shell.html")),
);

if (!src) {
  console.error("pages-postbuild: no static HTML in dist/client, dist, or .output/public");
  process.exit(1);
}

const out = "site";
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });
rmSync(join(out, "__grok"), { recursive: true, force: true });
rmSync(join(out, "server"), { recursive: true, force: true });

const index = join(out, "index.html");
const shell = join(out, "_shell.html");
if (!existsSync(index) && existsSync(shell)) {
  copyFileSync(shell, index);
}
if (!existsSync(join(out, "404.html"))) {
  const fallback = existsSync(index) ? index : shell;
  copyFileSync(fallback, join(out, "404.html"));
}
writeFileSync(join(out, ".nojekyll"), "");
writeFileSync(join(out, "CNAME"), "www.jollyhomedaycare.com\n");
console.log(`pages-postbuild: static site ready in ${out}/ (from ${src})`);
