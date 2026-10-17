# Technical Decisions

## Decision policy

A confirmed requirement is not the same as a selected implementation. Technology stack choices require explicit project-owner approval. Record each approved choice with its rationale, approval reference, and consequences. Pending entries below authorize no implementation or dependency installation.

## Confirmed constraints

| ID | Constraint | Source |
| --- | --- | --- |
| C-001 | Use English for source code, technical naming, and technical documentation. | Project-owner instructions. |
| C-002 | Communicate with the project owner in Spanish. | Project-owner instructions. |
| C-003 | Use Spanish initially in the interface and support future internationalization. | Project-owner instructions. |
| C-004 | Support future game modes and exclude deception-based mechanics. | Project-owner instructions. |
| C-005 | Keep implementation limited to the owner-approved initial foundation phase. | Project-owner instructions. |
| C-006 | Obtain approval before choosing the technology stack. | Project-owner instructions. |

## Pending decision register

| ID | Decision | Status | Inputs needed |
| --- | --- | --- | --- |
| TD-001 | Technology stack and repository structure | Stack and npm workspace monorepo approved | React, TypeScript, Vite, Node.js, Express, Socket.IO, SQLite. See visual integration plan for proposed structure. |
| TD-002 | Multiplayer transport and state authority | Pending | Interaction timing, consistency expectations, and disconnect behavior. |
| TD-003 | Persistence and data storage | SQLite approved; persistence scope pending | Quiz ownership, session history, retention, and identity requirements. |
| TD-004 | Authentication and authorization | Pending | Guest access, host permissions, and account requirements. |
| TD-005 | Room-code strategy and session lifecycle | Pending | Uniqueness scope, capacity, expiration, reuse, and reconnection rules. |
| TD-006 | Quiz model and game-mode extension contract | Pending | Initial quiz rules, supported question types, and future mode needs. |
| TD-007 | Internationalization implementation | Pending | Approved stack, translation workflow, and future language needs. |
| TD-008 | Hosting and operations | Pending | Budget, deployment constraints, scale, and observability needs. |
| TD-009 | Testing and quality tooling | Pending | Approved stack, acceptance criteria, and quality targets. |
| TD-010 | Bible content sources and handling | Pending | Translation selection, editorial expectations, and usage permissions. |

## Approved technical selections

The project owner explicitly approved React, TypeScript, Vite, Node.js, Express, Socket.IO, and SQLite in the screenshot integration request on 2026-10-17. The preceding architecture proposal motivated this stack with shared TypeScript, reusable UI, bidirectional room communication, and local persistence without a managed database service. Exact versions and additional libraries remain pending. SQLite and a single-server starting point require reassessment if later concurrency/deployment needs exceed that arrangement; no multi-server scaling guarantee is implied.

The same request establishes screenshot-only visual reconstruction and documentation-only authorization. No original Figma resources are available or assumed. See `design-integration.md` for evidence and proposals. No visual library is approved. Authentication details, server authority contracts, persistence lifetime, and hosting remain pending; stack approval alone does not approve every detail of the previous proposal.

## Future decision record format

For each approved technical decision, record:

- Decision ID and title.
- Status and approval date.
- Context and requirements addressed.
- Options considered.
- Approved choice and rationale.
- Consequences and tradeoffs.
- Project-owner approval reference.


## Initial implementation authorization ? 2026-10-17

The owner explicitly approved local development, dependency installation, an npm workspace monorepo (`apps/web`, `apps/server`, `packages/shared`), TypeScript checks/builds, a minimal Express health endpoint, screenshot-based UI primitives, home/navigation, and a mock host dashboard. This supersedes earlier documentation-only restrictions for this bounded phase. Subsequent phases and deployment still require approval.

- TD-001: React/TypeScript/Vite web application, Node.js/TypeScript/Express service, and shared contracts implemented as npm workspaces. Shared types build before server/web. Dependency versions are locked in `package-lock.json`.
- Initial implementation choices within the approved stack: native Node.js development launcher, TypeScript compiler, Vite's built-in JSX transformation, and `tsx` for the TypeScript server watch process. No routing, icon, CSS, testing, or process-management library is added.
- TD-007 remains pending: Spanish strings are isolated in one module as a reversible preparation step; no internationalization library has been adopted.
- Socket.IO and SQLite remain approved future selections without installed adapters, databases, or game contracts in this phase.
- The visual dashboard uses screenshot 05 as a workspace skeleton because a separate summary dashboard was not supplied. Five mock cards match the visible examples; no account access is implemented. Search and sorting are local-only.
- Health contract: `GET /api/health` returns `{ "status": "ok", "service": "jw-app-server" }`. The server binds to loopback and the frontend development server proxies `/api`. This adds no game endpoint or transport protocol.
