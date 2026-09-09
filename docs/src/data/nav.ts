import type { I18n } from "./types";

export interface NavPage {
  slug: string;
  path: string;
  label: I18n;
}

export const pages: NavPage[] = [
  { slug: "home", path: "", label: { en: "Timeline", pl: "Oś czasu" } },
  { slug: "projects", path: "projects", label: { en: "Projects", pl: "Projekty" } },
  { slug: "studies", path: "studies", label: { en: "Studies", pl: "Studia" } },
];

export const strings = {
  mark: "psp515",
} as const;
