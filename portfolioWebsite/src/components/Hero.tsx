import Image from "next/image";
import { site, socials } from "@/data/site";
import { MapPinIcon, SocialGlyph } from "./Icons";

export default function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 font-mono text-sm text-text-muted">
            <MapPinIcon aria-hidden="true" />
            {site.location}
          </p>

          <h1
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-text sm:text-5xl"
          >
            {site.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-accent sm:text-xl">{site.tagline}</p>

          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            {site.summary}
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{site.personal}</p>

          <ul role="list" aria-label="Elsewhere on the web" className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  {...(social.icon === "email"
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-border-strong hover:text-accent"
                >
                  <SocialGlyph icon={social.icon} className="text-base" />
                  <span>{social.handle}</span>
                  {/* Gives the link a full name; the handle alone is ambiguous. */}
                  <span className="sr-only">— {social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0">
          <Image
            src={site.profileImage}
            alt={site.profileAlt}
            width={200}
            height={200}
            priority
            placeholder="blur"
            sizes="200px"
            className="h-40 w-40 rounded-2xl border border-border-subtle object-cover shadow-md sm:h-50 sm:w-50"
          />
        </div>
      </div>
    </section>
  );
}
