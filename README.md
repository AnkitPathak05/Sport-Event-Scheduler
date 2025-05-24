# 🏆 Sport-Event-Scheduler

A **single-page React web-app** that lets users **view, search and sort upcoming sports events** by date and sport.  
All event data is stored locally in a JSON file, and the UI is built from fully **re-usable components** styled with **Tailwind CSS**.

[Live Demo](https://sport-event-scheduler.vercel.app) • [Issue Tracker](../../issues)  

---

## ✨ Features
| Feature | Details |
|---------|---------|
| **Event list** | Clean card layout showing sport, title, teams, date & time, and venue. |
| **Sorting & Filtering** | Users can sort by **date** or **sport** with one click. |
| **Search-as-you-type** | Quick text search across event titles/teams. |
| **Local JSON data** | No backend needed; events are read from `src/data/events.json`. |
| **Re-usable components** | `<EventCard/>`, `<FilterBar/>`, `<SortButton/>`, etc.—easy to extend. |
| **Responsive + Tailwind** | Mobile-first, dark-mode-ready utility classes. |
| **Zero build config** | Powered by **Vite** for instant dev reloads. |

---

## 🛠️ Tech Stack
| Layer | Tech |
|-------|------|
| **Framework** | [React 18](https://react.dev/) with Hooks |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Tooling** | [Vite](https://vitejs.dev/) (⚡ blazing-fast bundler) |
| **Data** | Local `events.json` (can be swapped for an API later) |
| **Linting / Formatting** | ESLint + Prettier |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/AnkitPathak05/Sport-Event-Scheduler.git
cd Sport-Event-Scheduler

# 2. Install dependencies
npm install     # or pnpm install / yarn

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173  (default Vite port)
