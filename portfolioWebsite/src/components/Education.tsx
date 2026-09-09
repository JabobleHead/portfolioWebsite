import { education } from "@/data/education";
import Section from "./Section";
import TagList from "./TagList";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <article
        aria-labelledby="education-institution"
        className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="sm:w-44 sm:shrink-0">
            <p className="font-mono text-sm text-text-muted">{education.period}</p>
            <p className="mt-1 text-sm text-text-muted">{education.location}</p>
          </div>

          <div className="min-w-0 flex-1">
            <h3 id="education-institution" className="text-xl font-bold tracking-tight text-text">
              {education.institution}
            </h3>
            <p className="mt-1 text-base font-medium text-accent">{education.degree}</p>

            <dl className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              <div className="flex gap-2">
                <dt className="text-sm font-semibold text-text">Minor</dt>
                <dd className="text-sm text-text-muted">{education.minor}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-sm font-semibold text-text">GPA</dt>
                <dd className="text-sm text-text-muted">{education.gpa}</dd>
              </div>
            </dl>

            <h4 className="mt-6 text-sm font-semibold text-text">Relevant coursework</h4>
            <div className="mt-3">
              <TagList tags={education.coursework} label="Relevant coursework" />
            </div>

            <h4 className="mt-6 text-sm font-semibold text-text">Certifications</h4>
            <ul role="list" className="mt-3 space-y-2">
              {education.certifications.map((certification) => (
                <li
                  key={certification}
                  className="relative pl-5 text-base leading-relaxed text-text-muted before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Section>
  );
}
