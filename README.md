# Nexa Skills Hub — React + Vite

Plain client-side React app (React 19 + Vite + JavaScript), converted from the original
TanStack Start (SSR) project. Uses `react-router-dom` for routing instead of TanStack Router.

## Setup

```bash
npm install
npm run dev      # start dev server (http://localhost:8080)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/pages/` — route-level page components (Home, About, Courses, CourseDetail, Blog, Contact)
- `src/components/site/` — layout & marketing components (Navbar, Footer, SiteLayout, etc.)
- `src/components/ui/` — shadcn/ui-style primitives (Button, Dialog, Select, ...)
- `src/data/courses.js` — course content data
- `src/App.jsx` — route definitions
- `src/main.jsx` — app entry point
