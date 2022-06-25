import React from 'react';
import Div from '../components/atoms/Div';
import HomeContent from '../components/organisms/HomeContent';
import { links } from '../utils/links';

const Home = () => {
  return (
    <Div className="viewsWrapper" id={links.home}>
      <HomeContent />
    </Div>
  );
};

export default Home;
