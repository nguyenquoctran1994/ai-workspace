# TASK.md

# Ryan Workspace Task System

This file tracks global workspace-level tasks.

Project-specific tasks should live inside each project folder and override this file when needed.

---

## Current Setup Tasks

- [x] Create root AI workspace structure.
- [x] Add root `MASTER.md`.
- [x] Add root `AGENTS.md`.
- [x] Add RTK token-saving terminal rules for Codex.
- [x] Add root `DESIGN.md`.
- [x] Add root `PRD.md`.
- [x] Add root `TASK.md`.

---

## Next Recommended Tasks

- [ ] Sync GitHub repo to local VS Code workspace.
- [ ] Confirm local folder path used by VS Code.
- [ ] Check whether project folders exist for `WEEN`, `CHILLAB`, and `HUONG`.
- [ ] Add project-level `AGENTS.md` for each active project.
- [ ] Add project-level `DESIGN.md` for each active project.
- [ ] Add project-level `TASK.md` for each active project.
- [ ] Test Codex with RTK-aware commands inside the local repo.

---

## Agent Rules For Tasks

Agents should:

- keep tasks short and actionable
- mark completed tasks clearly
- avoid adding vague tasks
- separate global tasks from project-specific tasks
- update this file only when the task affects the whole workspace

---

## Local Sync Reminder

After GitHub changes, run this in the local repo before using VS Code/Codex:

```bash
git pull origin main
```

If the repo has not been cloned locally yet:

```bash
git clone https://github.com/nguyenquoctran1994/ai-workspace.git
```
