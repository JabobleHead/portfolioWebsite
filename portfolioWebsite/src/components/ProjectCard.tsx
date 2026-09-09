import type { Project } from "@/data/types";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";
import ProjectGallery from "./ProjectGallery";
import TagList from "./TagList";

export default function ProjectCard({ project }: { project: Project }) {
  const headingId = `${project.id}-heading`;
  const hasScreenshots = project.screenshots.length > 0;
  const hasLinks = Boolean(project.repoUrl || project.liveUrl);

  return (
    <article
      aria-labelledby={headingId}
      className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm transition-colors hover:border-border-strong sm:p-8"
    >
      <div
        className={`grid gap-8 ${hasScreenshots ? "lg:grid-cols-2 lg:items-start" : ""}`}
      >
        {hasScreenshots ? (
          <ProjectGallery screenshots={project.screenshots} projectName={project.name} />
        ) : null}

        <div className="min-w-0">
          <p className="font-mono text-sm text-text-muted">{project.period}</p>

          <h3 id={headingId} className="mt-2 text-xl font-bold tracking-tight text-text">
            {project.name}
          </h3>
          <p className="mt-1 text-base font-medium text-accent">{project.role}</p>

          <p className="mt-4 text-base leading-relaxed text-text-muted">{project.summary}</p>

          <ul role="list" className="mt-4 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative pl-5 text-base leading-relaxed text-text-muted before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <TagList tags={project.tags} label={`Technologies used in ${project.name}`} />
          </div>

          {hasLinks ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-raised px-4 py-2 text-sm font-medium text-text transition-colors hover:border-border-strong hover:text-accent"
                >
                  <GitHubIcon />
                  Source
                  <span className="sr-only">code for {project.name} (opens in a new tab)</span>
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-raised px-4 py-2 text-sm font-medium text-text transition-colors hover:border-border-strong hover:text-accent"
                >
                  <ExternalLinkIcon />
                  Live site
                  <span className="sr-only">for {project.name} (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
