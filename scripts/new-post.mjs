// Scaffolds a post: npm run new -- <project-id> <slug> "Title"
import fs from 'node:fs';
import path from 'node:path';

const [project, slug, title] = process.argv.slice(2);
if (!project || !slug || !title || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('usage: npm run new -- <project-id> <slug-in-kebab-case> "Title"');
  process.exit(1);
}
if (!fs.existsSync(`src/content/projects/${project}.md`)) {
  console.error(`unknown project "${project}": add src/content/projects/${project}.md first`);
  process.exit(1);
}
const dir = path.join('src/content/posts', project);
const file = path.join(dir, `${slug}.md`);
if (fs.existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}
fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
date: ${today}
summary: "One or two sentences for the cards, the RSS feed and link previews."
# cover: ./images/${slug}.png
# coverAlt: "What the cover shows"
tags: []
draft: true
---

Write the post here. Images go in ./images/ and are referenced as ![caption](./images/file.png).
`,
);
console.log(`created ${file} (draft: true — flip it to false to publish)`);
