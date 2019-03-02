import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from './Header/Header';
import ProfilePage from './ProfilePage/ProfilePage';

const ContentWrap = styled.div`
  padding-top: 46px;
`;

const App = function () {
  return (
    <Router>
      <div>
        <Helmet defaultTitle="Twitter" titleTemplate="%s | Twitter">
          <meta name="description" content="Twitter" />
        </Helmet>
        <Header />
        <ContentWrap>
          <Switch>
            <Route path="/EveryInteract" component={ProfilePage} />
            <Redirect exact from="/" to="/EveryInteract" />
          </Switch>
        </ContentWrap>
      </div>
    </Router>
  );
};

export default App;
