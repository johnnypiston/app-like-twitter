import React from 'react';
import Recommendations from '../Recommendations/Recommendations';
import Trends from '../Trends/Trends';
import Footer from '../Footer/Footer';

const RightSidebar = function (props) {
  return (
    <aside>
      <Recommendations recommendations={props.recommendations} />
      <Trends trends={props.trends} />
      <Footer />
    </aside>
  );
};

export default RightSidebar;
