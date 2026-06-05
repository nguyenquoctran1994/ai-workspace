# Blueprint Workflow Guide

This is a short index of local Blueprint workflows for common Codex tasks. Use the smallest applicable workflow, and avoid `spec` or `plan` for tiny tasks unless requested.

Follow the shared `AGENTS.md` for safety, scope, verification, git discipline, and output style. Brand or project-specific rules belong in each project root `AGENTS.md` and `RULES.md`, not in the shared workspace `AGENTS.md` or Blueprint skills.

Blueprint skills are installed locally in:

```text
.agents/skills/
```

Each skill lives in its own folder and includes a `SKILL.md` file with the workflow instructions for that task.

If Codex does not auto-load skills in the current session, read only the relevant local `SKILL.md` file before using that workflow. For example, use `.agents/skills/implement/SKILL.md` for implementation tasks or `.agents/skills/review/SKILL.md` for review tasks.

## Workflow Table

| Task type | Recommended Blueprint workflow |
| --- | --- |
| Small text/code change | `implement` -> `review` |
| Landing page or website feature | `spec` -> `plan` -> `implement` -> `review` |
| Large automation / AI workflow | `design-doc` -> `spec` -> `plan` -> `implement` -> `review` |
| Refactoring existing code | `refactor` -> `review` |
| Test-first coding | `tdd` -> `implement` -> `review` |
| Git workflow | `branch` -> `implement` -> `review` -> `commit` |
| GitHub PR feedback | `address-pr-feedback` only when the user explicitly asks |

Use `browser-verify` only when the active workflow and `AGENTS.md` call for browser checks.

## Example Prompts

Use `spec` for a landing page feature:

```text
Use spec to define a new landing page testimonial section before implementation.
```

Use `plan` based on a spec:

```text
Use plan to break docs/my-feature/spec.md into implementation tasks.
```

Use `implement` for one task only:

```text
Use implement to add the FAQ accordion from the current plan. Only complete that one task.
```

Use `review` on current diff:

```text
Use review on the current diff and report bugs, risks, or missing tests.
```

Use `refactor` without changing behavior:

```text
Use refactor to simplify this component without changing behavior or UI.
```

Use `design-doc` before building a large automation:

```text
Use design-doc before building the weekly content automation workflow.
```

## Default

For consequential features, use:

```text
spec -> plan -> implement one task -> review
```

For tiny tasks, use:

```text
inspect target files -> implement -> verify only what matters -> report
```
