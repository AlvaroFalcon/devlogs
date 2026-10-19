import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Project = CollectionEntry<'projects'>;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** A path inside the site, with the GitHub Pages base prefixed. */
export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;

export const projectOf = (post: Post) => post.id.split('/')[0];
export const slugOf = (post: Post) => post.id.split('/').slice(1).join('/');
export const postUrl = (post: Post) => url(`${projectOf(post)}/${slugOf(post)}/`);

/** Published posts, newest first (drafts show only in `astro dev`). */
export async function getPosts(project?: string) {
  const posts = await getCollection('posts', (p) => (import.meta.env.PROD ? !p.data.draft : true));
  return posts
    .filter((p) => !project || projectOf(p) === project)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export function readingMinutes(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 230));
}
