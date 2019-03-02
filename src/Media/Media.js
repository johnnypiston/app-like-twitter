import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediaItem from './MediaItem';

const MediaBlock = styled.div`
  margin: 0 0 25px;
`;

const MediaHead = styled.div`
  margin-bottom: 8px;

  a {
    color: #1da1f2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -5px 0 0 -5px;
  padding: 0;
`;

const Media = function (props) {
  const media = [];
  props.media.forEach((mediaItem) => {
    media.push(<MediaItem info={mediaItem} key={mediaItem.id} />);
  });

  return (
    <MediaBlock>
      <MediaHead>
        <Link to="/media">522 Photos and video</Link>
      </MediaHead>

      <MediaList>{media}</MediaList>
    </MediaBlock>
  );
};

export default Media;
