import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Post from '../components/Post/Post';

storiesOf('Post')
  .add('Post', () => (
    <Post
      content={text('content', 'Hello World')}
    />
  ));
