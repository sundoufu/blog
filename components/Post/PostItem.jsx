import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import colors from '../../constants/colors';

const Title = styled.h1`
  margin-top: 0;
`;

const Summary = styled.p`
  color: ${colors.post.summary};
`;

const PostItem = (props) => {
  const { title, summary, category } = props;
  return (
    <div>
      <div>{category}</div>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
    </div>
  );
};

PostItem.propTypes = {
  title: string.isRequired,
  summary: string,
  category: string,
};

PostItem.defaultProps = {
  summary: '',
  category: '일반',
};

export default PostItem;
