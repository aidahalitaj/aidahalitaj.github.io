# aidahalitaj.github.io

Personal portfolio website for **Aida Halitaj** — NLP Researcher & Data Scientist.

Built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

## Local Preview

Open `index.html` directly in your browser — everything works without a server.

```bash
open index.html
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub named `aidahalitaj.github.io`.
2. Push this code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio site"
   git remote add origin https://github.com/aidahalitaj/aidahalitaj.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in the repository.
4. Under **Source**, select the `main` branch and click **Save**.
5. Your site will be live at `https://aidahalitaj.github.io` within a few minutes.

## Customise

Before deploying, update these placeholders:

| Item | File | What to change |
|------|------|----------------|
| Profile photo | `index.html` | Replace the `.about__photo-placeholder` div with an `<img>` tag |
| Resume / CV | `assets/resume.pdf` | Add your actual PDF file |
| LinkedIn URL | `index.html` | Search for `TODO: Update with real LinkedIn URL` |
| Email address | `index.html` | Search for `TODO: Update with real email address` |
| Google Scholar | `index.html` | Search for `TODO: Update with real Google Scholar URL` |

## Structure

```
├── index.html          Main single-page site
├── css/style.css       All styles (Scandinavian minimalist)
├── js/main.js          Interactions (menu, filter, scroll animations)
├── assets/             Profile photo & resume PDF
└── README.md           This file
```
