import { parseISO } from 'date-fns';

export default {
  posts: (rawPosts) => rawPosts.map((rawPost) => ({
    ...rawPost,
    publishedAt: parseISO(rawPost.publishedAt),
  })),
};
