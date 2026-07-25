import { createFileRoute } from '@tanstack/react-router';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/services/queries';

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  const { data: projects, isLoading, isError } = getProjects();

  if (isLoading) return <div>Ładowanie projektów...</div>;
  if (isError) return <div>Wystąpił błąd!</div>;

  return (
    <div>
      <h1>Moje Projekty</h1>
      {projects?.map((project) => (
        <ProjectCard key={project.id} id={project.id} />
      ))}
    </div>
  );
}
