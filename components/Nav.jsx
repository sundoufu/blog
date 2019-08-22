import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import colors from '../constants/colors';

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${colors.nav.background};
    text-align: center;
    width: 100%;

    li {
      display: inline-block;

      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;

        &:hover {
          color: ${colors.nav.hover};
        }
      }
    }
  }
`;

export default () => (
  <Nav>
    <ul>
      <li>
        <Link href="/">
          <a>Overscore</a>
        </Link>
      </li>
    </ul>
  </Nav>
);
