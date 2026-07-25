import {getProjectById} from '@/services/queries';

export function ProjectCard({id}: {id: number}) {
    const { data: project, isLoading, isError } = getProjectById(id);

    if (isLoading) return <div>Ładowanie projektu...</div>
    if (isError) return <div>Wystąpił błąd!</div>

    return (
        <div>
            <h2>{project?.title}</h2>
            <p>{project?.description}</p>
            <p>{project?.status}</p>
        </div>
    )
}