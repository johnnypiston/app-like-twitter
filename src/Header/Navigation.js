import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconHome from '../common/icons/Home';
import IconMoments from '../common/icons/Moments';
import IconNotifications from '../common/icons/Notifications';
import IconMessage from '../common/icons/Message';

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 -10px;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
`;

const MenuLink = styled(Link)`
  align-items: center;
  color: #667580;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
  padding: 10px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #1da1f2;
  }

  span {
    margin-left: 5px;
  }
`;

const Navigation = function () {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink to="/">
            <IconHome />
            <span>Home</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/moments">
            <IconMoments />
            <span>Moments</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/notifications">
            <IconNotifications />
            <span>Notifications</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/messages">
            <IconMessage />
            <span>Messages</span>
          </MenuLink>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Navigation;
