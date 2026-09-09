import type { Hobby } from "./types";

export const hobbies: Hobby[] = [
  {
    icon: "asg",
    title: { en: "Airsoft", pl: "Airsoft" },
    text: {
      en: "Weekend games in the woods — a map, a team, and a lot of running.",
      pl: "Weekendowe rozgrywki w lesie — mapa, drużyna i sporo biegania.",
    },
  },
  {
    icon: "print",
    title: { en: "3D printing", pl: "Druk 3D" },
    text: {
      en: "Enclosures for my own electronics, and models published on Thingiverse.",
      pl: "Obudowy do własnej elektroniki i modele publikowane na Thingiverse.",
    },
  },
  {
    icon: "bike",
    title: { en: "Cycling", pl: "Rower" },
    text: {
      en: "The most reliable way to get away from a screen after work.",
      pl: "Najlepszy sposób, żeby odkleić się od ekranu po pracy.",
    },
  },
  {
    icon: "ball",
    title: { en: "Football", pl: "Piłka nożna" },
    text: {
      en: "A regular game with the same crowd — no league table, still taken seriously.",
      pl: "Regularne granie z tą samą ekipą — bez tabeli, ale na poważnie.",
    },
  },
];
