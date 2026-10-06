## new website built with react
hosted on vercel, deploys automatically with pushes to main.

## resume page
`/resume` renders `src/app/resume/resume.json`, generated from the job-agent bullet bank:
`python3 scripts/sync_resume.py --job-agent ../job-agent`. A weekly routine follows `ROUTINE.md` to keep the resume and projects current and opens a PR with any changes.
