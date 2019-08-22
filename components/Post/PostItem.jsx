import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import ko from 'date-fns/locale/ko';
import Link from 'next/link';

import colors from '../../constants/colors';
import propTypes from '../../constants/propTypes';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

const Summary = styled.p`
  color: ${colors.post.summary};
`;

const PublishedAt = styled.div`
  color: ${colors.post.publishedAt};
`;

const PostItem = (props) => {
  const { title, summary, category, slug, publishedAt } = props;
  return (
    <div>
      <div>{category}</div>
      <Title>
        <Link href={`posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </Title>
      <Summary>{summary}</Summary>
      <PublishedAt>{format(parseISO(publishedAt), 'PPPP', { locale: ko })}</PublishedAt>
    </div>
  );
};

PostItem.propTypes = propTypes.postItem;

PostItem.defaultProps = {
  summary: '',
  category: '일반',
};

export default PostItem;
