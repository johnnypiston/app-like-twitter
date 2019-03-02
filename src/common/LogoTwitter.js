import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoTwitterIcon from './icons/TwitterLogo';

const LogoLink = styled(Link)`
  display: block;
  font-size: 0;
  margin: 14px auto;
  width: 21px;

  img {
    display: block;
  }
`;

const LogoTwitter = function () {
  return (
    <LogoLink to="/">
      <LogoTwitterIcon />
      Twitter
    </LogoLink>
  );
};

export default LogoTwitter;
