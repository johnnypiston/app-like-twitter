import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import IconMore from '../common/icons/More';

const ActionsWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 0;
  margin-left: 15px;
  padding: 0;
`;

const UserActions = function () {
  return (
    <ActionsWrap>
      <Button buttonText="Follow" />
      <MoreButton type="button">
        <IconMore />
        More
      </MoreButton>
    </ActionsWrap>
  );
};

export default UserActions;
