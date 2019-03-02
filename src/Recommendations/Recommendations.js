import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RecommendAccount from './RecommendAccount';

const RecommendationsBlock = styled.div`
  background-color: #ffffff;
  margin-top: 10px;
  padding: 15px;
`;

const TitleWrap = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  margin: 0;
  padding: 0;
`;

const RefreshButton = styled.button`
  border: none;
  background-color: transparent;
  color: #1da1f2;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  line-height: 23px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  white-space: normal;
  word-wrap: normal;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    text-decoration: underline;
  }
`;

const ViewAllLink = styled(Link)`
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

const FindLink = styled(Link)`
  color: #1da1f2;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RecommendationsList = styled.div`
  margin-bottom: 25px;
`;

const Recommendations = function (props) {
  const RECOMMENDATIONS = props.recommendations;
  const recommendationsList = [];
  RECOMMENDATIONS.forEach((recommendation) => {
    recommendationsList.push(<RecommendAccount account={recommendation} key={recommendation.id} />);
  });
  return (
    <RecommendationsBlock>
      <TitleWrap>
        <Title>Who to follow</Title>
        <Middot>{'\u00b7'}</Middot>
        <RefreshButton>Refresh</RefreshButton>
        <Middot>{'\u00b7'}</Middot>
        <ViewAllLink to="/all_ecomendations">View all</ViewAllLink>
      </TitleWrap>
      <RecommendationsList>{recommendationsList}</RecommendationsList>
      <FindLink to="/search_people">Find people you know</FindLink>
    </RecommendationsBlock>
  );
};

export default Recommendations;
