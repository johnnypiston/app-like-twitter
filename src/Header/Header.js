import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import LogoTwitter from '../common/LogoTwitter';
import SearchBar from './SearchBar';
import UserAvatar from '../common/UserAvatar';
import Button from '../common/Button';

const HeaderWrap = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #979797;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const UserAvatarConatainer = styled.div`
  height: 32px;
  margin: 0 auto;
  width: 32px;
`;

const Header = function () {
  const CURRENT_USER = {
    avatar: `${process.env.PUBLIC_URL}/img/avatar-every-iteraction.png`,
    name: 'Every Interaction',
    nickname: 'EveryInteract',
  };
  return (
    <HeaderWrap>
      <div className="container">
        <div className="row middle-lg">
          <div className="col-lg-4">
            <Navigation />
          </div>
          <div className="col-lg-3">
            <LogoTwitter />
          </div>
          <div className="col-lg-3">
            <SearchBar />
          </div>
          <div className="col-lg-1">
            <UserAvatarConatainer>
              <UserAvatar user={CURRENT_USER} />
            </UserAvatarConatainer>
          </div>
          <div className="col-lg-1">
            <Button buttonText="Tweet" isPrimary />
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
