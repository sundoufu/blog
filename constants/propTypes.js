import { string, instanceOf } from 'prop-types';

export default {
  postItem: {
    title: string.isRequired,
    summary: string,
    category: string,
    publishedAt: instanceOf(Date).isRequired,
  },
};
