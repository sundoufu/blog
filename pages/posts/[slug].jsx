import React from 'react';
import { shape } from 'prop-types';

import Post from '../../components/Post/Post';
import api from '../../api';
import propTypes from '../../constants/propTypes';

function PostPage({ post }) {
  const { content } = post;

  return (
    <Post
      content={content}
    />
  );
}

PostPage.propTypes = {
  post: shape(propTypes.postItem).isRequired,
};

PostPage.getInitialProps = async ({ query: { slug } }) => ({
  post: await api.post.get(slug),
});

export default PostPage;
