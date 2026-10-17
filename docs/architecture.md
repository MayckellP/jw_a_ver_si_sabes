# Architecture

## Status

This document describes conceptual responsibilities derived from confirmed requirements. It does not select a technology stack, deployment topology, networking protocol, database, or implementation framework. All such choices require approval.

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

- Frontend and backend technologies, language choices, and repository organization.
- Multiplayer transport, state authority, synchronization, and reconnection strategy.
- Room-code generation, collision handling, uniqueness scope, and expiration.
- Persistence requirements, data model, database, and retention policy.
- Identity, host authorization, player access, and session ownership.
- Custom quiz representation, validation, storage, and content provenance.
- Game-mode contracts and session lifecycle states.
- Localization tooling and translation format.
- Hosting, deployment, scaling, monitoring, and operational security controls.
- Test tooling and approved quality targets.

No item in this list is selected by this document. See `technical-decisions.md` for decision tracking.
