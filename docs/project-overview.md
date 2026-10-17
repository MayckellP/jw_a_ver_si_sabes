# JW-App Project Overview

## Purpose

JW-App is a multiplayer, Bible-based web gaming platform. A host creates and manages a game session, and players join from their own devices using a unique room code.

## Confirmed scope

- Multiplayer rooms with unique join codes.
- Host creation and management of game sessions.
- Participation from players' own devices.
- Support for custom quizzes.
- An architecture that supports additional game modes in the future.
- Responsive interfaces for desktop and mobile devices.
- Spanish as the initial user-facing language, with support for future internationalization.

Impostor, infiltrator, and deception-based mechanics are excluded.

## Working conventions

Source code, identifiers, project structure, technical comments, schemas, API endpoints, and technical documentation must use English. Communication with the project owner must use Spanish. See `../AGENTS.md` for permanent instructions.

## Current stage

The project is in its first authorized implementation phase (owner approval: 2026-10-17). The npm workspace monorepo contains a React/TypeScript/Vite frontend, a minimal Express health endpoint, and a shared TypeScript contract package. The public landing page and responsive host workspace use example data. Authentication, persistence, multiplayer behavior, scoring, timers, elections, and deployment remain outside this phase. See ../README.md for local development commands.

The only visual resources are 14 screenshots in `docs/design/`. No editable design or original code is available. See `design-integration.md` for the complete visual analysis, requirement comparison, component proposal, and implementation phases.

## Pending definition

Detailed quiz rules, host controls, player identity, room lifecycle, content policy, operational constraints, and technical choices require further definition. See `requirements.md`, `architecture.md`, and `technical-decisions.md`.
