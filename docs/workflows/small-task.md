# Small Task Workflow

Purpose: use this for small edits, docs updates, config changes, prompt updates, and simple fixes.

## When To Use

- The task affects one or a few known files.
- The desired change is clear.
- No design decision, migration, or multi-step feature plan is needed.
- Verification can be small and targeted.

## Files To Read First

- `AGENTS.md`
- The exact target files named in the prompt
- Relevant nearby docs or tests only if the target file depends on them

## Safe Process

1. Read `AGENTS.md`.
2. Check git status with `git status --short --untracked-files=all`.
3. Inspect only relevant files.
4. Make the smallest safe change.
5. Show changed files.
6. Show risks.
7. Do not commit unless explicitly asked.

## Example Codex Prompt

```text
Read AGENTS.md first. Use the small-task workflow. Update only docs/example.md to clarify the setup steps. Do not edit other files, stage, commit, or push. Respond using the default final response format.
```
