import React from 'react';
import styled from 'styled-components';

const TrendItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #1da1f2;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: block;
    color: #657786;
    font-size: 12px;
    line-height: 18px;
  }
`;

const Trend = function (props) {
  return (
    <TrendItem>
      <a href={`/${props.trend.title}`}>{props.trend.title}</a>
      {props.trend.addition && <span>{props.trend.addition}</span>}
    </TrendItem>
  );
};

export default Trend;
