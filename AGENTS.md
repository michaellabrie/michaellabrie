# AGENTS.md — michaellabrie.github.io

Personal research website for Michael LaBrie (UF Biotechnology undergraduate; structural
virology and computational bioinformatics). Built with React + Vite and published with
GitHub Pages at https://michaellabrie.github.io.

## Development commands

| Command           | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `npm install`     | Install dependencies (after cloning or pulling)      |
| `npm run dev`     | Local dev server at http://localhost:5173            |
| `npm run build`   | Production build into `dist/`                        |
| `npm run preview` | Serve the production build locally                   |
| `npm run lint`    | Lint with oxlint                                     |

Always run `npm run build` and confirm it succeeds before committing.

## Content organization

- `src/profile.js` holds **all** biographical, research, project, skill, education,
  publication, and contact content. Edit text there, not in components.
- `src/components/` contains one presentational component per section
  (`Nav`, `Hero`, `About`, `Research`, `Projects`, `Skills`, `Education`, `Interests`,
  `Publications`, `Contact`, `Footer`) plus shared pieces (`Section`, `CapsidIllustration`).
- `src/index.css` holds design tokens (colors, type, spacing) and all styles.
  Light/dark theme is driven by `data-theme` on `<html>`.
- `public/` holds static files (favicon, CV PDF when added).
- `vite.config.js` uses `base: '/'` because this is a user Pages site.

To add a project, append an object to `projects` in `src/profile.js`. Optional fields
(`links`, `figure`) render only when present.

## Content rules (scientific integrity)

- Use only facts provided by Michael. If a detail is missing, leave an explicit
  placeholder (`null` or empty array) — the UI renders an empty state.
- Never invent results, publications, DOIs, journals, authorship, presentations,
  datasets, collaborators, awards, GPAs, or dates.
- Do not disclose unpublished findings or confidential laboratory information.
- Future interests must be labelled as future interests, not completed work.
- Illustrations are abstract/schematic and must not look like real experimental data.
- No skill percentages or proficiency scores.

## Privacy constraints

Never publish: phone number, home address, birthday, class schedule, student ID,
or any other private information. Never commit `.env` files, API keys, or tokens.

## Git workflow

- `main` is the deployed branch; pushes to `main` trigger
  `.github/workflows/deploy.yml` which builds and deploys `dist/` to GitHub Pages.
- Make changes on feature branches (`feature/<short-name>`), open a pull request,
  review, then merge.
- Write clear, imperative commit messages ("Add publications section").
- Never force-push, rewrite history, or commit `node_modules/`, `dist/`, or secrets.
- AI agents must explain commands before running them and get approval before
  committing, pushing, merging, or deploying.
