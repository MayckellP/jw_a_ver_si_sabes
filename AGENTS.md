# JW-App Project Instructions

## Product scope

JW-App is a multiplayer, Bible-based web gaming platform. Its confirmed scope includes game rooms with unique join codes, host-managed sessions, players joining from their own devices, custom quizzes, and responsive desktop and mobile interfaces. The architecture must accommodate additional game modes.

Do not introduce impostor, infiltrator, deception-based, or similar hidden-deception mechanics.

## Language conventions

- Communicate with the project owner in Spanish.
- Write all source code and technical documentation in English.
- Use English names for variables, functions, classes, components, files, folders, database schemas, and API endpoints.
- Write technical comments in English.
- The initial user-facing language is Spanish. Keep user-facing text separate from application logic and design for future internationalization. The localization mechanism remains undecided.

## Technical governance

- Do not select or adopt a technology stack without the project owner's explicit approval.
- At the initial documentation stage, do not install dependencies, scaffold applications, or generate application code. Wait for explicit authorization to move beyond documentation.
- Treat unapproved choices as pending decisions, not requirements or established architecture.
- Do not infer authentication, persistence, hosting, networking protocols, scoring rules, or Bible content sources from the product description.
- Record approved technical decisions and their rationale in `docs/technical-decisions.md`.
- Keep confirmed requirements and unresolved questions clearly separated.

## Implementation conventions for future authorized work

- Keep room and session management distinct from individual game-mode rules.
- Design game-mode boundaries so additional modes can be added without duplicating shared room and session behavior.
- Support responsive use on desktop and mobile devices.
- Use meaningful English identifiers and comments that explain intent where needed.
- Keep documentation consistent with approved scope and implementation.
- Make focused changes and verify them with checks appropriate to their impact once tooling is approved.
- Do not commit credentials or secrets.

## Documentation map

- `docs/project-overview.md`: purpose, scope, and project status.
- `docs/requirements.md`: confirmed requirements and open product questions.
- `docs/architecture.md`: conceptual boundaries and unresolved architecture choices.
- `docs/technical-decisions.md`: decision status and approval record.
