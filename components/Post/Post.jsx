import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ content }) => (
  <ReactMarkdown
    source={content}
  />
);
