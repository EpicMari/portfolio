import React from 'react';
import Div from '../components/atoms/Div';
import AboutContent from '../components/organisms/AboutContent';
import { links } from '../utils/links';

const About = () => {
  return (
    <Div className="viewsWrapper" id={links.about}>
      <AboutContent />
    </Div>
  );
};

export default About;
