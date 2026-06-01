# Blueprint Workflow Guide

This workspace uses Blueprint skills as local, practical workflows for common Codex tasks. Blueprint skills are installed locally in:

```text
.agents/skills/
```

Each skill lives in its own folder and includes a `SKILL.md` file with the workflow instructions for that task.

If Codex does not auto-load skills in the current session, read the relevant local `SKILL.md` file directly before using that workflow. For example, use `.agents/skills/implement/SKILL.md` for implementation tasks or `.agents/skills/review/SKILL.md` for review tasks.

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

For landing page or website features, `browser-verify` is optional and should only be used after the user confirms.

## Safe Usage Rules

- Do not use `spec` or `plan` for tiny tasks unless requested.
- Do not edit unrelated project folders.
- Do not touch media/assets unless the task requires it.
- Do not use `browser-verify` without confirmation.
- Do not use `address-pr-feedback` without confirmation.
- Always report files changed.
- Always keep business brand context in `AGENTS.md`, not inside Blueprint skills.

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

## Recommended Default Workflow

For most business projects, use:

```text
spec -> plan -> implement one task -> review
```
