/**
 * Raw inline SVG inner markup (no <svg> wrapper — components supply that,
 * along with viewBox, so the same path set can be reused at different
 * sizes/strokes for the backdrop, the off-hours list, and account chips).
 */

export const backdrop = {
  bike: {
    viewBox: "0 0 100 70",
    body: `<circle cx="20" cy="46" r="16"/><circle cx="80" cy="46" r="16"/><path d="M20 46h26l-8-22 26-2 16 24M46 46 64 22M38 24 20 46"/><path d="M38 24 36 19M41 18 30 20"/><path d="M64 22 61 15 53 16"/>`,
  },
  print: {
    viewBox: "0 0 90 90",
    body: `<rect x="8" y="9" width="74" height="73" rx="4"/><path d="M8 27h74M39 27v6h12v-6M45 33v4"/><path d="M45 44 58 51 45 58 32 51z"/><path d="M32 51v10l13 7 13-7v-10M45 58v11"/><path d="M18 72h54"/><path d="M21 9V3M69 9V3"/>`,
  },
  ball: {
    viewBox: "0 0 90 90",
    body: `<circle cx="45" cy="45" r="32"/><path d="M45 29 60 40 54 58 36 58 30 40Z"/><path d="M45 29V13M60 40 75 35M54 58 63 71M36 58 27 71M30 40 15 35"/>`,
  },
  asg: {
    viewBox: "0 0 90 90",
    body: `<circle cx="45" cy="45" r="24"/><circle cx="45" cy="45" r="11"/><path d="M45 10v20M45 80V60M10 45h20M80 45H60"/><circle cx="45" cy="45" r="3.6" fill="currentColor"/>`,
  },
  led: {
    viewBox: "0 0 120 60",
    body: `<path d="M4 40q14-30 28 0t28 0 28 0 28 0"/><circle cx="18" cy="26" r="3.4"/><circle cx="46" cy="26" r="3.4"/><circle cx="74" cy="26" r="3.4"/><circle cx="102" cy="26" r="3.4"/><path d="M4 52h112"/>`,
  },
  chip: {
    viewBox: "0 0 90 90",
    body: `<rect x="24" y="24" width="42" height="42" rx="4"/><rect x="37" y="37" width="16" height="16" rx="2"/><path d="M34 24V12M45 24V12M56 24V12M34 66v12M45 66v12M56 66v12M24 34H12M24 45H12M24 56H12M66 34h12M66 45h12M66 56h12"/>`,
  },
} as const;

export type BackdropKey = keyof typeof backdrop;

/** Solid glyphs used for account chips — viewBox is always 0 0 24 24. */
export const account = {
  github: `<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.9 18.3 5.2 18.3 5.2c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/>`,
  linkedin: `<path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/>`,
  thingiverse: `<path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6 7.2v2.4h-4.6v9.6h-2.8V9.6H6V7.2h12z"/>`,
  codewars: `<path d="M9.4 3.6 3 12l6.4 8.4 1.8-1.35L5.9 12l5.3-6.95zM14.6 3.6 12.8 4.95 18.1 12l-5.3 6.95L14.6 20.3 21 12z"/>`,
} as const;

export type AccountKey = keyof typeof account;

/** UI glyphs — stroked like the backdrop art, viewBox is always 0 0 24 24. */
export const ui = {
  sun: `<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.4M12 19v2.4M2.6 12H5M19 12h2.4M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7"/>`,
  moon: `<path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8z"/>`,
} as const;

export type UiKey = keyof typeof ui;

/** Off-hours icons — viewBox matches the backdrop shape they mirror. */
export const hobby = {
  asg: backdrop.asg,
  print: backdrop.print,
  bike: backdrop.bike,
  ball: backdrop.ball,
} as const;

export type HobbyKey = keyof typeof hobby;
