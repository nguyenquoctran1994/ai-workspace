# AI Workspace Next Steps Audit

Date: 2026-06-09

Scope: `C:\Users\ADMIN\Documents\PROJECTS\ai-workspace`

This audit used only safe inspection: folder names, file names, file sizes, lightweight markdown/text docs, and top-level external project names. No media, archives, `.git`, `node_modules`, build output, or deep parent-folder scans were opened.

## Current Situation Summary

`ai-workspace` is a small shared AI workflow repository. It currently contains:

- Root rules and orientation: `AGENTS.md`, `README.md`, `MASTER.md`, `.gitignore`, `skills-lock.json`
- Shared docs: `docs/CHILLAB-reference.md`, `docs/HUONG-reference.md`
- Workflow guidance: `docs/skills/blueprint-workflow-guide.md`
- Test docs: `docs/skills-test/test-plan.md`, `docs/skills-test/test-spec.md`
- Local reusable agent skills under `.agents/skills/`
- A project-specific `WEEN_JAPAN/` folder inside the workspace, including docs, assets, legal docs, social posts, and a landing page app

The current `AGENTS.md` is already strong on narrow reading, avoiding media/assets, protecting unrelated folders, and requiring permission before git actions. It is intentionally project-neutral.

The parent `PROJECTS` folder top level contains:

- `ai-workspace`
- `CHILLAB`
- `HUONG`
- `docs`
- `MASTER.md`
- `OLD_BACKUP_WEEN_JAPAN`

The expected external path `C:\Users\ADMIN\Documents\PROJECTS\WEEN_JAPAN` was not present in the safe top-level check. WEEN material appears to exist inside `ai-workspace/WEEN_JAPAN` and as `OLD_BACKUP_WEEN_JAPAN` in the parent folder.

## Safety Risks

- `ai-workspace/WEEN_JAPAN/` mixes project-specific business files, assets, legal docs, social posts, and app code into the shared workflow repo.
- `.gitignore` ignores common media files but explicitly unignores selected WEEN package/logo PNG files, which makes accidental brand asset commits possible.
- Parent `PROJECTS` includes real project asset folders and backups; scanning it broadly would waste resources and risk exposing media, exports, and duplicated archives.
- `CHILLAB` has obvious high-risk operational/media/archive folders: `_CAN_PHAN_LOAI`, `_DUPLICATES`, `07_MEDIA_ASSETS`, `08_FINANCE_REPORTS`, `OLD_UNORGANIZED_BACKUP`.
- `HUONG` has product/media folders and large top-level PNG files, plus multiple landing page/material folders that look duplicated or versioned.
- `OLD_BACKUP_WEEN_JAPAN` should be treated as backup/archive material and kept outside GitHub unless intentionally curated.
- There is no dedicated audit report yet that tells future agents exactly what to avoid.

## What AGENTS.md Is Missing

Current protections already cover:

- Narrow reads by default
- Avoiding full repo scans unless requested
- Avoiding `node_modules`, build output, cache folders, generated output, large assets, and media
- Avoiding unrelated project folders
- No move/rename/delete/archive/reorganize unless requested
- No business-critical data, secrets, production exports, source media, or live operational files without approval
- No staging, committing, pushing, publishing, deploying, or syncing without permission

Recommended additions:

- Explicitly say not to scan the parent `C:\Users\ADMIN\Documents\PROJECTS` folder except top-level names unless requested.
- Explicitly say CHILLAB, HUONG, WEEN, backups, exports, and media folders are external references unless the active task targets them.
- Explicitly forbid opening image, video, archive, backup, raw media, and export files during audits unless requested.
- Add a rule that project-specific folders should be documented through bridge docs and not copied into `ai-workspace`.
- Add a rule to prefer `docs/projects/*.md` bridge files for external project orientation.
- Add a rule that resource-saving audits should inspect names, sizes, and lightweight docs before any content scan.

## Recommended Final Folder Structure

Recommended `ai-workspace` shape:

```text
ai-workspace/
  AGENTS.md
  README.md
  MASTER.md
  .gitignore
  skills-lock.json
  .agents/
    skills/
  docs/
    audits/
      ai-workspace-next-steps.md
      projects-folder-audit.md
    projects/
      CHILLAB.md
      HUONG.md
      WEEN.md
    skills/
      blueprint-workflow-guide.md
    workflows/
      small-task.md
      landing-page.md
      automation.md
```

Recommended external project shape:

```text
PROJECTS/
  ai-workspace/
  CHILLAB/
  HUONG/
  WEEN_JAPAN/              # only if restored or intentionally created outside ai-workspace
  OLD_BACKUP_WEEN_JAPAN/   # archive/reference only, not GitHub
```

`ai-workspace/WEEN_JAPAN/` should eventually be moved out of the shared workspace only after a separate, explicit, careful migration plan. Do not move it during this audit phase.

## Project Bridge Docs Needed

Recommended:

- `docs/projects/CHILLAB.md`
- `docs/projects/HUONG.md`
- `docs/projects/WEEN.md`

Purpose:

- Record real external path
- Record safe entry files such as `README.md`, `AGENTS.md`, or `RULES.md`
- Record forbidden folders and file types
- Record which project-specific skills apply
- Tell Codex whether to read docs, app code, media, or business files for each task type

Existing `docs/CHILLAB-reference.md` and `docs/HUONG-reference.md` can be folded into the new `docs/projects/` bridge structure later. They are useful and should not be deleted yet.

WEEN needs a bridge doc most urgently because WEEN currently appears inside `ai-workspace` rather than as a separate top-level external project folder.

## Workflow Docs Needed

Recommended:

- `docs/workflows/small-task.md`
- `docs/workflows/landing-page.md`
- `docs/workflows/automation.md`

Purpose:

- `small-task.md`: exact minimal inspect-edit-verify-report flow for tiny edits.
- `landing-page.md`: safe sequence for spec, plan, implementation, browser verification, and review.
- `automation.md`: resource-safe design flow before building recurring automations, monitors, or AI workflows.

These should summarize the existing `.agents/skills/*` workflows rather than duplicate every detail.

## .gitignore Recommendations

Recommended updates for a later task:

- Ignore project asset folders by default:
  - `WEEN_JAPAN/assets/`
  - `WEEN_JAPAN/legal_docs/`
  - `WEEN_JAPAN/social_posts/`
- Remove or reconsider the current PNG allowlist exceptions for WEEN package/logo assets.
- Add explicit backup/archive patterns:
  - `OLD_BACKUP*/`
  - `*_BACKUP*/`
  - `**/backups/`
  - `**/exports/`
- Add broad private/business file guardrails:
  - `*.pdf`
  - `*.xlsx`
  - `*.xls`
  - `*.docx`
  - `*.pptx`
- Consider allowing only curated sample docs if needed, using explicit negation patterns.

Do not change `.gitignore` until the desired GitHub contents of `WEEN_JAPAN/` are decided.

## Next 10 Safe Actions

1. Review this report and confirm whether `ai-workspace/WEEN_JAPAN/` should remain temporarily or be migrated later.
2. Update `AGENTS.md` with explicit parent-folder and external-project scanning limits.
3. Create `docs/projects/CHILLAB.md` from the existing CHILLAB reference doc.
4. Create `docs/projects/HUONG.md` from the existing HUONG reference doc.
5. Create `docs/projects/WEEN.md` documenting the current WEEN location and migration risk.
6. Create `docs/workflows/small-task.md`.
7. Create `docs/workflows/landing-page.md`.
8. Create `docs/workflows/automation.md`.
9. Create `docs/audits/projects-folder-audit.md` using only top-level names and risk categories.
10. Review `.gitignore` after deciding whether any WEEN assets belong in GitHub.

## Exact Prompts I Should Use Next

Use this prompt to update `AGENTS.md` safely:

```text
Read AGENTS.md first. Update only AGENTS.md to add explicit rules that Codex must not scan the parent PROJECTS folder deeply, must treat CHILLAB/HUONG/WEEN and backup folders as external references, must not open media/archive/export files during audits, and must use docs/projects bridge docs for project orientation. Do not modify any other files. Show diff and git status only.
```

Use this prompt to create project bridge docs:

```text
Read AGENTS.md first. Create docs/projects/CHILLAB.md, docs/projects/HUONG.md, and docs/projects/WEEN.md as bridge docs only. Use existing lightweight reference docs and top-level folder names only. Do not scan media, archives, backups, app build folders, node_modules, or .git. Do not modify external project folders.
```

Use this prompt to create workflow docs:

```text
Read AGENTS.md first. Create docs/workflows/small-task.md, docs/workflows/landing-page.md, and docs/workflows/automation.md. Summarize existing AGENTS.md and .agents/skills workflows without duplicating long skill content. Do not modify code or external project folders.
```

Use this prompt to audit `.gitignore`:

```text
Read AGENTS.md first. Review .gitignore and recommend exact changes to prevent accidental commits of media, backups, exports, business documents, and project-specific assets. Planning only: do not edit .gitignore yet.
```

Use this prompt before any WEEN migration:

```text
Read AGENTS.md first. Planning only. Inspect only file and folder names plus lightweight markdown docs. Propose a safe migration plan for ai-workspace/WEEN_JAPAN so shared workflow docs stay in ai-workspace and WEEN project material lives outside the shared repo. Do not move, delete, rename, edit, stage, commit, or push anything.
```

## Do Not Do Yet

- Do not move `ai-workspace/WEEN_JAPAN/`.
- Do not delete backups, duplicates, archives, media, exports, or project folders.
- Do not scan `C:\Users\ADMIN\Documents\PROJECTS` recursively.
- Do not open images, videos, archives, raw media, exports, or business documents.
- Do not edit CHILLAB, HUONG, WEEN, or backup folders.
- Do not change `.gitignore` until the WEEN GitHub boundary is decided.
- Do not stage, commit, push, deploy, publish, or sync anything.
- Do not copy CHILLAB, HUONG, or WEEN assets into `ai-workspace`.
- Do not create automation or browser workflows until the workflow docs are in place.
- Do not treat project-specific brand or business rules as shared workspace rules.
