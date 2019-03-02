import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Follower from './Follower';

const FollowersBlock = styled.div`
  margin: 20px 0 25px;
`;

const FollowersHead = styled.div`
  margin-bottom: 8px;

  a {
    color: #1da1f2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FollowersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -5px 0 0 -5px;
  padding: 0;
`;

const Followers = function (props) {
  const followers = [];
  props.followers.forEach((follower) => {
    followers.push(<Follower info={follower} key={follower.id} />);
  });

  return (
    <FollowersBlock>
      <FollowersHead>
        <Link to="/followers">
          {followers.length}
          {' '}
Followers you know
        </Link>
      </FollowersHead>

      <FollowersList>{followers}</FollowersList>
    </FollowersBlock>
  );
};

export default Followers;
