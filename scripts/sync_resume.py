#!/usr/bin/env python3
"""Build src/app/resume/resume.json from the job-agent bullet bank.

The resume page on the site renders resume.json. Its content comes from
danielrosenthal0/job-agent: bank.yaml holds every bullet (the source of truth)
and selections/baseline.json picks which bullets make up the general resume.

    python3 scripts/sync_resume.py --job-agent ../job-agent

Prints CHANGED or UNCHANGED. The `updated` date only moves when content changes,
so running this weekly with no resume edits leaves the file untouched.
"""
import argparse
import datetime
import json
import pathlib
import sys

import yaml

OUT = pathlib.Path(__file__).resolve().parent.parent / "src/app/resume/resume.json"

# Not published on a public page.
PRIVATE_HEADER_FIELDS = {"mobile", "themecolor"}

# Same rule AGENT.md uses: "Other" is only for hardware / computer-vision roles.
OMIT_SKILL_GROUPS = {"Other"}


def pick_entries(bank_entries, selected, kind):
    by_id = {e["id"]: e for e in bank_entries}
    out = []
    for sel in selected:
        entry = by_id.get(sel["id"])
        if entry is None:
            sys.exit(f"ERROR: {kind} '{sel['id']}' in the selection is not in bank.yaml")
        bullets_by_id = {b["id"]: b for b in entry["bullets"]}
        bullets = []
        for b in sel["bullets"]:
            bid = b if isinstance(b, str) else b["id"]
            if bid not in bullets_by_id:
                sys.exit(f"ERROR: bullet '{bid}' is not under {kind} '{entry['id']}' in bank.yaml")
            # A selection may carry a light rephrase; the baseline normally uses bank text.
            bullets.append(b["text"] if isinstance(b, dict) and "text" in b else bullets_by_id[bid]["text"])
        out.append({
            "id": entry["id"],
            "org": entry["org"],
            "title": entry["title"],
            "location": entry["location"],
            "dates": entry["dates"],
            "bullets": bullets,
        })
    return out


def build(bank, selection):
    header = {k: v for k, v in bank["header"].items() if k not in PRIVATE_HEADER_FIELDS}
    skills = selection.get("skills") or bank["skills"]
    return {
        "header": header,
        "skills": [{"group": g, "items": items} for g, items in skills.items() if g not in OMIT_SKILL_GROUPS],
        "experience": pick_entries(bank["experience"], selection["experience"], "experience"),
        "projects": pick_entries(bank["projects"], selection["projects"], "project"),
        "education": bank["education"],
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--job-agent", required=True, help="path to a clone of danielrosenthal0/job-agent")
    ap.add_argument("--selection", default="selections/baseline.json", help="selection file, relative to --job-agent")
    ap.add_argument("--check", action="store_true", help="report CHANGED/UNCHANGED without writing")
    args = ap.parse_args()

    root = pathlib.Path(args.job_agent)
    bank = yaml.safe_load((root / "bank.yaml").read_text())
    selection = json.loads((root / args.selection).read_text())
    content = build(bank, selection)

    previous = json.loads(OUT.read_text()) if OUT.exists() else {}
    previous_content = {k: v for k, v in previous.items() if k != "updated"}
    if previous_content == content:
        print("UNCHANGED")
        return

    print("CHANGED")
    if args.check:
        return
    content["updated"] = datetime.date.today().isoformat()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(content, indent=2, ensure_ascii=False) + "\n")


if __name__ == "__main__":
    main()
