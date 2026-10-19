import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per project: src/content/projects/<project-id>.md
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    repo: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['active', 'paused', 'finished']).default('active'),
    order: z.number().default(0),
  }),
});

// Posts live in a folder per project: src/content/posts/<project-id>/<slug>.md,
// so an entry's id is "<project-id>/<slug>". Images sit next to them in ./images/.
const posts = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, posts };
