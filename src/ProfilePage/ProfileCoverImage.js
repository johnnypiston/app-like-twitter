import React from 'react';
import styled from 'styled-components';

const CoverImageContainer = styled.div`
  background-color: #ffffff;
  background-image: url(${process.env.PUBLIC_URL}/img/everyinteraction-cover-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 380px;
`;

const ProfileCoverImage = function () {
  return <CoverImageContainer />;
};

export default ProfileCoverImage;
