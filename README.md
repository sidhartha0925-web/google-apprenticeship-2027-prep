# SDE Interview Prep Partner

A customizable, browser-based planner for software engineering interview preparation.

**Live demo:** https://sidhartha0925-web.github.io/google-apprenticeship-2027-prep/

## What it includes

- A personalized candidate journey for a chosen role, company, interview stage, and target date
- Flexible 2–24 week roadmaps, 3–7 study days per week, and adjustable daily question workloads
- Interview-style choices for balanced, technical, DSA-intensive, assessment, placement, and revision preparation
- A 150-question interview track and the 442-item Striver A2Z track
- Daily planning, question status, confidence, bookmarks, revision dates, notes, and mistake tracking
- STAR-L behavioral practice, core computer science and project review, and mock interview tracking
- JSON export and import for moving progress between browsers or domains

The original Google apprenticeship setup remains available as a preset.

## Run locally

The site is static and requires no build step:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000.

## Deployment

GitHub Actions publishes the contents of `dist/` to GitHub Pages whenever changes are pushed to `main`. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.

## Progress storage

Preparation progress is saved in the browser’s local storage on the current device and domain. It does not automatically sync across devices. Export your progress before moving to another domain, then import it there.
