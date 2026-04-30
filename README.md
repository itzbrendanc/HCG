# Axiom Strategy

Axiom Strategy is a premium consulting website built to communicate credibility and a modern, futuristic consulting aesthetic. The site emphasizes structured delivery, measurable impact, and professional presentation.

## Tech

- React + Vite
- Tailwind CSS
- Framer Motion
- Easy to deploy on Vercel

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed in your terminal.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. In Vercel, click **New Project** and import the repo.
3. Framework preset: **Vite** (Vercel detects it automatically).
4. Build command: `npm run build`
5. Output directory: `dist`

No paid APIs are used.

### Environment variables (Vite + Vercel)

If you expose an environment variable to the frontend build, it must be prefixed with `VITE_` (Vite requirement). Add any variables in Vercel under **Project Settings → Environment Variables**.

See `.env.example` for the expected format.

## Connect a custom domain

1. Buy a domain (e.g., Namecheap, Cloudflare Registrar).
2. In Vercel: **Project → Settings → Domains → Add**.
3. Follow Vercel’s DNS instructions (usually an `A` record and/or `CNAME`).
4. Wait for DNS to propagate, then enable HTTPS (Vercel handles certificates automatically).

## Low-cost operating stack (recommended)

| Need | Low-cost tool |
| --- | --- |
| Website | Vercel |
| CRM / lead tracker | Notion |
| Team chat | Discord or Slack |
| Slides / decks | Google Slides / PowerPoint / Canva |
| Scheduling | Calendly |
| Files | Google Drive |
| Forms | Website form (this project) or Google Forms |
| Email | Gmail (Google Workspace later) |

### Notes

- Notion is great for a lightweight CRM + team workspace (pipeline statuses, notes, next actions).
- Vercel supports Vite deployments directly, which keeps hosting simple and low-cost.

## Project structure

- `src/App.jsx`: Page composition
- `src/components/*`: Site sections and UI components
- `src/index.css`: Tailwind + global styles
