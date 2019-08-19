import React, { useState } from 'react';
import { useMount } from 'react-use';

import PostList from '../components/Post/PostList';
import api from '../api';

export default () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(undefined);

  useMount(() => {
    api.posts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err));
  });

  if (error) return 'Error!';

  return (
    <PostList posts={posts} />
  );
};
