import { site, socials } from "@/data/site";
import { SocialGlyph } from "./Icons";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.
        </p>

        <ul role="list" aria-label="Elsewhere on the web" className="flex items-center gap-2">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                {...(social.icon === "email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-lg text-text-muted transition-colors hover:border-border-strong hover:text-accent"
              >
                <SocialGlyph icon={social.icon} />
                <span className="sr-only">{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
