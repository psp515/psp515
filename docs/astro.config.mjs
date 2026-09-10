// @ts-check
import { defineConfig } from "astro/config";

// Served at the apex of the custom domain (see public/CNAME), so base is "/".
export default defineConfig({
  site: "https://psp515.com",
  base: "/",
  trailingSlash: "always",
});
