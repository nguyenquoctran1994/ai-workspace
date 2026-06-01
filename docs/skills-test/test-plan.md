# Test Plan: README Onboarding Checklist

Source spec: `docs/skills-test/test-spec.md`

## Shared Decisions

The implementation should be documentation-only. A human should choose the real README target before any real project file is edited.

## Task 1: Choose The README Target

### Goal

Identify the README file that should receive the onboarding checklist in a real implementation.

### Context

The workspace has multiple project areas and instruction files. Choosing the wrong README could make onboarding instructions appear in the wrong scope.

### Relevant Files Or References

- `AGENTS.md`
- `MASTER.md`
- any README file in the intended project root

### Proposed Approach

Inspect only markdown/config files in the selected project area. Pick the README closest to the intended audience and avoid backup or duplicate folders.

### Acceptance Criteria

- A single README target is identified.
- The selected README belongs to the intended project scope.
- No business content is edited during selection.

### Source Reference

`docs/skills-test/test-spec.md`, sections "Context" and "Decisions".

### Verify

Run:

```powershell
git status --short
```

Confirm no files changed during target selection.

## Task 2: Add The Checklist

### Goal

Add a short onboarding checklist to the selected README.

### Context

The checklist should help a contributor start safely without changing unrelated project files.

### Relevant Files Or References

- the selected README file
- `AGENTS.md`
- `npx skills list`

### Proposed Approach

Add a concise `## Onboarding Checklist` section using markdown task-list syntax. Keep the wording general and avoid references to folders outside the selected project scope.

### Acceptance Criteria

- The README includes a readable onboarding checklist.
- The checklist mentions reading instructions, checking git status, reviewing skills, keeping changes focused, and verifying work.
- No CHILLAB, HUONG, WEEN, or backup files are changed unless they are the explicitly selected scope in a future task.

### Source Reference

`docs/skills-test/test-spec.md`, sections "Requirements" and "Design".

### Verify

Run:

```powershell
git diff --check -- <selected-readme>
git diff -- <selected-readme>
```

Confirm the diff only adds the intended checklist.

## Task 3: Review The Documentation Change

### Goal

Review the README checklist for clarity, scope, and accidental project impact.

### Context

The feature is documentation-only, so review should focus on whether the checklist is accurate, scoped, and easy to follow.

### Relevant Files Or References

- the selected README file
- `docs/skills-test/test-spec.md`

### Proposed Approach

Review only the README diff against the approved spec. Do not review unrelated workspace changes.

### Acceptance Criteria

- The review identifies any confusing or unsafe wording.
- The review confirms whether only the intended README changed.
- The review does not request unrelated cleanup.

### Source Reference

`docs/skills-test/test-spec.md`, sections "Invariants" and "Testing Strategy".

### Verify

Run:

```powershell
git status --short -- <selected-readme>
```

Confirm the review scope is limited to the selected README.
