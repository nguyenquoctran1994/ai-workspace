# AI Workspace Agent Instructions

## Scope

This workspace contains shared AI workflow rules and core reusable development workflows.

This file must remain project-neutral. Do not place WEEN JAPAN, CHILLAB, HUONG, or other project-specific brand, content, product, media, or business rules here.

Project-specific rules belong in each project root `AGENTS.md` and `RULES.md`.

## Core Workflow

Use the lightest workflow that fits the task:

- Tiny task: inspect only the target files -> implement -> verify only what matters -> report
- Feature or landing page: spec -> plan -> implement one task -> review
- Refactor: inspect the affected code -> refactor -> verify behavior -> review
- Test-first task: tdd -> implement -> verify
- Git task: branch -> implement -> review -> commit only when approved
- PR feedback: address-pr-feedback only when explicitly requested

Do not overuse spec or plan for tiny tasks.

## Required Reading

Read narrowly by default. Inspect only files that are explicitly named, directly imported, directly linked, or clearly required by the task.

Always prefer `C:\Users\ADMIN\Documents\PROJECTS\ai-workspace` as the working directory for shared workspace tasks.

Never use `C:\Users\ADMIN\Documents\PROJECTS` as the working directory.

Before editing, read the smallest useful set from:

- the active project root `AGENTS.md`
- the active project root `RULES.md`, if present
- directly relevant specs, docs, tasks, source files, or tests

Do not scan the full repo unless the user explicitly asks for a repo-wide audit or search.

Do not inspect `node_modules`, `dist`, `build`, cache folders, generated output, large assets, or media files unless the task specifically requires them.

Use `docs/projects/*.md` as project bridge docs for external project orientation.

Treat `CHILLAB`, `HUONG`, `WEEN_JAPAN`, `OLD_BACKUP_WEEN_JAPAN`, media, exports, backups, and archives as external references by default.

Do not scan external folders deeply.

If an external resource is needed, ask for the exact file path and open only that file.

## File Safety

Do not move, rename, delete, archive, reorganize, or clean up files unless explicitly requested.

Do not modify business-critical data, secrets, credentials, production exports, source media, or live operational files without explicit approval.

Do not touch unrelated project folders.

Do not open media or asset files unless the task is about media/assets or the user explicitly asks.

Work on samples, drafts, copies, or approved target files when risk is high.

## Implementation Rules

Prefer existing project patterns and local helpers.

Keep changes focused and reviewable.

Avoid unnecessary dependencies, broad rewrites, unrelated refactors, and duplicate systems.

Preserve public behavior unless the user asks for a behavior change.

## Testing And Verification

Run the minimum relevant checks that match the change.

Docs-only changes do not need builds, dev servers, browser verification, or app tests unless the user asks.

For code changes, prefer available tests, linting, type checks, builds, or targeted manual verification.

For UI changes, use browser verification when appropriate and approved by the workflow.

If verification cannot run, report why.

For review tasks, inspect the current git diff only unless the user asks for a broader audit.

## Reporting

Keep output short. Every task should report only:

- changed files
- verification result
- assumptions
- risks
- next recommended step

If no files changed, say that clearly.

## Default Final Response Format

At the end of every task, always respond using this format:

```text
STATUS:
Run and paste:
git status --short --untracked-files=all

COMMITS:
If commits were created, paste:
git log --oneline -3
If no commits were created, write:
No commits created.

CHANGED FILES:
List changed files only.

SUMMARY:
Give 3-5 concise bullets explaining what changed.

RISKS:
List only real risks or write:
None.

PUSH:
Say whether push was done or not.
```

If the task includes git changes, never omit STATUS, CHANGED FILES, RISKS, and PUSH.

## Git Discipline

Ask before staging, committing, pushing, publishing, deploying, opening pull requests, or syncing external systems.

Do not stage unrelated files.

Do not commit secrets, raw media, business exports, credentials, or private data.

Respect existing user changes in the working tree.
