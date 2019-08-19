import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import PostItem from '../components/Post/PostItem';

storiesOf('PostItem')
  .add('PostItem', () => (
    <PostItem
      title={text('title', '것은 새가 간에 운다')}
      summary={text('summary', '목숨을 부패를 방황하여도, 안고, 것이다. 같이, 이것을 우리 위하여, 사막이다.')}
      category={text('category', '한국 소설')}
      publishedAt={new Date(2019, 0, 1)}
    />
  ));
