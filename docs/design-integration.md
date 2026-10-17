# Design Integration

## 1. Scope and evidence

All 14 PNG screenshots in `docs/design/` were visually inspected. They are the sole visual reference. No original source code, components, editable Figma structure, design tokens, or CSS is available or assumed. Reconstruction must preserve their visual identity and layout while meeting current requirements.

Evidence labels used below:

- **Observed:** visible in a screenshot; this establishes appearance, not working behavior.
- **Inferred:** a plausible interpretation of static imagery, requiring validation.
- **Proposed:** a new implementation or missing state, not part of the supplied design.

The approved stack is React, TypeScript, Vite, Node.js, Express, Socket.IO, and SQLite. The original analysis was documentation-only. On 2026-10-17 the owner authorized the first implementation phase: local foundation, design primitives, home, navigation, and a mock host workspace. Further functionality remains pending approval. Technical naming and documentation use English; visible application text uses Spanish, separated for future localization. No visual library is selected. No paid service, deployment, or external resource creation is authorized.

## 2. Screenshot inventory and identified screens

Paths below are relative to this document. Overlapping home captures represent sections or views of the same page, not four proven routes.

| ID | Screenshot | Observed screen, layout, and controls |
| --- | --- | --- |
| 01 | [01-home-hero.png](design/01-home-hero.png) | Public header with logo, Inicio, Explorar juegos, Cómo funciona, moon icon, Iniciar sesión, and Crear partida. Two-column hero with large navy/blue heading, pill label, supporting text, create/join actions, avatar group, and illustrated desktop/phones. |
| 02 | [02-home-overview.png](design/02-home-overview.png) | Same hero at a smaller apparent scale, followed by the opening of Una partida en tres pasos. Not evidence of a mobile breakpoint. |
| 03 | [03-home-how-it-works.png](design/03-home-how-it-works.png) | Three numbered instructional cards with icons; below, a blue/purple featured Quiz bíblico card with badge, illustration, metadata pills, and action. |
| 04 | [04-home-game-library.png](design/04-home-game-library.png) | Featured quiz card, three upcoming mode cards, and footer with project/privacy/help/legal links. Upcoming modes: Verdadero o falso, Ordena los acontecimientos, Completa el versículo. |
| 05 | [05-quiz-management.png](design/05-quiz-management.png) | Host shell: left sidebar, breadcrumb/top bar, user avatar. Mis cuestionarios title, create action, search, status/sort controls, and three-column quiz-card grid. Cards have colored covers, question counts, descriptions, avatars, overflow, Editar, and Jugar. Five cards are visible although the summary says eight. |
| 06 | [06-quiz-builder.png](design/06-quiz-builder.png) | Host shell plus editor toolbar, saved indicator, preview/save-and-play actions. Question list left, multiple-choice editor center, settings/phone preview right. Prompt, four options, correct-answer marking, add-answer action, optional explanation, Bible reference, duplicate/delete controls, time and points settings. |
| 07 | [07-create-game-step-1.png](design/07-create-game-step-1.png) | Standalone create-game header with close action; three-step progress indicator; selected quiz-mode card; Continuar action. |
| 08 | [08-create-game-step-2.png](design/08-create-game-step-2.png) | Step two: search, three quiz selection rows, blue selected outline/check, Atrás and Continuar. |
| 09 | [09-create-game-step-3.png](design/09-create-game-step-3.png) | Step three: optional room-name field, individual/team choices, toggles for round scores, random question order, and late joining; Atrás and Crear sala. Team mode is marked upcoming. |
| 10 | [10-game-lobby-host.png](design/10-game-lobby-host.png) | Dark host lobby: logo/status/settings header, large room code left, copy/share actions, six participant cards and waiting placeholder right. Bottom quiz summary and Iniciar partida action. Right-hand content is cropped. |
| 11 | [11-game-question.png](design/11-game-question.png) | Dark question view: logo, question progress, response count, circular timer, centered prompt, four A-D colored options in a 2x2 grid; Bible reference and Finalizar pregunta footer. |
| 12 | [12-game-answer-selected.png](design/12-game-answer-selected.png) | Same question view with option B selected using brighter fill, white outline, and check. Host footer action remains visible, so role-specific behavior cannot be established. |
| 13 | [13-answer-results.png](design/13-answer-results.png) | Light question results: correct-answer badge, answer heading, explanation/reference, colored response-distribution bars, success percentage, and cards for correct count, average time, best points. Ver clasificación action. |
| 14 | [14-final-results.png](design/14-final-results.png) | Dark final results: celebration heading, confetti, top-three podium in visual order 2-1-3, avatars/names/points, participation/accuracy/duration statistics, replay and return-to-panel actions. |

## 3. Observable visual language and inferred navigation

**Observed:** light neutral public and management surfaces, navy text, saturated blue primary actions, pale blue selection surfaces, thin cool borders, rounded cards/inputs/buttons, and restrained shadows. The gameplay area uses deep navy surfaces, white text, and blue highlights. Avatar circles use initials and varied accent colors. Icons are mainly thin outlines. The logo combines a rounded blue symbol with a JW•App wordmark; no original logo asset is available.

**Observed:** generous whitespace in the public hero and wizard; denser host controls; multi-column desktop grids; persistent-looking top/bottom bars in gameplay. Static images cannot prove sticky/fixed positioning. No application modal is shown. The Figma Make/Remix badge is prototype tooling chrome and should not be reconstructed as an application control.

**Inferred:** the typeface is a modern sans-serif, visually compatible with an Inter-like or system sans-serif fallback. Its family, files, weights, and licensing cannot be identified from these screenshots. No font download is required by this plan.

**Inferred navigation:** home -> host sign-in -> host workspace -> quiz editor or three-step room creation -> lobby -> question -> question results -> ranking -> subsequent question/final results. Only visual destinations and controls are evidenced; exact routes, guards, and transition behavior are proposed. The home join action implies a missing guest entry flow. Sidebar destinations Resumen, Biblioteca de juegos, Mis partidas, and Configuración are labels only; their screens are not supplied. A moon icon does not establish complete theme-switching behavior.

## 4. Approximate design tokens

All values below are **proposed starting estimates from visual inspection**, not sampled original tokens or verified CSS. Apparent sizes differ between captures. Validate and adjust against the reference at comparable viewports before approval.

| Proposed CSS variable or scale | Approximate starting value | Visual role |
| --- | --- | --- |
| `--color-primary` | `#2563eb` | Main actions and active controls. |
| `--color-primary-soft` | `#dbeafe` | Selected navigation and icon tiles. |
| `--color-text` | `#172554` | Light-surface headings and body emphasis. |
| `--color-text-muted` | `#71829b` | Descriptions and metadata. |
| `--color-background` / `--color-surface` | `#f7f9fc` / `#ffffff` | Light page and card surfaces. |
| `--color-border` | `#dce4ef` | Dividers and control borders. |
| `--color-game-background` / `--color-game-surface` | `#111d43` / `#243158` | Gameplay background and participant cards. |
| `--color-game-accent` | `#60a5fa` | Timer ring and game labels. |
| `--color-answer-a` / `--color-answer-b` | `#dc4858` / `#2d6bd6` | Red and blue answer identities. |
| `--color-answer-c` / `--color-answer-d` | `#dc980e` / `#159763` | Amber and green answer identities. |
| `--color-success` / `--color-success-soft` | `#16a34a` / `#dcfce7` | Correctness and connected states. |
| `--color-feature-start` / `--color-feature-end` | `#2249df` / `#4338ca` | Featured quiz gradient. |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64 px | Proposed rhythm; broad desktop section gaps may exceed this. |
| Corner radii | 10-16 px controls/cards; 20-28 px feature cards; fully round badges/avatars | Match relative softness. |
| Type scale | 14-18 px normal UI; 28-40 px section titles; 48-72 px desktop hero | Approximate rendered targets; metadata must remain readable on mobile. |
| Font stack | System sans-serif initially | Similar visual character without claiming the original family. |
| Layout widths | Public content roughly 1100-1500 px; wizard roughly 750 px; sidebar roughly 230-280 px | Flexible maximum widths, not fixed screenshot coordinates. |
| Shadow | Subtle cool shadow for primary actions; broader soft hero shadow | Exact blur, offset, and opacity unknown. |

Use semantic tokens so answer colors remain distinct from correctness: option D being green must not imply it is correct. Keep letters, text, icons, and selection borders; check contrast and keyboard focus during implementation. Do not reproduce tiny screenshot metadata at unreadable sizes.

## 5. Proposed reusable component architecture

| Area | Components | Reference or justification |
| --- | --- | --- |
| Shared UI | `Button`, `IconButton`, `Card`, `Badge`, `Avatar`, `TextField`, `TextArea`, `SelectField`, `Toggle`, `SearchField`, `Modal`, `StatusMessage` | Repeated screenshot patterns; modal/error/focus behavior must be newly designed. |
| Layout | `AppLayout`, `PublicHeader`, `PublicFooter`, `HostLayout`, `NavigationSidebar`, `Breadcrumbs`, `GameLayout`, `ConnectionStatus` | Distinct public, host, wizard, and gameplay shells. |
| Home | `HomeHero`, `GamePreviewIllustration`, `HowItWorks`, `GameCard` | 01-04; recreate illustration as interface/CSS/SVG composition later, not as screenshot content. |
| Host access | `HostSignInForm`, `HostDashboard` | Missing screens using existing form/card vocabulary; authentication mechanism remains pending. |
| Quizzes | `QuizCard`, `QuizFilters`, `QuizEditor`, `QuestionList`, `QuestionEditor`, `AnswerOptionEditor`, `QuizSettings`, `PlayerPreview` | 05-06. Preview shares display primitives, not duplicated game rules. |
| Room creation | `CreateGameWizard`, `StepIndicator`, `GameModeSelector`, `QuizSelector`, `RoomSettings` | 07-09. Add approved scoring/global-time controls. |
| Participation | `JoinRoomForm`, `RoomLobby`, `RoomCodeDisplay`, `PlayerList`, `PlayerCard` | Lobby observed in 10; guest form/player waiting view missing. |
| Gameplay | `QuestionDisplay`, `AnswerOption`, `QuestionTimer`, `QuestionProgress`, `ResponseCounter`, `HostGameControls` | 11-12. Share layout primitives but enforce host/player separation. |
| Results | `QuestionResults`, `AnswerDistribution`, `Scoreboard`, `Leaderboard`, `Podium`, `GameResults` | 13-14; full intermediate/all-player ranking missing. |
| Continuity | `ReconnectionNotice`, `HostElectionModal`, `VotingPanel`, `PausedGameNotice` | Required new states, not observed. Use existing colors/cards/buttons and accessible dialog behavior. |

Planned frontend structure (the initial implementation creates only modules needed for the authorized screens):

```text
apps/web/src/
  app/                 # Application composition and routing
  components/
    ui/                # Shared visual primitives
    layout/            # Public, host, and game shells
  features/
    home/
    host-auth/
    host-dashboard/
    quizzes/
    room-setup/
    rooms/
    gameplay/
    results/
    host-election/
  hooks/               # Shared connection and responsive behavior
  services/            # HTTP and Socket.IO client boundaries
  styles/              # Tokens, base styles, layout utilities
  locales/
    es/                # Spanish interface messages
```

Feature-local components stay with their feature; only reusable primitives belong in shared folders. Future `apps/server/` contains Express/Socket.IO and SQLite access; future `packages/shared/` contains transport contracts and common types. Never expose answer keys through player contracts before results. State, permissions, scores, deadlines, and elections must be validated by the server; visual state is not authority. This modular split does not require microservices or a visual dependency library.

## 6. Requirement-to-reference comparison

| Current requirement | Screenshot evidence | Reconstruction or addition |
| --- | --- | --- |
| Host authentication | Sign-in link and host profile only, 01/05 | Add sign-in, validation/session-expired states, protected workspace. Account provisioning and recovery remain undefined. |
| Quiz management | Cards/search/actions, 05 | Rebuild layout; implement actual ownership, loading, empty/error states later. |
| Question creation/editing and multiple choice | Editor, 06 | Rebuild prompt/options/correctness/explanation/reference; limits and save behavior need definition. |
| Unique room code | Display/copy/share, 10 | Add generation/collision handling on server; sample length is not a confirmed code policy. |
| Up to 20 players | Examples show 24 and 2-100, 01/03/04/07/11/13/14 | Replace incompatible copy/counts; enforce 20 on server and display room-full feedback. Minimum count not established. |
| Guest access by code and name | Join CTA/no-account copy, 01/03 | Add form, invalid/closed/full-room errors and guest identity recovery. |
| Multiplayer waiting room | Six players and start action, 10 | Rebuild host view; add player waiting state and connection updates. Ready labels do not establish a readiness rule. |
| Real-time quiz and individual answers | Question and selection states, 11-12; phone illustrations, 01/06 | Implement synchronized server state; dedicated mobile player flow is missing. Host-only actions must not reach player controls. |
| Fixed or speed-based scoring | Points selector, 06; points/average time, 13 | Add explicit scoring-mode choice. Formulas and fixed amount cannot be inferred. |
| Common timer duration for all questions | Timer, 11-12; question-side time setting, 06 | Place duration in shared quiz/session configuration rather than independent question overrides. Propose room setup as the single editing location; confirm scope. |
| Results and ranking | Distribution, 13; podium, 14 | Rebuild results and add intermediate/full ranking for up to 20 players. |
| Host transfer by vote | None | Add election UI and authoritative role transfer. |
| Reconnection wait: 30 seconds | None | Add countdown and interruption state. |
| Election duration: 15 seconds | None | Add candidate list, voting action, acknowledgement, and server deadline. |
| Tie resolved by original join order | None | Preserve original join index on server; explain outcome in UI. This rule applies to election ties; score ties remain undefined. |
| No votes keeps game paused | None | Add paused notice and explain that play has not resumed; recovery/retry action requires definition. |

Visible team play, future modes, randomization, late joining, autosave, notification badges, avatars suggesting collaboration, and replay controls are not automatically approved functionality. Keep optional elements nonfunctional/clearly upcoming or seek scope definition before implementation. Never introduce deception mechanics. Screenshot counts, domain `jw-app.com`, timestamps, scores, and footer date are prototype examples, not real data or authorized infrastructure.

## 7. Missing screens and states

- Host sign-in and authentication errors; host dashboard summary.
- Guest code/name entry, invalid/expired/full room, duplicate-name handling, player lobby.
- Dedicated mobile player question/submitted/waiting/correct/incorrect/timed-out states.
- Shared timer/scoring-mode configuration and validation.
- Intermediate leaderboard and full final ranking beyond the podium.
- Host disconnect and 30-second reconnect countdown; 15-second election; tied-election outcome; successful transfer; paused state with no votes.
- Loading/empty/error states, connection loss, session closure, save failures, and destructive-action confirmation where appropriate.
- Actual mobile/tablet layouts and accessible focus/keyboard states.

These additions are justified by requirements and usability gaps. They must reuse the reference vocabulary rather than establish a different visual identity. No modal layout is supplied, so `HostElectionModal` is explicitly a proposal.

## 8. Proposed responsive strategy

All supplied captures are desktop compositions; phone drawings/previews are not full mobile screenshots. The following behavior is proposed, not observed:

- Use fluid containers, wrapping text, and content-driven breakpoints; trial boundaries around 640, 960, and 1280 px are implementation candidates, not recovered Figma values.
- Stack hero text/illustration on narrow screens; wrap calls to action and replace wide public navigation with a compact accessible menu.
- Collapse the host sidebar to a drawer; reduce quiz grids from three to two to one column.
- Turn the editor's question list/settings into accessible panels or tabs on small screens; keep the active question primary and place preview behind an explicit action.
- Compress the wizard indicator while preserving current-step text; keep forms and footer actions within the viewport.
- Stack lobby code and participant area; let up to 20 cards flow without horizontal clipping. Prevent bottom actions from obscuring content.
- Preserve the 2x2 answer grid when text/touch targets fit; use one column on narrow screens or for long answers. Keep timer/question/status readable and avoid fixed heights.
- Reflow result statistics; keep the podium recognizable and provide a readable ordered ranking below it.
- Aim for at least 44 px touch targets, visible focus, non-color state cues, reduced-motion support, and scrollable dialogs with managed focus. These are proposed quality targets.

## 9. Recommended implementation order after approval

1. Record approved stack/rules, resolve role/election ambiguities, and approve missing-screen sketches using the reference style.
2. Create CSS tokens, accessible UI primitives, layout shells, and home page; compare desktop compositions and narrow widths.
3. Build host authentication/workspace and quiz management/editor; connect approved persistence and validation.
4. Build creation wizard, guest entry, 20-player lobby, and connection states with server-validated permissions.
5. Add real-time questions, shared deadlines, answer acknowledgements, fixed/speed scoring, and role-specific controls.
6. Add question results, intermediate/full ranking, and final podium.
7. Add host reconnection/election/pause flows; verify ties, no votes, return of old host, and repeated disconnects.
8. Validate complete sessions on real phones and desktop, separate rooms, 20-player capacity, keyboard use, and visual consistency; update English technical documentation.

Visual reconstruction and multiplayer correctness need separate checks. A matching screenshot cannot validate network behavior. The original analysis introduced no code or dependencies. The subsequently authorized initial phase adds local code and required dependencies; deployment, paid services, and screenshot edits remain excluded.

## 10. Risks and unresolved information

- Exact font family, CSS sizes, colors, tokens, source assets, icon set, DOM, animations, and breakpoint rules are unavailable. Approximate tokens are reconstruction proposals.
- Screenshots may differ in zoom and crop. The host lobby right edge is clipped; do not reproduce clipping as intended layout.
- Selection and host controls coexist in 12. Separate player interaction from privileged host actions; do not infer permissions from visibility.
- Images cannot prove synchronization, authentication, persistence, clipboard/share behavior, save semantics, or navigation.
- Host authentication method, account creation, password recovery, quiz ownership after temporary host transfer, and transferred permissions need definition. Session hosting must not implicitly grant access to the original host's private account or quiz library.
- Election rules fix 30-second wait, 15-second vote, original-entry-order tie resolution, and pause on no votes. Candidate eligibility, self-voting, changing votes, disconnected voters, old-host return, exact pause timing, and restarting a no-vote election remain pending. Original join order must survive reconnection.
- The common question duration's numeric value, pause/resume clock handling, scoring formula, answer-change policy, score ties, and progression controls are unresolved. The 20-second/1000-point examples do not establish defaults.
- Capacity treatment of the host and disconnected/reconnecting players, room-code policy, late joins, session retention, and content permissions remain pending.
- A local implementation can cover every visual flow and same-network multiplayer. Remote Internet access needs separately authorized infrastructure; no provider, domain, or free hosting guarantee is implied.


## 11. Initial reconstruction implementation

Implemented home sections from references 01?04 and a host workspace skeleton from 05, with mock data, reusable buttons/cards/inputs, inline SVG icons, and CSS-built device artwork. Values in `apps/web/src/styles/styles.css` are estimated, including colors, font stack, spacing, and the 640/960/1200/1600 px breakpoints; they are not recovered Figma tokens. Original screenshots are unchanged. Proposed small-screen adaptations stack the hero/cards and expose expandable public/host navigation. Unavailable actions are disabled and the workspace identifies example content. No theme toggle is offered because a complete alternate theme is not part of this phase.

Visual browser comparison across viewports remains a separate manual acceptance check; successful HTTP responses and builds alone do not prove pixel fidelity or mobile usability. See README.md at the repository root for preview instructions.
