import rss from '@astrojs/rss';
import { getPosts, postUrl } from '../lib';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Devlogs',
    description: 'Development logs for my game and tool projects.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: postUrl(post),
    })),
  });
}
