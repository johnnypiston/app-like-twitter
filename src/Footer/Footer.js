import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  margin-top: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: #718290;
    font-size: 12px;
    line-height: 18px;
    margin: 0 8px 0 0;
  }

  a {
    color: #718290;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = function () {
  return (
    <FooterBlock>
      <ul>
        <li>
          {'\u00a9 '}
          2018 Twitter
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help_center">Help Center</Link>
        </li>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/privacy_policy">Privacy policy</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
        <li>
          <Link to="/ads_info">Ads info</Link>
        </li>
      </ul>
    </FooterBlock>
  );
};

export default Footer;
