import React from 'react';
import HomeContent from '../../components/organisms/HomeContent';
import { links } from '../../utils/links';
import { StyledSection } from '../About/StyledAbout';

const Home = () => {
  return (
    <StyledSection id={links.home}>
      <HomeContent />
    </StyledSection>
  );
};

export default Home;
