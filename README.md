# JW-App

Local frontend foundation for a multiplayer Bible quiz platform. This phase contains a public landing page, responsive navigation, a host workspace with clearly labeled mock quizzes, and an Express health endpoint. No authentication, persistence, rooms, real-time events, scoring, timers, or host elections are implemented.

## Requirements

- Node.js 22.12+ (Node.js 24 recommended; validated on 24.22.0).
- npm with workspace support.

## Run from VS Code

1. Open the repository folder in VS Code.
2. Open **Terminal > New Terminal** at the repository root.
3. Run `npm.cmd ci` to restore the locked dependencies (on macOS/Linux use `npm ci`).
4. Run `npm.cmd run dev` to start both applications.
5. Open http://127.0.0.1:5173/ for the landing page or http://127.0.0.1:5173/#/host for the demo host workspace.
6. Open http://127.0.0.1:3001/api/health to inspect the API response.
7. Press Ctrl+C to stop development processes.

On Windows PowerShell, `npm.cmd` avoids execution-policy errors affecting `npm.ps1`; no policy change is needed.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite and the watched Express server together. |
| `npm run dev:web` | Start only Vite on port 5173. |
| `npm run dev:server` | Start only Express on port 3001. |
| `npm run typecheck` | Check every workspace. |
| `npm run build` | Build shared contracts, server, and frontend in order. |
| `npm run preview` | Preview the built frontend on Vite's printed URL (normally port 4173). |
| `npm run start:server` | Run the compiled Express server after a build. |

The API uses loopback only. `PORT` can override the server port; if changed, update the Vite development proxy accordingly. `/api/health` is also available through Vite's development proxy. The production preview command serves frontend assets only and does not proxy API requests. No production hosting is configured.

## Structure

```text
apps/web/             React + TypeScript + Vite
  src/app/            Application composition and minimal hash navigation
  src/components/     Reusable visual primitives
  src/features/       Home and host dashboard
  src/locales/        Spanish interface strings and example content
  src/styles/         Estimated visual tokens and responsive styles
apps/server/          Minimal Express service
packages/shared/      Infrastructure types; future game contracts belong here
scripts/dev.mjs       Dependency-free development process launcher
docs/design/          Original screenshots, unchanged
```

## Visual reconstruction and limitations

Colors, spacing, font stack, radii, and breakpoints are estimates from the screenshots. The hero device illustration is reconstructed with CSS and interface elements, not a screenshot embedded in the page. Icons use inline SVG without another library. No font downloads or external assets are required.

All interface copy is in `apps/web/src/locales/es.ts`; this is an initial separation boundary, not an adopted internationalization library. Home and host navigation use hash links, avoiding a routing dependency in this phase. Search and ordering operate only on example data in memory. Unavailable actions are disabled; no real account, quiz, session, or player data is implied. Mobile and tablet layouts are proposed adaptations because only desktop screenshots were supplied.

Socket.IO and SQLite are approved for later work but deliberately not installed until functionality requires them. The next milestone should resolve host access and quiz persistence decisions before implementing host authentication and quiz management, subject to owner approval.
