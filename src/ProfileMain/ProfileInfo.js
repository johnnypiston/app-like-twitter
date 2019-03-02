import React from 'react';
import styled from 'styled-components';
import IconLocation from '../common/icons/Location';
import IconLink from '../common/icons/Link';
import IconJoin from '../common/icons/Join';
import IconCheck from '../common/icons/Check';

const InfoContainer = styled.div`
  margin-bottom: 15px;
  padding-right: 40px;
`;

const Name = styled.h1`
  align-items: center;
  display: flex;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;

  svg {
    margin-left: 10px;
  }
`;

const Nickname = styled.div`
  color: #697787;
  line-height: 20px;
  margin: 0 0 15px 0;
`;

const About = styled.p`
  margin: 0 0 15px 0;
`;

const Location = styled.div`
  align-items: center;
  display: flex;
  color: #657786;
  margin-bottom: 10px;

  span {
    margin-right: 10px;
  }
`;

const UserLink = styled.div`
  align-items: center;
  display: flex;
  color: #657786;
  margin-bottom: 10px;

  a {
    color: #0072bb;
    margin-left: 10px;
    text-decoration: none;
  }
`;

const JoinDate = styled.div`
  align-items: center;
  display: flex;
  color: #657786;
  margin-bottom: 5px;

  span {
    margin-right: 10px;
  }
`;

const ProfileInfo = function (props) {
  return (
    <InfoContainer>
      <Name>
        {props.profile.name}
        <IconCheck />
      </Name>
      <Nickname>
@
        {props.profile.nickname}
        {' '}
Follows you
      </Nickname>
      <About>{props.profile.aboutInfo}</About>
      <Location>
        <span>
          <IconLocation />
        </span>
        {props.profile.location}
      </Location>
      <UserLink>
        <IconLink />
        <a href="#">{props.profile.link}</a>
      </UserLink>
      <JoinDate>
        <span>
          <IconJoin />
        </span>
        Joined
        {' '}
        {props.profile.joinDate}
      </JoinDate>
    </InfoContainer>
  );
};

export default ProfileInfo;
