# AGENTS.md

# WEEN JAPAN AI WORK RULES

## PROJECT_OVERVIEW

WEEN is a Japanese-inspired wellness and growth support platform.

Primary goals:

- build trust with parents
- emotionally motivate teenagers
- maintain premium wellness positioning
- support scalable AI-assisted systems

---

## REQUIRED_CONTEXT

Before generating or editing code, always read:

- 01_BRAND_DNA/brand_positioning.md
- 01_BRAND_DNA/forbidden_rules.md
- 02_PRODUCT_SYSTEM/product_logic.md
- 03_UI_DESIGN_SYSTEM/ui_system.md
- 05_APP_TRACKING/tracking_logic.md

---

## WORK_STYLE

- Prefer reusable components first
- Avoid unnecessary packages
- Keep code beginner-friendly
- Preserve existing architecture
- Mobile-first always
- Build lean MVP first
- Prefer scalable systems
- Reuse before rebuilding

---

## OUTPUT_STYLE

- Make direct edits
- Explain only what changed
- Avoid unnecessary theory
- Avoid excessive abstraction
- If uncertain, choose safest MVP assumption

---

## ENGINEERING_RULES

Preferred stack:

- React
- TypeScript
- TailwindCSS

Preferred architecture:

- modular folders
- reusable sections
- scalable components
- API-first structure

Avoid:

- duplicated logic
- deeply nested state
- unnecessary dependencies
- premature optimization

---

## TOKEN_SAVING_TERMINAL_RULES

When inspecting the repository, prefer RTK commands to reduce wasted tokens and rate-limit usage.

Use RTK for common terminal checks:

- Use `rtk ls .` instead of raw `ls -la` when listing folders.
- Use `rtk read <file>` instead of dumping large files directly.
- Use `rtk grep "<keyword>" .` instead of raw `grep` / `rg` when searching the repo.
- Use `rtk git status` instead of raw `git status`.
- Use `rtk git diff` instead of raw `git diff`.
- Use `rtk npm test`, `rtk npm run build`, or `rtk test <command>` when running tests/builds with long output.
- Use `rtk docker ps` or related RTK-wrapped Docker commands when checking Docker output.

Avoid dumping long command output into the agent context. Prefer compact summaries and only expand full logs when debugging requires it.

For Codex, remember that RTK integration is instruction-based through `AGENTS.md` / `RTK.md`, so agents should intentionally choose RTK-prefixed commands during repository exploration.

---

## DESIGN_RULES

UI should feel:

- calm
- premium
- biotech-inspired
- trustworthy
- minimal

Avoid:

- gaming aesthetics
- crypto visuals
- cluttered layouts
- excessive gradients

---

## CONTENT_RULES

Content should:

- educate first
- build trust
- avoid exaggerated claims
- maintain premium positioning

Avoid:

- cringe marketing
- fake urgency
- unrealistic promises

---

## AGENT_BEHAVIOR

Agents should:

- read existing files before generating new systems
- preserve design consistency
- avoid duplicating components
- optimize for maintainability
- prioritize readability over cleverness
