# Requirements

## Confirmed functional requirements

| ID | Requirement |
| --- | --- |
| FR-001 | The platform must support multiplayer game rooms. |
| FR-002 | Each room must have a unique join code that players can use to join. The uniqueness scope and expiration policy remain pending. |
| FR-003 | A host must be able to create and manage game sessions. The exact management controls remain pending. |
| FR-004 | Players must be able to join from their own devices. |
| FR-005 | The platform must support custom quizzes. Authoring, ownership, and sharing workflows remain pending. |
| FR-006 | The architecture must support additional game modes in the future. |
| FR-007 | Games must be Bible-based. Content sources and editorial rules remain pending. |

## Confirmed interface and development requirements

| ID | Requirement |
| --- | --- |
| NFR-001 | The interface must be responsive on desktop and mobile devices. |
| NFR-002 | The initial user-facing language must be Spanish. |
| NFR-003 | The application must be designed to support future internationalization. |
| NFR-004 | Source code, identifiers, file and folder names, schemas, API endpoints, and technical comments must use English. |
| NFR-005 | Technical documentation must use English; communication with the project owner must use Spanish. |
| NFR-006 | Technology stack selection requires explicit approval from the project owner. |

## Excluded mechanics

Impostor, infiltrator, and deception-based mechanics must not be implemented.

## Current delivery constraints

The current work is documentation only. Do not install dependencies, generate application code, or scaffold an application. These activities require subsequent authorization.

## Open product questions

The following are unresolved questions, not approved requirements:

- What question types, answer validation rules, scoring, timers, and progression should the initial quiz mode support?
- How are custom quizzes created, edited, stored, owned, imported, or shared?
- What controls does the host need, and does the host also participate as a player?
- Do hosts or players need accounts, or can they participate as guests?
- What are the room capacity, code format, uniqueness scope, expiration, and reuse rules?
- What happens when a player or host disconnects, reconnects, leaves, or ends a session?
- Which Bible translations, references, content sources, and usage permissions apply?
- Are moderation, participant removal, or quiz visibility controls required?
- Which browsers, accessibility targets, latency targets, and concurrent-session volumes must be supported?
- Which additional languages are anticipated, and who manages translations?
- What personal data, if any, should be collected, retained, or deleted?

## Validation status

The tables above record confirmed scope. Detailed acceptance criteria and measurable quality targets must be agreed before validating an implementation; no numerical targets are assumed.
