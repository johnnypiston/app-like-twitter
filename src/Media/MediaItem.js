import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Media = styled.li`
  border-radius: 3px;
  display: block;
  height: 83px;
  margin: 5px 0 0 5px;
  overflow: hidden;
  width: 83px;

  img {
    max-width: 100%;
  }
`;

const MediaItem = function (props) {
  return (
    <Media>
      <Link to={props.info.link}>
        <img src={props.info.preview} alt={props.info.name} />
      </Link>
    </Media>
  );
};

export default MediaItem;
