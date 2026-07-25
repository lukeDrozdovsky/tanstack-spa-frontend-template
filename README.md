# 🚀 TanStack SPA Frontend Template

A robust, production-ready template for building Single Page Applications (SPAs) with React and Vite. This template leverages the power of the **TanStack ecosystem** (Router & Query) and provides an out-of-the-box local development environment using **MSW (Mock Service Worker)**.

Optimized for seamless deployment to **Cloudflare Pages**.

## 🛠 Tech Stack

* **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Routing:** [TanStack Router](https://tanstack.com/router/latest) (Type-safe, file-based routing)
* **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest) (React Query)
* **API Mocking:** [MSW (Mock Service Worker)](https://mswjs.io/)
* **Deployment Target:** [Cloudflare Pages](https://pages.cloudflare.com/) / Wrangler
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)

---

## ✨ Key Features

1. **Clean Architecture for Data Fetching:** API calls are cleanly separated into `api.ts` (pure fetch functions) and `queries.ts`/`mutations.ts` (React Query hooks).
2. **Network-Level Mocking:** Develop your UI without a real backend. MSW intercepts requests at the network level, simulating a real API environment perfectly.
3. **Smart Environment Fallbacks:** Easily switch between local mocks and a live production backend without changing code.
4. **Type-Safe Routing:** Catch routing errors at compile-time with TanStack Router.

---

## 📂 Project Structure

```text
📦 src
 ┣ 📂 components     # Reusable UI components (e.g., ProjectCard)
 ┣ 📂 mocks          # MSW configuration and handlers
 ┃ ┣ 📜 browser.ts   # MSW worker initialization
 ┃ ┗ 📜 handlers.ts  # API mock routes and responses
 ┣ 📂 routes         # TanStack Router file-based routes
 ┣ 📂 services       # Data fetching layer (Clean Architecture)
 ┃ ┣ 📜 api.ts       # Pure async fetch functions
 ┃ ┣ 📜 queries.ts   # TanStack Query custom hooks (useQuery)
 ┃ ┣ 📜 mutations.ts # TanStack Query mutations (useMutation)
 ┃ ┗ 📜 types.ts     # TypeScript interfaces for API responses
 ┣ 📜 App.tsx        # App entry point
 ┗ 📜 main.tsx       # React DOM rendering & MSW deferred startup
```
## 🚀 Getting Started
1. Create a repository from this template
Click the "Use this template" button at the top of this repository on GitHub to create your own project based on this setup.

2. Install dependencies
```Bash
npm install
```
3. Start the development server
```Bash
npm run dev
```
Note: The application will start on http://localhost:5173. Look for [MSW] Mocking enabled. in your browser console to confirm the mocks are running.

---

## 🔗 API Connection & Mocking Strategy
This template uses a smart fallback strategy to seamlessly switch between local development and production.

In src/services/api.ts and src/mocks/handlers.ts, you will find this pattern:

```ts
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'
```

Local Development: If no environment variable is provided, the app will target http://localhost:8080. MSW is configured to intercept requests to this URL and return mock data.

Production / Live Backend: Once you provide the VITE_API_URL variable, the app will bypass MSW and communicate directly with your real backend.

How to add Mock endpoints?
Add your mocked API responses in src/mocks/handlers.ts using the http module from MSW. Example:

```ts
http.get(`${BASE_URL}/api/projects`, () => {
  return HttpResponse.json([{ id: 1, title: 'Project 1' }])
})
```

---

## 🌍 Environment Variables (Cloudflare Pages)
Because this template is tailored for Cloudflare Pages / Wrangler, managing environment variables is straightforward.

Local Environment (.dev.vars)
Create a .dev.vars file in the root directory if you want to test against a real external backend locally using Wrangler:

```js
VITE_API_URL=[https://my-staging-api.com](https://my-staging-api.com)
```
Production Environment (Cloudflare Dashboard)
When deploying, go to your Cloudflare Pages dashboard:

1. Navigate to Settings > Environment variables.
2. Add a new variable:
   - Name: VITE_API_URL
   - Value: https://api.your-production-domain.com


---

## 🚢 Deployment
To build the project for production, run:

```Bash
npm run build
```
This generates the optimized static files in the dist/ directory.

To deploy via Cloudflare Wrangler:

```Bash
npx wrangler pages deploy dist
```

---
