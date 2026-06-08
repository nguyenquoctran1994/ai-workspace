# Landing Page Workflow

Purpose: use this for HUONG/WEEN landing page edits or similar web app tasks.

## When To Use

- The task changes landing page copy, layout, components, styling, forms, or frontend behavior.
- The task belongs to HUONG, WEEN, or a similar web app project.
- UI verification or a local build may be useful.

## Files To Read First

- `AGENTS.md`
- Relevant `docs/projects/*.md` bridge doc
- The active project `AGENTS.md` or `RULES.md` only when the exact project path is provided
- The exact page, component, style, spec, or task files involved

## Safe Process

1. Read `AGENTS.md`.
2. Read relevant `docs/projects/*.md`.
3. Check git status with `git status --short --untracked-files=all`.
4. Create or update a spec if needed.
5. Create a plan.
6. Implement one task at a time.
7. Run a local check or build if available.
8. Browser verify if UI changed.
9. Report changed files and risks.

## External Asset Rules

- Do not touch external assets unless an exact file path is provided.
- Do not scan external media folders deeply.
- Do not open image or video files unless the user explicitly asks for that exact file.
- Keep product photos, packaging images, raw media, exports, and backups outside GitHub unless explicitly approved.

## Example Codex Prompt

```text
Read AGENTS.md first. Use docs/workflows/landing-page.md. Update the HUONG landing page hero copy only. Read docs/projects/HUONG.md first, inspect only relevant page files, run the available local check, and do not stage, commit, or push.
```
