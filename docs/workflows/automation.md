# Automation Workflow

Purpose: use this for Make.com, Apps Script, OpenAI Assistant, Facebook/Instagram workflows, scheduled agents, or multi-step automations.

## When To Use

- The task creates or changes an automation, scheduled job, integration, or multi-step workflow.
- The task may touch external services, credentials, business data, social channels, or recurring processes.
- The implementation needs clear inputs, outputs, triggers, and failure handling.

## Files To Read First

- `AGENTS.md`
- Relevant `docs/projects/*.md` bridge doc
- Existing automation docs, specs, scripts, or config files explicitly named by the user
- Sample data only when provided or explicitly approved

## Safe Process

1. Read `AGENTS.md`.
2. Read the relevant project bridge doc.
3. Start with planning only.
4. Write a design doc before implementation.
5. Define inputs, outputs, triggers, and risks.
6. Only implement after confirmation.
7. Test with sample data.
8. Report changed files and risks.

## Example Codex Prompt

```text
Read AGENTS.md first. Use docs/workflows/automation.md. Planning only: design a Make.com workflow for weekly CHILLAB content scheduling. Read docs/projects/CHILLAB.md, do not modify external folders, and do not implement until I approve the design.
```
