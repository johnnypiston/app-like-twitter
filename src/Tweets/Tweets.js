import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tweet from './Tweet';

const TweetsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tweets = function (props) {
  const tweets = [];
  props.tweets.forEach((tweet) => {
    tweets.push(<Tweet content={tweet} key={tweet.id} />);
  });
  return <TweetsList>{tweets}</TweetsList>;
};

export default Tweets;
