/** A piece of copy provided in both site languages. */
export interface I18n {
  en: string;
  pl: string;
}

export type Lang = "en" | "pl";

/** Which palette hue an entry's node/accent takes on the spine. */
export type Kind = "work" | "edu" | "project" | "life";

export interface Chip {
  label: string;
}

export interface Link {
  label: I18n;
  href: string;
}

export interface TimelineEntry {
  year: number;
  /** Which side of the spine the card sits on. */
  side: "left" | "right";
  kind: Kind;
  /** MQTT-style topic path, e.g. "work/dassault/engineer". */
  topic: string;
  when: I18n;
  title: I18n;
  org: I18n;
  text: I18n;
  quote?: I18n;
  chips?: string[];
  links?: Link[];
  framed?: boolean;
  isNow?: boolean;
}

export interface ProjectShot {
  bars: number[];
  caption: I18n;
}

export interface Project {
  year: number;
  side: "left" | "right";
  kicker: I18n;
  group?: boolean;
  title: string;
  org: I18n;
  text: I18n;
  quote?: I18n;
  shot?: ProjectShot;
  chips: string[];
  links: Link[];
  /** Lightweight mention — no framed border, no shot, terse text. */
  minimal?: boolean;
  isNow?: boolean;
}

export interface Hobby {
  icon: string;
  title: I18n;
  text: I18n;
}

export interface StackGroup {
  color: Kind;
  name: I18n;
  items: string[];
}

export interface Account {
  label: string;
  href: string;
  icon: string;
}
