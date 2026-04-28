import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage({ pages, projects }) {
  return (
    <>
      <PageIntro plain {...pages.projects} />

      <section className="page-section">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={`${project.title}-${project.period}`} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
