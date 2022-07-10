import React from 'react';
import SkillsDescription from '../../molecules/SkillsDescription';
import Technologies from '../../molecules/Technologies';
import { StyledSection } from './StyledSkills';

const Skills = () => {
  return (
    <StyledSection id="technologies">
      <Technologies />
      <SkillsDescription />
    </StyledSection>
  );
};

export default Skills;
