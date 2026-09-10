import type { Account, I18n, StackGroup } from "./types";

export const eyebrow: I18n = {
  en: "Kraków · .NET · Software Engineer",
  pl: "Kraków · .NET · Software Engineer",
};

export const heroLead: I18n = {
  en: "building backends and things that like to",
  pl: "buduję backendy i rzeczy, które lubią",
};

export const heroBlink: I18n = {
  en: "blink.",
  pl: "migać.",
};

export const lede: I18n = {
  en: "Software Engineer at Dassault Systèmes. C# and .NET on the cloud by day; ASG, MQTT, microcontrollers and a 3D printer by night.",
  pl: "Software Engineer w Dassault Systèmes. Za dnia C# i .NET na chmurze; po godzinach MQTT, ASG, mikrokontrolery i drukarka 3D.",
};

export const status: { dt: I18n; dd: I18n }[] = [
  {
    dt: { en: "Now", pl: "Teraz" },
    dd: { en: "Software Engineer, Dassault Systèmes", pl: "Software Engineer, Dassault Systèmes" },
  },
  {
    dt: { en: "Studying", pl: "Studia" },
    dd: {
      en: "Computer Science MSc — Warsaw Univ. of Technology",
      pl: "Informatyka, mgr — Politechnika Warszawska",
    },
  },
  {
    dt: { en: "Building", pl: "Buduję" },
    dd: { en: "Senswave · PSPixel", pl: "Senswave · PSPixel" },
  },
  {
    dt: { en: "Languages", pl: "Języki" },
    dd: {
      en: "Polish (native) · English C2",
      pl: "polski (ojczysty) · angielski C2",
    },
  },
];

export const stackGroups: StackGroup[] = [
  { color: "work", name: { en: "Backend", pl: "Backend" }, items: ["C#", ".NET", "PostgreSQL"] },
  { color: "project", name: { en: "Apps", pl: "Aplikacje" }, items: ["Blazor", "React Native"] },
  { color: "life", name: { en: "Containers", pl: "Kontenery" }, items: ["Docker", "Kubernetes"] },
  { color: "edu", name: { en: "Devices", pl: "Urządzenia" }, items: ["MicroPython", "Python"] },
];

export const accounts: Account[] = [
  { label: "github", href: "https://github.com/psp515", icon: "github" },
  { label: "linkedin", href: "https://www.linkedin.com/in/lukasz-psp515-kolber/", icon: "linkedin" },
  { label: "thingiverse", href: "https://www.thingiverse.com/psp515/designs", icon: "thingiverse" },
  { label: "codewars", href: "https://www.codewars.com/users/psp515", icon: "codewars" },
];

export const offHoursHead: { title: I18n; sub: I18n } = {
  title: { en: "Off hours", pl: "Po godzinach" },
  sub: {
    en: "what happens away from a screen",
    pl: "co robię, kiedy nie ma ekranu",
  },
};

export const timelineHead: { title: I18n; sub: I18n } = {
  title: { en: "Timeline", pl: "Oś czasu" },
  sub: { en: "2018 — today", pl: "2018 — dziś" },
};

export const projectsHead: { title: I18n; sub: I18n } = {
  title: { en: "Projects", pl: "Projekty" },
  sub: {
    en: "things that run outside my desk",
    pl: "rzeczy, które działają poza moim biurkiem",
  },
};

export const studiesHead: { title: I18n; sub: I18n } = {
  title: { en: "Studies", pl: "Projekty ze studiów" },
  sub: {
    en: "AGH UST and WUT coursework, one subject per repository",
    pl: "kursy AGH oraz PW, jeden przedmiot = jedno repozytorium",
  },
};

export const footer: { note: I18n } = {
  note: {
    en: "Built with Astro · hosted on GitHub Pages",
    pl: "Zbudowane w Astro · hostowane na GitHub Pages",
  },
};
