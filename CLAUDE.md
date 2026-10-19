# devlogs — guide for agents

Astro static site publishing devlogs for several projects. Read `README.md` for the layout; the rules below are what matters when you add content.

## Adding a post

1. `npm install` (once), then `npm run new -- <project-id> <slug> "Title"`, or create `src/content/posts/<project-id>/<slug>.md` by hand with the same frontmatter.
2. Write the body. Do **not** start it with a `# Title` heading: the page renders `title` itself.
3. Copy only the screenshots the post uses into `src/content/posts/<project-id>/images/` and link them relatively (`![caption](./images/foo.png)`). Never hotlink images from other repos, and never commit unused images: the repo should stay small.
4. `summary` is one or two plain sentences (no markdown); it shows on cards, in RSS and in link previews. Set `cover` to the most representative screenshot.
5. Links to a project's source or design docs point at its GitHub repo (`https://github.com/<owner>/<repo>/blob/main/...`). Links to another post use `../<slug>/`.
6. Set `draft: false`, run `npm run build` (it validates frontmatter and image paths), and commit only when it passes.

## Adding a project

Create `src/content/projects/<project-id>.md` (kebab-case id; not `projects`, which is a route). Its posts go in `src/content/posts/<project-id>/`.

## Style

Technical but friendly, written for people curious how games and tools get made: what we tried, why, what broke, what we'd do differently. Pull rationale from the project's own design docs and journal; never invent decisions or claim unfinished work. Posts are in English.

## Don't

- Don't add client-side JavaScript frameworks or web fonts: pages ship as plain HTML + one CSS file on purpose.
- Don't edit `dist/` or `.astro/` (build output, git-ignored).
