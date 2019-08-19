import serializer from './serializer';

export default {
  posts: async () => (
    fetch('./static/posts.json')
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response);
      })
      .then((json) => serializer.posts(json.posts))
  ),
};
