import React from 'react';
import Section from '../components/atoms/Section';
import AboutContent from '../components/organisms/AboutContent';
import { links } from '../utils/links';

const About = () => {
  return (
    <Section className="viewsWrapper" id={links.about}>
      <AboutContent />
    </Section>
  );
};

export default About;
