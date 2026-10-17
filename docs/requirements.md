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

On 2026-10-17 the owner authorized initial implementation and required dependencies: local npm workspace foundation, shared TypeScript contracts, an Express health endpoint, responsive home/navigation, and a mock host workspace. Authentication, persistent quizzes, multiplayer logic/events, scoring, timers, host elections, and deployment are excluded until subsequent approval.

## Confirmed MVP additions

The owner's current requirements refine the initial scope:

- Responsive home page and host workspace with host authentication.
- Quiz and multiple-choice question creation and editing.
- Unique-code rooms for up to 20 players; players join by code and name without accounts.
- Multiplayer waiting room, real-time synchronized questions, individual phone answers, question results, scores, ranking, and final results.
- Fixed or speed-based scoring and a common timer duration for all questions; numeric duration and formulas remain pending.
- Host transfer through voting, with a 30-second reconnection wait and a 15-second vote.
- Election ties resolved by original join order; no votes leave the game paused.
- React, TypeScript, Vite, Node.js, Express, Socket.IO, and SQLite are approved.
- Prioritize free/open-source technologies; no paid services. No deployments or external resource creation without authorization; avoid unnecessary dependencies.
- Screenshots are the only visual reference. No original source, editable design, tokens, or CSS is available or assumed. See `design-integration.md`.

## Open product questions

The following are unresolved questions, not approved requirements:

- Multiple choice is confirmed; what option limits, answer-change rules, scoring formulas, timer value, and progression controls apply?
- How are custom quizzes created, edited, stored, owned, imported, or shared?
- What controls does the host need, and does the host also participate as a player?
- How is host authentication provisioned and recovered? Players do not need accounts.
- Capacity is up to 20 players; does the host count, and how are disconnected slots treated? Code format, uniqueness scope, expiration, and reuse remain pending.
- Beyond the confirmed 30-second reconnection wait and 15-second election, what candidate eligibility, vote-change, returning-host, pause/resume, and no-vote recovery rules apply?
- Which Bible translations, references, content sources, and usage permissions apply?
- Are moderation, participant removal, or quiz visibility controls required?
- Which browsers, accessibility targets, latency targets, and concurrent-session volumes must be supported?
- Which additional languages are anticipated, and who manages translations?
- What personal data, if any, should be collected, retained, or deleted?

## Validation status

The tables above record confirmed scope. Detailed acceptance criteria and measurable quality targets must be agreed before validating an implementation; no numerical targets are assumed.
