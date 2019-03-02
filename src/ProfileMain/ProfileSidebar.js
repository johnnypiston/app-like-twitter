import React from 'react';
import styled from 'styled-components';
import UserAvatar from '../common/UserAvatar';
import ProfileInfo from './ProfileInfo';
import ProfileActions from './ProfileActions';
import Followers from '../Followers/Followers';
import Media from '../Media/Media';

const Sidebar = styled.aside`
  position: relative;
  top: -180px;
  z-index: 1;
`;

const AvatarContainer = styled.div`
  border: 1px solid #e7ecf0;
  border-radius: 50%;
  margin-bottom: 10px;
  height: 210px;
  width: 210px;
`;

const ProfileSidebar = function (props) {
  return (
    <Sidebar>
      <AvatarContainer>
        <UserAvatar user={props.profile} />
      </AvatarContainer>
      <ProfileInfo profile={props.profile} />
      <ProfileActions />
      <Followers followers={props.followers} />
      <Media media={props.media} />
    </Sidebar>
  );
};

export default ProfileSidebar;
