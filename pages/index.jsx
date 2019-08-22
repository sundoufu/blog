import React from 'react';
import Router from 'next/router';

function Page() {
  return <div>Redirecting...</div>;
}

Page.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(302, { Location: '/posts' });
    res.end();
  } else {
    Router.push('/posts');
  }
  return {};
};

export default Page;
