import { roles } from "@/data/experience";
import Section from "./Section";
import TagList from "./TagList";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {/* Ordered because the sequence is meaningful: most recent first. */}
      <ol role="list" className="space-y-6">
        {roles.map((role) => {
          const headingId = `${role.id}-heading`;
          return (
            <li key={role.id}>
              <article
                aria-labelledby={headingId}
                className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm transition-colors hover:border-border-strong sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <div className="sm:w-44 sm:shrink-0">
                    <p className="font-mono text-sm text-text-muted">{role.period}</p>
                    <p className="mt-1 text-sm text-text-muted">{role.location}</p>
                    {role.current ? (
                      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-contrast">
                        Current
                      </p>
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 id={headingId} className="text-xl font-bold tracking-tight text-text">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-accent">{role.organization}</p>

                    <ul role="list" className="mt-4 space-y-2.5">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5 text-base leading-relaxed text-text-muted before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5">
                      <TagList
                        tags={role.tags}
                        label={`Technologies used at ${role.organization}`}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
