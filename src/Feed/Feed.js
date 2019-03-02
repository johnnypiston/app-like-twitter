import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Tweets from '../Tweets/Tweets';

const ListContainer = styled.div`
  background-color: #ffffff;
  margin-top: 10px;
`;

const Tabs = styled.div`
  border-bottom: 1px solid #e1e8ed;
  display: flex;
`;

const TabLink = styled(Link)`
  color: #1da1f2;
  display: block;
  font-size: 18px;
  font-weight: 700;
  padding: 15px;
  text-decoration: none;
`;

const LikesTitle = styled.h2`
  border-bottom: 1px solid #e1e8ed;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding: 15px;
`;

const Feed = function (props) {
  const FeedHeader = function () {
    if (props.feedName === 'likes') {
      return <LikesTitle>Likes</LikesTitle>;
    }
    return (
      <Tabs>
        <TabLink to={`${props.match.url}`}>Tweets</TabLink>
        <TabLink to={`${props.match.url}/tweets_replies`}>Tweets & replies</TabLink>
        <TabLink to={`${props.match.url}/media`}>Media</TabLink>
      </Tabs>
    );
  };

  const FullFeed = function () {
    return <Tweets tweets={props.data} />;
  };

  const SelectedFeed = function ({ match }) {
    return (
      <div>
        <h2>
          Selected feed:
          {` ${match.params.tabName}`}
        </h2>
      </div>
    );
  };

  return (
    <ListContainer>
      <FeedHeader />
      <Route path={`${props.match.path}/:tabName`} component={SelectedFeed} />
      <Route exact path={props.match.path} render={FullFeed} />
    </ListContainer>
  );
};

export default Feed;
