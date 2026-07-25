import { useQuery } from '@tanstack/react-query'
import { fetchProjects, fetchProjectById } from './api'

export function getProjects() {
    return useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    })
}

export function getProjectById(id: number) {
    return useQuery({
        queryKey: ['projects', id],
        queryFn: () => fetchProjectById(id),
        enabled: Boolean(id),
    })
}