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
| C-005 | Keep the current stage limited to documentation. | Project-owner instructions. |
| C-006 | Obtain approval before choosing the technology stack. | Project-owner instructions. |

## Pending decision register

| ID | Decision | Status | Inputs needed |
| --- | --- | --- | --- |
| TD-001 | Technology stack and repository structure | Pending; no stack selected | Hosting constraints, team preferences, expected scale, and owner approval. |
| TD-002 | Multiplayer transport and state authority | Pending | Interaction timing, consistency expectations, and disconnect behavior. |
| TD-003 | Persistence and data storage | Pending | Quiz ownership, session history, retention, and identity requirements. |
| TD-004 | Authentication and authorization | Pending | Guest access, host permissions, and account requirements. |
| TD-005 | Room-code strategy and session lifecycle | Pending | Uniqueness scope, capacity, expiration, reuse, and reconnection rules. |
| TD-006 | Quiz model and game-mode extension contract | Pending | Initial quiz rules, supported question types, and future mode needs. |
| TD-007 | Internationalization implementation | Pending | Approved stack, translation workflow, and future language needs. |
| TD-008 | Hosting and operations | Pending | Budget, deployment constraints, scale, and observability needs. |
| TD-009 | Testing and quality tooling | Pending | Approved stack, acceptance criteria, and quality targets. |
| TD-010 | Bible content sources and handling | Pending | Translation selection, editorial expectations, and usage permissions. |

## Approved technical selections

None yet. The conceptual responsibilities in `architecture.md` are planning guidance, not approved technology selections.

## Future decision record format

For each approved technical decision, record:

- Decision ID and title.
- Status and approval date.
- Context and requirements addressed.
- Options considered.
- Approved choice and rationale.
- Consequences and tradeoffs.
- Project-owner approval reference.
