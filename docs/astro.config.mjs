// @ts-check
import { defineConfig } from "astro/config";

// Root by default (custom domain via Cloudflare in front of GitHub Pages).
// Set BASE_PATH="/psp515" only if this ever serves from github.com/psp515/psp515
// as raw GitHub Pages (i.e. https://psp515.github.io/psp515/).
const BASE = process.env.BASE_PATH || "/";

export default defineConfig({
  // TODO: swap for the real custom domain once Cloudflare is wired up.
  site: "https://psp515.github.io",
  base: BASE,
  trailingSlash: "always",
});
