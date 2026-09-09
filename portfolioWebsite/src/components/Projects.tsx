import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Team and research work, from a production site for MTU's Sound and Lighting Services to tooling built for an ongoing research paper."
    >
      <ul role="list" className="space-y-6">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
