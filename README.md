# devlogs

Development logs for my projects, published at **https://alvarofalcon.github.io/devlogs/**.

A static [Astro](https://astro.build) site: no client-side JavaScript, images resized and converted to WebP at build time, an RSS feed and a sitemap. Every push to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).

## Writing

```bash
npm install
npm run dev                                   # http://localhost:4321/devlogs/
npm run new -- arpg-game my-slug "Post title" # scaffolds a draft post
npm run build                                 # what CI runs; must pass before pushing
```

- **Projects**: `src/content/projects/<project-id>.md` (name, tagline, repo, stack, status, order; the body is the project page's intro).
- **Posts**: `src/content/posts/<project-id>/<slug>.md`, served at `/devlogs/<project-id>/<slug>/`.
  Frontmatter: `title`, `date`, `summary`, optional `cover`/`coverAlt` (used for cards and link previews), `tags`, `draft`.
- **Images** sit next to the posts in `src/content/posts/<project-id>/images/` and are referenced as `![caption](./images/file.png)`.

## One-time setup

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
