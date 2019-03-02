import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ActionsContainer = styled.div`
  display: flex;

  button {
    border-radius: 22px;
    flex-basis: 50%;
    margin-right: 10px;
    padding: 13px 1em 12px;
  }
`;

const ProfileActions = function () {
  return (
    <ActionsContainer>
      <Button buttonText="Tweet To" isPrimary />
      <Button buttonText="Message" isPrimary />
    </ActionsContainer>
  );
};

export default ProfileActions;
