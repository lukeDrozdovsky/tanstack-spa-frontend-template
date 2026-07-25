import type { Project } from './types'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch(`${BASE_URL}/api/projects`)
    if (!response.ok) {
        throw new Error('Błąd podczas pobierania listy projektów')
    }
    return response.json()
}

export async function fetchProjectById(id: number): Promise<Project> {
    const response = await fetch(`${BASE_URL}/api/projects/${id}`)
    if (!response.ok) {
        throw new Error(`Nie udało się pobrać projektu o id ${id}`)
    }
    return response.json()
}