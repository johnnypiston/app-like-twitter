import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';

const AccountItem = styled.li`
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  padding: 15px 0;
`;

const AccountAvatar = styled(Link)`
  display: block;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
  height: 48px;
  width: 48px;

  img {
    max-width: 100%;
  }
`;

const AccountInfo = styled.div`
  width: 180px;
`;

const AccountLink = styled(Link)`
  display: block;
  color: #657786;
  font-size: 13px;
  margin-bottom: 10px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 180px;

  strong {
    display: inline-block;
    color: #333333;
    margin-right: 5px;
    font-weight: 700;

    &:hover {
      color: #1da1f2;
      text-decoration: underline;
    }
  }
`;

const RecommendAccount = function (props) {
  return (
    <AccountItem>
      <AccountAvatar to={`/${props.account.nickname}`}>
        <img src={props.account.avatar} alt={props.account.name} />
      </AccountAvatar>
      <AccountInfo>
        <AccountLink to={`/${props.account.nickname}`}>
          <strong>{props.account.name}</strong>
          {`@${props.account.nickname}`}
        </AccountLink>
        <Button buttonText="Follow" />
      </AccountInfo>
    </AccountItem>
  );
};

export default RecommendAccount;
