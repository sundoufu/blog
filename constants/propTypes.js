import { string } from 'prop-types';

export default {
  postItem: {
    title: string.isRequired,
    summary: string,
    category: string,
    publishedAt: string.isRequired,
  },
};
