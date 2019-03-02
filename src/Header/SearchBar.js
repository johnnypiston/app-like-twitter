import React from 'react';
import styled from 'styled-components';
import IconMagnifier from '../common/icons/Magnifier';

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 16px;
  display: block;
  font-size: 12px;
  margin-left: auto;
  padding: 8px 35px 9px 11px;
  width: 220px;

  &:-ms-input-placeholder {
    color: #687b8a;
  }

  &:-moz-placeholder {
    color: #687b8a;
  }

  &::-moz-placeholder {
    color: #687b8a;
  }

  &::-webkit-input-placeholder {
    color: #687b8a;
  }
`;

const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 0;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 15px;
`;

const SearchBar = function () {
  return (
    <Form action="">
      <Input type="search" placeholder="Search Twitter" />
      <SubmitButton type="submit">
        Search
        <IconMagnifier />
      </SubmitButton>
    </Form>
  );
};

export default SearchBar;
