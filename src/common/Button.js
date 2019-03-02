import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #1da1f2;
  background-color: ${props => (props.primary ? '#1da1f2' : '#ffffff')};
  border-radius: 16px;
  color: ${props => (props.primary ? '#fff' : '#1da1f2')};
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-weight: 500;
  line-height: 14px;
  padding: 9px 1em 7px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  white-space: normal;
  word-wrap: normal;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
`;

const Button = function (props) {
  return (
    <StyledButton type="button" primary={props.isPrimary}>
      {props.buttonText}
    </StyledButton>
  );
};

export default Button;
