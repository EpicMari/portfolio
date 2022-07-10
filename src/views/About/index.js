import React from 'react';
import AboutContent from '../../components/organisms/AboutContent';
import { links } from '../../utils/links';
import { StyledSection } from './StyledAbout';

const About = () => {
  return (
    <StyledSection id={links.about}>
      <AboutContent />
    </StyledSection>
  );
};

export default About;
