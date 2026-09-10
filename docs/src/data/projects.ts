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
      en: "A mobile app for people with 3D printers — a notebook for filaments and spools. We started with a shared core: base ViewModels, validation, services. I built the filament module. Then it stalled: MAUI was full of bugs back then, and the scope got too big for a small team. First time I saw how little of what you plan actually ships.",
      pl: "Aplikacja mobilna dla ludzi z drukarkami 3D — notatnik na filamenty i szpule. Zaczęliśmy od wspólnego core'u: bazowe ViewModele, walidacje, serwisy. Stworzyłem moduł filamentów. Potem projekt się zatrzymał: MAUI było wtedy pełne błędów, a zakres zrobił się za duży na mały zespół. Pierwszy raz zobaczyłem, jak mało z tego, co się planuje, faktycznie wychodzi.",
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
      en: "Simple algorithm implementations. Started because I got into algorithms after my first year at AGH UST.",
      pl: "Proste implementacje algorytmów. Zacząłem, bo wciągnęły mnie algorytmy po pierwszym roku studiów.",
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
      en: "LeetCode problems, solved for the same reason — I like algorithms, not just to prep for interviews.",
      pl: "Zadania z LeetCode, rozwiązywane z tego samego powodu — lubię algorytmy, nie tylko pod rozmowy rekrutacyjne.",
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
      en: "First go at MicroPython on a Raspberry Pi Pico. It didn't turn into PSPixel directly, but the idea started here.",
      pl: "Pierwsze podejście do MicroPythona na Raspberry Pi Pico. Nie przerodziło się wprost w PSPixel, ale pomysł zaczął się tutaj.",
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
      en: "Getting to know the .NET platform — minimal APIs instead of controllers.",
      pl: "Poznawanie platformy .NET od strony backendu — minimal API zamiast kontrolerów.",
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
      en: "My first run at the problem Senswave solves now: connect to your own MQTT brokers, add a device, and set up its controls yourself — buttons, state buttons, sliders. Blazor on the front, Go on the API. This project connected me with Smart Home world.",
      pl: "Pierwsze podejście do tego samego problemu, którym dziś zajmuje się Senswave: podłączasz się do własnych brokerów MQTT, dodajesz urządzenie i sam ustawiasz jego kontrolki — przyciski, przyciski stanu, suwaki. Aplikacja w Blazorze, API w Go. Ten projekt związał mnie ze światem Smart Home.",
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
      en: "Based on a Java project from one of my courses, rewritten from scratch to try Vertical Slice Architecture.",
      pl: "Na bazie projektu w Javie z zajęć na studiach, przepisany od zera, żeby wypróbować Vertical Slice Architecture.",
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
      en: "A group project — a Raspberry Pi Pico device you can extend, that reads plant humidity and tells you whether your plants are OK.",
      pl: "Projekt zespołowy — rozszerzalne urządzenie na Raspberry Pi Pico, które odczytuje nawodnienie roślin i mówi, czy wszystko z nimi w porządku.",
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
      en: "LED strip, few ways to control it: the button on the case, MQTT, HTTP, and an installer that flashes the firmware straight from the browser. First version was created during studies on AGH. Later there was a little time for improvements.",
      pl: "Taśma LED, kilka sposobów sterowania: przycisk na obudowie, MQTT, HTTP i instalator, który wgrywa firmware prosto z przeglądarki. Pierwsza wersja powstała jeszcze na studiach na AGH. Później pojawił się czas na usprawnienia.",
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
      en: "Add a device, describe what it can do and build simple dashboard that you will share with your family. Automations run on the server, so they keep working with your phone off. State comes in live over SignalR.",
      pl: "Dodajesz urządzenie, opisujesz co potrafi, a w aplikacji tworzysz prosty ekran do użytku dla ciebie i rodziny. Automatyzacje chodzą na serwerze, więc działają też przy wyłączonym telefonie. Stan leci na żywo przez SignalR.",
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
      en: "A growing set of MQTT devices — things like a smart button — built with Arduino on ESP boards and MicroPython on the Pi Pico. This is the place for test devices.",
      pl: "Rosnący zestaw urządzeń MQTT — jak inteligentny przycisk — budowanych na Arduino na płytkach ESP i na MicroPythonie na Pi Pico. Jest to raczej miejsce na testowanie rozwiązań.",
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
      en: "Started after the mobile app's first release, to test possible setup and comfort of using Senswave from web.",
      pl: "Projekt rozpoczęty po pierwszym wydaniu aplikacji mobilnej, żeby przetestować możliwy układ i komfort korzystania z systemu Senswave z przeglądarki.",
    },
    chips: ["HTML"],
    links: [{ label: { en: "repo ↗", pl: "repo ↗" }, href: "https://github.com/SenswaveLabs/Web-Poc" }],
  },
];
