# Architecture

## Status

The owner has approved React, TypeScript, Vite, Node.js, Express, Socket.IO, and SQLite. Initial implementation was authorized on 2026-10-17: npm workspaces in apps/web, apps/server, and packages/shared; local frontend foundation and a minimal health endpoint only. Deployment topology, authentication mechanism, detailed data model, and protocol contracts remain pending.

See `design-integration.md` for proposed frontend modules, reusable components, role boundaries, visual reconstruction, and responsive behavior. Proposed client/server/shared boundaries are logical organization, not separate service requirements.

## Conceptual responsibilities

| Area | Responsibility |
| --- | --- |
| User interface | Present host and player experiences on desktop and mobile devices, initially in Spanish. |
| Room and session management | Coordinate room creation, join-code resolution, participants, and session lifecycle. Detailed lifecycle rules remain pending. |
| Game-mode logic | Encapsulate the rules and state transitions of each supported game mode. |
| Quiz content | Represent custom quizzes and their questions. Authoring workflows and storage remain pending. |
| Multiplayer coordination | Keep participants informed of shared session changes. Transport and state-authority choices remain pending. |
| Localization | Separate user-facing messages from application logic so more languages can be supported later. |

These areas are logical boundaries, not a requirement for separate services, packages, processes, or deployments.

## Extensibility direction

Shared room and session behavior should remain distinct from game-specific rules. Future game modes should reuse common participation and session capabilities. The concrete mode interface, event model, and state representation will be defined after the initial game rules and stack are approved.

## Illustrative interaction

1. A host creates a room and receives its unique join code.
2. Players use that code to join from their devices.
3. The host manages the session and its selected game mode.
4. Participants interact with the game and receive shared session updates.

This sequence illustrates confirmed capabilities; it does not define specific screens, endpoints, messages, or lifecycle transitions.

## Pending architecture decisions

- Tooling beyond the initial dependency set; exact installed versions are recorded in package-lock.json.
- Multiplayer transport, state authority, synchronization, and reconnection strategy.
- Room-code generation, collision handling, uniqueness scope, and expiration.
- Persistence scope, SQLite data model, and retention policy.
- Identity, host authorization, player access, and session ownership.
- Custom quiz representation, validation, storage, and content provenance.
- Game-mode contracts and session lifecycle states.
- Localization tooling and translation format.
- Hosting, deployment, scaling, monitoring, and operational security controls.
- Test tooling and approved quality targets.

The stack is approved; the remaining details listed above are pending. See `technical-decisions.md` for decision tracking.
