import { http, HttpResponse } from 'msw';
import type { Project } from '@/services/types';

const BASE_URL = 'http://localhost:8080'

export const handlers = [
    http.get(`${BASE_URL}/api/projects`, () => {
        return HttpResponse.json(MOCK_PROJECTS)
    }),

    http.get(`${BASE_URL}/api/projects/:id`, ({ params }) => {
        const project = MOCK_PROJECTS.find((p) => p.id === Number(params.id))

        if (!project) {
            return new HttpResponse('Nie znaleziono projektu', { status: 404 })
        }

        return HttpResponse.json(project)
    }),
]

const MOCK_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Projekt Portfolio',
        status: 'W trakcie',
        description: 'Osobista strona internetowa z użyciem biblioteki TanStack',
    },
    {
        id: 2,
        title: 'Aplikacja Pogodowa',
        status: 'Ukończony',
        description: 'Aplikacja stworzona w EJS z użyciem OpenWeather API',
    },
    {
        id: 3,
        title: 'Twoja Szkoła Tańca',
        status: 'Ukończony',
        description: 'System zarządzania szkołą tańca oraz zapisów na kursy taneczne',
    },
    {
        id: 4,
        title: 'OneOffice',
        status: 'W trakcie',
        description: 'System rezerwacji biurek oraz przestrzeni biurowej w przestrzeniach typu co-work oraz korporacyjnych',
    },
]