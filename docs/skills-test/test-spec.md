# Test Spec: README Onboarding Checklist

## What

Add a simple README checklist for project onboarding. This is a fake feature used only to verify that the Blueprint `spec`, `plan`, and `review` skills are usable in this project.

## Context

The project contains multiple business areas and agent-related files. A small onboarding checklist would give a new contributor a quick, visible set of first steps before changing project files. For this test, no real README or business project files will be modified.

## Requirements

- The checklist should be short enough to scan quickly.
- The checklist should cover reading project instructions, checking the current branch, reviewing existing skills, and avoiding unrelated cleanup.
- The checklist should live in a README-style markdown document when implemented for real.
- The implementation must not modify CHILLAB, HUONG, WEEN, or backup files unless a future task explicitly asks for that.
- The implementation must not commit automatically.

## Design

For a real implementation, add a markdown checklist section to the chosen README file in the relevant project root. The checklist should use standard markdown task-list syntax and avoid project-specific assumptions that are not already documented.

Potential checklist:

```markdown
## Onboarding Checklist

- [ ] Read `AGENTS.md` and any project-specific instructions.
- [ ] Check `git status` before editing.
- [ ] Review available skills with `npx skills list`.
- [ ] Make one focused change at a time.
- [ ] Verify changes before committing.
```

## Decisions

- Choice: keep the checklist in markdown rather than a separate script or automation.
- Alternatives considered: a setup script or issue template.
- Why: the fake feature is documentation-only and should stay lightweight.
- Reversible: yes, the checklist can be moved or removed later.

Assumption: the final target README would be selected by a human before implementation.

## Invariants

- Do not touch business project folders during this skill usability test.
- Do not modify existing custom skills.
- Do not run browser verification or PR-feedback workflows for this test.

## Testing Strategy

- Confirm the markdown renders as a readable checklist.
- Confirm only the intended documentation file changes.
- Run `git status --short -- docs/skills-test` during this test to verify scope.

## Out of Scope

- Updating real README files.
- Editing CHILLAB, HUONG, WEEN, or backup content.
- Committing changes.
- Running browser-based verification.
