import React from 'react';
import styled from 'styled-components';
import UserAvatar from '../common/UserAvatar';
import TweetActions from './TweetActions';
import IconPinned from '../common/icons/Pinned';

const TweetContainer = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 10px 10px 70px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 5px;
  position: relative;
`;

const AvatarContainer = styled.div`
  border-radius: 50%;
  height: 50px;
  left: -60px;
  position: absolute;
  top: 0;
  width: 50px;
`;

const Author = styled.div`
  color: #707e88;
  font-size: 13px;
  font-weight: 500;

  b {
    color: #292f33;
    font-size: 15px;
    font-weight: 500;
  }
`;

const Date = styled.div`
  color: #707e88;
  font-size: 13px;
  font-weight: 500;

  &:before {
    content: '\00B7';
    margin: 0 5px;
  }
`;

const Text = styled.div`
  color: #292f33;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;

  a {
    color: #1da1f2;
    text-decoration: none;
  }
`;

const PinnedContainer = styled.div`
  left: -24px;
  line-height: 14px;
  margin-bottom: 10px;
  position: relative;

  svg {
    margin-right: 10px;
  }
`;

const PinnedLabel = (props) => {
  if (!props.pinnedStatus) {
    return null;
  }

  return (
    <PinnedContainer>
      <IconPinned />
      {' '}
Pinned Tweet
    </PinnedContainer>
  );
};

const Tweet = function (props) {
  return (
    <TweetContainer>
      <PinnedLabel pinnedStatus={props.content.pinnedStatus} />
      <Header>
        <AvatarContainer>
          <UserAvatar user={props.content.tweetAuthor} />
        </AvatarContainer>
        <Author>
          <b>{props.content.tweetAuthor.name}</b>
          {' '}
          <span>
@
            {props.content.tweetAuthor.nickname}
          </span>
        </Author>
        <Date>{props.content.date}</Date>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: props.content.text }} />
      <TweetActions tweetStatistic={props.content.tweetStatistics} />
    </TweetContainer>
  );
};

export default Tweet;
