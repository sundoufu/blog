import fetch from 'isomorphic-unfetch';

import deserializer from './deserializer';

const BASE_URL = 'https://my-json-server.typicode.com/steinkim/blog-mock-api';

export default {
  post: {
    list: async () => (
      fetch(`${BASE_URL}/posts`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error(response);
        })
        .then(deserializer.post.list)
    ),
    get: async (slug) => (
      fetch(`${BASE_URL}/posts/${slug}`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error(response);
        })
        .then(deserializer.post.get)
    ),
  },
};
