import type { Lang } from "../data/types";

/**
 * Build a site-relative path under Astro's base, e.g.
 * withBase("/", "pl", "projects") -> "/pl/projects/"
 * withBase("/psp515/", "en", "")  -> "/psp515/"
 */
export function withBase(base: string, lang: Lang, path: string): string {
  const trimmedBase = base.replace(/\/+$/, "");
  const segments = [lang === "pl" ? "pl" : "", path].filter(Boolean);
  const joined = segments.join("/");
  return `${trimmedBase}/${joined}${joined ? "/" : ""}`.replace(/\/{2,}/g, "/");
}
