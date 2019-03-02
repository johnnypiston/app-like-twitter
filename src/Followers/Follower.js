import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FollowerItem = styled.li`
  display: block;
  height: 48px;
  margin: 5px 0 0 5px;
  overflow: hidden;
  width: 48px;

  img {
    max-width: 100%;
  }
`;

const Follower = function (props) {
  return (
    <FollowerItem>
      <Link to={props.info.link}>
        <img src={props.info.avatar} alt={props.info.name} />
      </Link>
    </FollowerItem>
  );
};

export default Follower;
