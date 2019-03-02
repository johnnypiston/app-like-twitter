import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StatisticList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StatisticLink = styled(Link)`
  display: block;
  color: #788a98;
  font-size: 12px;
  font-weight: 700;
  padding: 14px 15px 7px;
  text-align: center;
  text-decoration: none;

  span {
    display: block;
    font-size: 18px;
    margin-top: 10px;
  }
`;

const Statistics = function (props) {
  return (
    <StatisticList>
      <li>
        <StatisticLink to={`${props.match.url}`}>
          Tweets
          {' '}
          <span>8,058</span>
        </StatisticLink>
      </li>
      <li>
        <StatisticLink to={`${props.match.url}/following`}>
          Following
          {' '}
          <span>721</span>
        </StatisticLink>
      </li>
      <li>
        <StatisticLink to={`${props.match.url}/followers`}>
          Followers
          {' '}
          <span>1,815</span>
        </StatisticLink>
      </li>
      <li>
        <StatisticLink to={`${props.match.url}/likes`}>
          Likes
          {' '}
          <span>460</span>
        </StatisticLink>
      </li>
    </StatisticList>
  );
};

export default Statistics;
