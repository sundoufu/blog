import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import Head from './Head';
import Nav from './Nav';

const Container = styled.div`
  max-width: 600px;
  margin: 100px auto 0;
  padding: 0 20px;
`;

const Layout = ({ children }) => (
  <div>
    <Head title="Home" />
    <Nav />
    <Container>
      {children}
    </Container>
    <style jsx global>
      {`
        body {
          margin: 0;
          overflow-y: scroll;
          font-family: 'Noto Serif KR', serif;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
