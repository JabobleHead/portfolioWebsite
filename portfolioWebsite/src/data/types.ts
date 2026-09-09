import type { StaticImageData } from "next/image";

export type SocialIcon = "github" | "linkedin" | "email";

export type SocialLink = {
  /** Accessible name — icon-only links rely on this entirely. */
  label: string;
  /** Shown next to the icon where the layout has room for it. */
  handle: string;
  href: string;
  icon: SocialIcon;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Role = {
  id: string;
  organization: string;
  title: string;
  location: string;
  period: string;
  /** Set for roles with no end date, so the UI can mark them "Current". */
  current?: boolean;
  highlights: string[];
  tags: string[];
};

export type Education = {
  institution: string;
  location: string;
  period: string;
  degree: string;
  minor: string;
  gpa: string;
  coursework: string[];
  certifications: string[];
};

export type Screenshot = {
  image: StaticImageData;
  /** Describes what the screen actually shows, not "Slide 1". */
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
  /** TODO: fill these in — links render only when a URL is present. */
  repoUrl: string | null;
  liveUrl: string | null;
  screenshots: Screenshot[];
};
