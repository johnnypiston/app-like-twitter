import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProfileCoverImage from './ProfileCoverImage';
import Statistics from './Statistics';
import UserActions from './UserActions';
import ProfileMain from '../ProfileMain/ProfileMain';

const StatisticsRow = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
`;

const ProfilePage = function (props) {
  return (
    <div>
      <Helmet>
        <title>Every Interaction</title>
        <meta name="description" content="Every Interaction | Twitter" />
      </Helmet>
      <ProfileCoverImage />
      <StatisticsRow>
        <div className="container">
          <div className="row middle-lg">
            <div className="col-lg-7 col-lg-offset-3">
              <Statistics {...props} />
            </div>
            <div className="col-lg-2">
              <UserActions />
            </div>
          </div>
        </div>
      </StatisticsRow>
      <ProfileMain {...props} />
    </div>
  );
};

export default ProfilePage;
