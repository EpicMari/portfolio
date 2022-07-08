import React from 'react';
import Section from '../../atoms/Section';
import SkillsDescription from '../../molecules/SkillsDescription';
import Technologies from '../../molecules/Technologies';

const Skills = () => {
  return (
    <Section skills>
      <Technologies />
      <SkillsDescription />
    </Section>
  );
};

export default Skills;
