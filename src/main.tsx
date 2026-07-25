import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 5, retryDelay: 500 } },
});

async function deferRender() {
    if (!import.meta.env.DEV) {
        return
    }
    const { worker } = await import('./mocks/browser')
    return worker.start()
}

deferRender().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
            <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </StrictMode>,
    )
})
