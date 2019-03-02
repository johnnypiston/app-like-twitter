import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Trend from './Trend';

const TrendsBlock = styled.div`
  background-color: #ffffff;
  margin-top: 10px;
  padding: 15px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  margin: 0;
  padding: 0;
`;

const ChangeLink = styled(Link)`
  color: #1da1f2;
  font-size: 12px;
  line-height: 23px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Middot = styled.span`
  font-size: 12px;
  line-height: 23px;
  margin: 0 5px;
`;

const TrendsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Trends = function (props) {
  const TREND_DATA = props.trends;
  const TRENDS = TREND_DATA.TRENDS;
  const trendsList = [];
  TRENDS.forEach((trend) => {
    trendsList.push(<Trend trend={trend} key={trend.id} />);
  });

  return (
    <TrendsBlock>
      <TitleWrap>
        <Title>{TREND_DATA.trendTitle}</Title>
        <Middot>{'\u00b7'}</Middot>
        <ChangeLink to="/treads_setting">Change</ChangeLink>
      </TitleWrap>
      <TrendsList>{trendsList}</TrendsList>
    </TrendsBlock>
  );
};

export default Trends;
