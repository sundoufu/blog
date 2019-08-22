import React from 'react';
import { arrayOf, shape } from 'prop-types';

import PostList from '../../components/Post/PostList';
import api from '../../api';
import propTypes from '../../constants/propTypes';

function PostListPage({ posts }) {
  return <PostList posts={posts} />;
}

PostListPage.propTypes = {
  posts: arrayOf(shape(propTypes.postItem)).isRequired,
};

PostListPage.getInitialProps = async () => ({
  posts: await api.post.list(),
});

export default PostListPage;
