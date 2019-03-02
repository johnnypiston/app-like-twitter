import React from 'react';
import styled from 'styled-components';
import IconComments from '../common/icons/Comments';
import IconRetweet from '../common/icons/Retweet';
import IconLike from '../common/icons/Like';
import IconMessage from '../common/icons/Message';

const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
`;

const ActionButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: #667580;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  font-weight: 700;
  margin-right: 35px;

  span {
    font-size: 0;
    margin-left: 10px;
  }

  img {
    margin-right: 10px;
  }
`;

const TweetActions = function (props) {
  return (
    <ActionsContainer>
      <ActionButton>
        <IconComments />
        <span>Comment</span>
        {' '}
        {props.tweetStatistic.comments > 0 ? props.tweetStatistic.comments : ''}
      </ActionButton>
      <ActionButton>
        <IconRetweet />
        <span>Retweet</span>
        {' '}
        {props.tweetStatistic.retweets > 0 ? props.tweetStatistic.retweets : ''}
      </ActionButton>
      <ActionButton>
        <IconLike />
        <span>Like</span>
        {' '}
        {props.tweetStatistic.likes > 0 ? props.tweetStatistic.likes : ''}
      </ActionButton>
      <ActionButton>
        <IconMessage />
        <span>Message</span>
      </ActionButton>
    </ActionsContainer>
  );
};

export default TweetActions;
