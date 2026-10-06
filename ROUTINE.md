# Weekly portfolio update

You (Claude) run this once a week in a cloud sandbox, inside a clone of this repo. Nobody is watching: don't ask questions; if you're blocked, stop and report.

The goal is to keep danielrosenthal.io current: the resume page (`/resume`) and the projects page (`/projects`). All changes go out as **one pull request** for Daniel to review. Vercel deploys `main` automatically, so nothing reaches the live site until he merges.

## Hard rules

- Never push to `main`, merge a PR, or force-push. One PR per run, on a fresh branch.
- **`bank.yaml` in `danielrosenthal0/job-agent` is the source of truth for resume content.** Never hand-edit `src/app/resume/resume.json`; regenerate it with `scripts/sync_resume.py`.
- Never put a claim, number, technology, title, or date on the site that you can't point to in `bank.yaml`, a repo's code, or Daniel's own words in a conversation. Don't round or inflate numbers.
- Never commit to `main` in job-agent and never edit its `AGENT.md`, `filters.yaml`, `companies.yaml`, `config.yaml`, or `answers.yaml`. Resume changes found in conversations go to job-agent only as a PR against `bank.yaml` / `selections/baseline.json`.
- Never publish the phone number or anything from `answers.yaml` (salary, demographics, authorization).
- If nothing changed, open no PR and make no commits.

## 0. Setup

You need two clones side by side: this repo and `danielrosenthal0/job-agent`. If either is missing, attach it with the `add_repo` tool (claude-code-remote) and clone it to `/home/user/<repo>` as the tool says. If you can't, stop and report "job-agent not reachable".

```
git -C ../job-agent pull --ff-only origin main
git checkout main && git pull --ff-only origin main
git checkout -b claude/weekly-portfolio-$(date -u +%Y-%m-%d)
python3 -c "import yaml" || pip install pyyaml
```

## 1. Sync the resume from the bank

```
python3 scripts/sync_resume.py --job-agent ../job-agent
```

`CHANGED` means Daniel (or a merged job-agent PR) edited `bank.yaml` or `selections/baseline.json` since the site was last synced. Keep the regenerated `resume.json`. `UNCHANGED` means there's nothing to sync. An `ERROR` line means the baseline names a bullet the bank no longer has; report it and don't touch the resume.

Also read `git -C ../job-agent log --since="8 days ago" --stat -- bank.yaml selections/baseline.json` so you can describe what changed in the PR.

## 2. Look for resume changes the bank doesn't have yet

Review the last 8 days for things that belong on the resume but aren't in `bank.yaml`:

1. **Daniel's conversations.** Use `list_sessions` (claude-code-remote, `mine: true`) and read sessions updated in the last 8 days with `list_events` (`kinds: ["user", "assistant"]`). Look only for career facts in Daniel's own messages: a new job, title, or end date; a shipped feature or new responsibility at work; a new or finished side project; a new skill he actually used; an updated metric he states. Ignore speculation, plans, drafts, and anything only Claude said.
2. **The daily job-agent runs.** Read the "Daily job agent" routine's recent reports (its sessions, via `list_triggers` → `last_run.session_id` and `list_sessions`) and `git -C ../job-agent log --since="8 days ago"`. Note anything the report flags about `bank.yaml` (for example "bank.yaml looks wrong" or a date marked "confirm"), and any skill gap that repeats across many postings **and** that Daniel has evidence for elsewhere (a repo, a conversation). Gaps alone are not evidence.
3. **His project repos.** `list_repos` and check repos pushed in the last 8 days. A project that already has a bank entry (`sports` = `sixers`, `plauly` = `playlist`, `metrohedron`) may need a bullet updated if the code shows the old one is no longer how it works (for example, the bank keeps both a Python and an ESPN/Edge Function variant of the sports bullets).

For every candidate, record the source (session id + a short quote, or repo + file).

If you found any: open **one PR against `danielrosenthal0/job-agent`** on a `claude/bank-update-<date>` branch that edits `bank.yaml` (and `selections/baseline.json` if the general resume should use the new bullet), following that file's own rules: plain text, a `stack` listing only tech the bullet names, matching ids. Then rerun step 1 against that branch so the portfolio PR previews the result:

```
git -C ../job-agent checkout claude/bank-update-<date>
python3 scripts/sync_resume.py --job-agent ../job-agent
git -C ../job-agent checkout main
```

and say in the portfolio PR that it depends on the job-agent PR merging first.

## 3. Projects page

Projects live in two arrays that must stay in sync: the cards in `src/app/projects/page.tsx` (`id`, `title`, one-sentence `description`, `date` as `M/YYYY`) and the detail pages in `src/app/projects/[id]/page.tsx` (`id`, `title`, `description` paragraphs, optional `video`).

- If step 2 found a new project with a real repo, add a card and a detail page written from its code and README, in the same plain first-person-free style as the existing ones. Link the repo only if it's public, and a live URL only if it responds.
- If an existing project's repo changed what the project does, update its detail paragraphs.
- Don't remove projects or rewrite ones that haven't changed.

## 4. Verify and open the PR

```
npm ci
npx next build
```

The build must pass. Re-read your diff: every new claim must trace to a source from step 2.

If there are changes, commit, push the branch, and open one PR against `main` with `create_pull_request` (GitHub MCP). Title: `Weekly portfolio update: <date>`. Body:
- **Resume**: what changed and why, each item with its source.
- **Projects**: what changed and why.
- **Needs Daniel**: anything you found but didn't apply (ambiguous facts, items that need his confirmation), and the job-agent PR link if there is one.

## 5. Report

Your final message: one line per change with the PR link(s), or "No portfolio changes this week" plus anything in "Needs Daniel".
