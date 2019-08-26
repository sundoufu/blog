import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import colors from '../constants/colors';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;

  background-color: ${colors.nav.background};
  list-style-type: none;

  a {
    color: white;
    margin: 14px;
    text-decoration: none;

    &:hover {
      color: ${colors.nav.hover};
    }

    i {
      vertical-align: bottom;
    }
  }

  .center {
    float: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .right a {
    float: right;
  }
`;

export default () => (
  <Nav>
    <div className="center">
      <Link href="/">
        <a>
          <b>Overscore</b>
        </a>
      </Link>
    </div>
    <div className="right">
      <Link href="/login">
        <a>
          관리자 로그인
        </a>
      </Link>
      <Link href="https://github.com/steinkim/blog-web">
        <a target="_blank">
          <span>GitHub </span>
          <i className="material-icons">open_in_new</i>
        </a>
      </Link>
    </div>
  </Nav>
);
