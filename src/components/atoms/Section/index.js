import React from 'react';
import { StyledSection } from './StyledSection';

const Section = ({ children, id, className, skills, projectsViews }) => {
  return (
    <StyledSection id={id} className={className} skills={skills} projectsViews={projectsViews}>
      {children}
    </StyledSection>
  );
};

export default Section;
