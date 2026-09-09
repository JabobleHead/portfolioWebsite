import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

/**
 * Shared section shell. Every section is a labelled landmark with exactly one
 * <h2>, which keeps the document outline predictable for screen-reader users
 * navigating by heading or landmark.
 */
export default function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-border-subtle py-16 first:border-t-0 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14">
          <span aria-hidden="true" className="mb-4 block h-1 w-12 rounded-full bg-accent" />
          <h2
            id={headingId}
            className="text-3xl font-bold tracking-tight text-text sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
