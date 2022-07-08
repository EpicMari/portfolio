import React from 'react';
import Section from '../components/atoms/Section';
import HomeContent from '../components/organisms/HomeContent';
import { links } from '../utils/links';

const Home = () => {
  return (
    <Section className="viewsWrapper" id={links.home}>
      <HomeContent />
    </Section>
  );
};

export default Home;
