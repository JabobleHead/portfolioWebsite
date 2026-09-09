import profileImage from "@/images/profile.webp";
import type { NavItem, SocialLink } from "./types";

export const site = {
  name: "Gabriel Dautovi",
  /** Used as the <h1> lead-in and in metadata. */
  title: "Gabriel Dautovi",
  tagline: "Computer Science senior at Michigan Tech",
  summary:
    "I build across database development, applied AI/ML, and full-stack software engineering — most recently building data pipelines at United Wholesale Mortgage and researching how well AI-authored pull requests hold up against the V-model.",
  personal:
    "Outside of programming I'm usually playing video games, working out, hiking, or out with a camera.",
  url: "https://gabrieldautovi.com",
  location: "Houghton, Michigan",
  email: "GabrielDautovi@gmail.com",
  resumePath: "/Resume_GabrielDautovi.pdf",
  profileImage,
  /*
    Empty on purpose: the <h1> sitting right beside the portrait already says
    "Gabriel Dautovi", so alt text here would make a screen reader announce the
    same name twice in a row. The photo is decorative in the WCAG sense.
  */
  profileAlt: "",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub profile",
    handle: "JabobleHead",
    href: "https://github.com/JabobleHead",
    icon: "github",
  },
  {
    label: "LinkedIn profile",
    handle: "gabriel-dautovi",
    href: "https://www.linkedin.com/in/gabriel-dautovi/",
    icon: "linkedin",
  },
  {
    label: "Email Gabriel Dautovi",
    handle: site.email,
    href: `mailto:${site.email}`,
    icon: "email",
  },
];
