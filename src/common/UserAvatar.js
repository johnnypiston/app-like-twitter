import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserLink = styled(Link)`
  display: block;
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
  width: 100%;

  img {
    display: block;
    width: 100%;
  }
`;

const UserAvatar = function (props) {
  return (
    <UserLink to="/">
      <img src={props.user.avatar} alt={`${props.user.name} ${props.user.nickname}`} />
    </UserLink>
  );
};

export default UserAvatar;
