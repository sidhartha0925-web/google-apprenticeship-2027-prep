# SDE Interview Prep Partner

Private source backup for a customizable software-engineering interview preparation website.

Live site: https://sidhartha-google-apprenticeship-2027.sidhartha0925.chatgpt.site

## Features

- Custom candidate, role, company, current stage, and target date
- Balanced, online-assessment, technical, DSA-intensive, placement, and revision interview styles
- 2–24 week roadmaps with 3–7 study days per week
- Automatic or manual workload of 1–6 questions per study day
- Company and topic emphasis without claiming verified company question history
- Full candidate journey from foundations through final decision
- Interview-focused 150-question track and complete Striver A2Z 442-item track
- Daily queues, carryover work, revision scheduling, notes, mistakes, code, confidence, and bookmarks
- STAR-L behavioral preparation, core CS, project deep dives, mocks, and supporting tasks
- JSON export/import for moving private progress between browsers or domains

The original Google apprenticeship setup remains the default preset, so existing local progress and stable question IDs continue to work.

## Run locally

The deployable static site is in `dist/`. No build step is required.

```sh
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.

## Deploy independently

Publish the contents of `dist/` as the web root on any static host. Use no build command and set the output/publish directory to `dist`.

Progress is stored in the browser's local storage and is intentionally not committed to this repository. Browser storage is tied to a domain, so export progress before moving to a new domain and import it there.
