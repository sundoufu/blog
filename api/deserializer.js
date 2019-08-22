function deserializePost(post) {
  return post;
}

export default {
  post: {
    get: deserializePost,
    list: (posts) => posts.map(deserializePost),
  },
};
