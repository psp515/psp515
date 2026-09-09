import type { Project } from "./types";

// Chronological — flagship cards (full write-up, framed) mixed with minimal
// mentions of the smaller repos in between. Side alternates strictly by
// position in this array; don't reorder without re-checking the zig-zag.
export const projects: Project[] = [
  {
    year: 2022,
    side: "left",
    kicker: { en: "First team project", pl: "Pierwszy projekt w zespole" },
    group: true,
    title: "MyPrintiverse",
    org: { en: ".NET MAUI · Deve-Lite · 2022", pl: ".NET MAUI · Deve-Lite · 2022" },
    text: {
      en: "A mobile app for people with 3D printers — a notebook for filaments and spools. We started with a shared Core: base ViewModels, validation, services. I built the filament module with search. The project stalled: MAUI was full of bugs at the time, and the scope outgrew a small team. The first lesson in how much actually ships.",
      pl: "Aplikacja mobilna dla ludzi z drukarkami 3D — notatnik filamentów i szpul. Zaczęliśmy od wspólnego Core: bazowe ViewModele, walidacje i serwisy. Ja zrobiłem moduł filamentów z wyszukiwaniem. Projekt stanął: MAUI było wtedy pełne błędów, a zakres przerósł mały zespół. Pierwsza lekcja o tym, ile da się dowieźć.",
    },
    chips: ["C#", ".NET MAUI", "MVVM"],
    links: [
      { label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/Deve-Lite/MyPrintiverse-App" },
    ],
  },
  {
    year: 2022,
    side: "right",
    minimal: true,
    kicker: { en: "Practice repo", pl: "Repozytorium ćwiczeniowe" },
    title: "Algorithms",
    org: { en: "Python", pl: "Python" },
    text: {
      en: "Simple algorithm implementations — started out of a growing interest in algorithms after my first year of studies.",
      pl: "Proste implementacje algorytmów — zaczęte z rosnącego zainteresowania algorytmami po pierwszym roku studiów.",
    },
    chips: ["Python"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/Algorithms" }],
  },
  {
    year: 2022,
    side: "left",
    minimal: true,
    kicker: { en: "Practice repo", pl: "Repozytorium ćwiczeniowe" },
    title: "LeetCode",
    org: { en: "Python", pl: "Python" },
    text: {
      en: "A collection of LeetCode problems, solved out of that same interest in algorithms — not just for interview practice.",
      pl: "Zbiór zadań z LeetCode, rozwiązywanych z tego samego zainteresowania algorytmami — nie tylko pod kątem rozmów rekrutacyjnych.",
    },
    chips: ["Python"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/LeetCode" }],
  },
  {
    year: 2022,
    side: "right",
    minimal: true,
    kicker: { en: "Early experiment", pl: "Wczesny eksperyment" },
    title: "MicroPico",
    org: { en: "MicroPython · Raspberry Pi Pico", pl: "MicroPython · Raspberry Pi Pico" },
    text: {
      en: "First steps with MicroPython on a Raspberry Pi Pico. It didn't lead directly to PSPixel, but it planted the idea.",
      pl: "Pierwsze kroki z MicroPythonem na Raspberry Pi Pico. Nie doprowadziło wprost do PSPixel, ale zasiało pod niego pomysł.",
    },
    chips: ["Python", "Pico"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/MicroPico" }],
  },
  {
    year: 2023,
    side: "left",
    minimal: true,
    kicker: { en: "Practice repo", pl: "Repozytorium ćwiczeniowe" },
    title: "DeviceBase",
    org: { en: "C# · .NET 7", pl: "C# · .NET 7" },
    text: {
      en: "Learning the .NET platform properly — minimal APIs instead of controllers.",
      pl: "Nauka platformy .NET od podstaw — minimalne API zamiast kontrolerów.",
    },
    chips: ["C#", ".NET 7"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/DeviceBase" }],
  },
  {
    year: 2023,
    side: "right",
    kicker: { en: "Before Senswave", pl: "Zanim powstało Senswave" },
    group: true,
    title: "DashboardX",
    org: {
      en: "Blazor WASM · Go API · Deve-Lite",
      pl: "Blazor WASM · API w Go · Deve-Lite",
    },
    text: {
      en: "The first run at the problem Senswave solves today: connect to your own MQTT brokers, add a device, and define its controls yourself — buttons, state buttons, sliders. Blazor on the front, Go on the API. Everything that came later started here.",
      pl: "Pierwsze podejście do tego samego problemu, który rozwiązuje dziś Senswave: podłączasz się do własnych brokerów MQTT, dodajesz urządzenie i sam definiujesz kontrolki — przyciski, przyciski stanu, suwaki. Aplikacja w Blazorze, API w Go. Stąd wzięło się wszystko, co poszło dalej.",
    },
    chips: ["C#", "Blazor", "Go", "Docker", "MQTT"],
    links: [
      { label: { en: "app ↗", pl: "app ↗" }, href: "https://github.com/Deve-Lite/DashboardX-App" },
      { label: { en: "api ↗", pl: "api ↗" }, href: "https://github.com/Deve-Lite/DashboardX-API" },
    ],
  },
  {
    year: 2024,
    side: "left",
    minimal: true,
    kicker: { en: "Practice repo", pl: "Repozytorium ćwiczeniowe" },
    title: "ImageHub",
    org: { en: "C# · Vertical Slice Architecture", pl: "C# · Vertical Slice Architecture" },
    text: {
      en: "Inspired by a Java project from one of my courses, rewritten from scratch to try out Vertical Slice Architecture.",
      pl: "Zainspirowany projektem w Javie z jednych z zajęć, przepisany od zera, żeby wypróbować Vertical Slice Architecture.",
    },
    chips: ["C#", ".NET"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/ImageHub" }],
  },
  {
    year: 2024,
    side: "right",
    minimal: true,
    group: true,
    kicker: { en: "Plant sensor", pl: "Czujnik dla roślin" },
    title: "PlantMonitor",
    org: { en: "Python · Raspberry Pi Pico", pl: "Python · Raspberry Pi Pico" },
    text: {
      en: "A group project: an extensible Raspberry Pi Pico device that reads plant sensors and reports whether your plants are doing fine.",
      pl: "Projekt zespołowy: rozszerzalne urządzenie na Raspberry Pi Pico, które odczytuje czujniki roślin i mówi, czy wszystko z nimi w porządku.",
    },
    chips: ["Python", "Pico"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/Deve-Lite/PlantMonitor" }],
  },
  {
    year: 2024,
    side: "left",
    kicker: { en: "LED controller", pl: "Sterownik LED" },
    title: "PSPixel",
    org: {
      en: "Raspberry Pi Pico W · WS2812B · MicroPython",
      pl: "Raspberry Pi Pico W · WS2812B · MicroPython",
    },
    text: {
      en: "One LED strip, four ways to drive it: the enclosure button, MQTT, HTTP, and an installer that flashes the firmware straight from the browser. Animations are added as separate files.",
      pl: "Jedna taśma LED, cztery sposoby sterowania: przycisk w obudowie, MQTT, HTTP i instalator, który wgrywa firmware prosto z przeglądarki. Animacje dopisujesz jako osobne pliki.",
    },
    shot: {
      bars: [88, 64],
      caption: {
        en: "modes: white · colour · RGB · loading",
        pl: "tryby: biały · kolor · RGB · ładowanie",
      },
    },
    chips: ["MicroPython", "Pico W", "MQTT", "Web Serial"],
    links: [
      { label: { en: "docs ↗", pl: "docs ↗" }, href: "https://psp515.github.io/PSPixel/" },
      { label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/PSPixel" },
    ],
  },
  {
    // GitHub shows these repos created mid-2026, but that's a copy —
    // the actual Senswave codebase started 2025-02-05.
    year: 2025,
    side: "right",
    kicker: { en: "Smart home platform", pl: "Platforma smart home" },
    group: true,
    title: "Senswave",
    org: {
      en: "Android · .NET backend · your own MQTT devices",
      pl: "Android · backend .NET · własne urządzenia MQTT",
    },
    text: {
      en: "Register a device, describe its operations, and the app builds a dashboard for it. Automations run server-side, so they keep working with your phone off. State streams live over SignalR.",
      pl: "Rejestrujesz urządzenie, opisujesz jego operacje, a aplikacja buduje pod nie dashboard. Automatyzacje chodzą na serwerze, więc działają też przy wyłączonym telefonie. Stan leci na żywo przez SignalR.",
    },
    shot: {
      bars: [72, 46, 58],
      caption: {
        en: "dashboard · device widgets · automations",
        pl: "dashboard · widżety urządzeń · automatyzacje",
      },
    },
    chips: [".NET 10", "PostgreSQL", "RabbitMQ", "MQTT", "SignalR", "React Native", "Expo"],
    links: [
      { label: { en: "senswave.net ↗", pl: "senswave.net ↗" }, href: "https://senswave.net/" },
      { label: { en: "backend ↗", pl: "backend ↗" }, href: "https://github.com/SenswaveLabs/Backend" },
      { label: { en: "mobile ↗", pl: "mobile ↗" }, href: "https://github.com/SenswaveLabs/Mobile" },
    ],
  },
  {
    year: 2025,
    side: "left",
    minimal: true,
    kicker: { en: "Test devices", pl: "Urządzenia testowe" },
    title: "MqttDevices",
    org: { en: "ESP boards · Raspberry Pi Pico", pl: "Płytki ESP · Raspberry Pi Pico" },
    text: {
      en: "A growing set of MQTT devices — things like a smart button — built with Arduino on ESP boards and with MicroPython on the Pi Pico.",
      pl: "Rozrastający się zestaw urządzeń MQTT — jak inteligentny przycisk — budowanych na Arduino na płytkach ESP oraz na MicroPythonie na Pi Pico.",
    },
    chips: ["Arduino", "ESP", "MicroPython", "Pico", "MQTT"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/psp515/MqttDevices" }],
  },
  {
    year: 2026,
    side: "right",
    minimal: true,
    isNow: true,
    kicker: { en: "Web dashboard", pl: "Dashboard webowy" },
    title: "Senswave Web PoC",
    org: { en: "HTML", pl: "HTML" },
    text: {
      en: "Started after the mobile app's first release, to explore what a browser gives you that a phone doesn't — a bigger screen and room for more involved configuration.",
      pl: "Zaczęte po pierwszym wydaniu aplikacji mobilnej, żeby sprawdzić, co daje przeglądarka, a czego nie daje telefon — większy ekran i miejsce na bardziej złożoną konfigurację.",
    },
    chips: ["HTML"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/SenswaveLabs/Web-Poc" }],
  },
];
