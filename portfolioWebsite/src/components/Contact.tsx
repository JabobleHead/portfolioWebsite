import { site, socials } from "@/data/site";
import { ExternalLinkIcon, SocialGlyph } from "./Icons";
import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      intro="I'm looking for software engineering roles starting after I graduate in December 2026. The fastest way to reach me is email."
    >
      <div className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm sm:p-8">
        <ul role="list" className="grid gap-3 sm:grid-cols-3">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                {...(social.icon === "email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-full items-center gap-3 rounded-xl border border-border-subtle bg-surface-raised px-4 py-3 text-sm transition-colors hover:border-border-strong"
              >
                <SocialGlyph icon={social.icon} className="shrink-0 text-xl text-accent" />
                <span className="min-w-0">
                  <span className="block font-semibold text-text">
                    {social.icon === "email"
                      ? "Email"
                      : social.icon === "github"
                        ? "GitHub"
                        : "LinkedIn"}
                  </span>
                  <span className="block truncate text-text-muted">{social.handle}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-border-subtle pt-6">
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            Read my résumé
            <ExternalLinkIcon />
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
