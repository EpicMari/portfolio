import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({
  children,
  nav__description,
  aboutMeText__description,
  footerText__link,
  footerLink__link,
  footerLink__me,
  skillsDescription__description,
}) => {
  return (
    <StyledParagraph
      nav__description={nav__description}
      aboutMeText__description={aboutMeText__description}
      footerText__link={footerText__link}
      footerLink__link={footerLink__link}
      footerLink__me={footerLink__me}
      skillsDescription__description={skillsDescription__description}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
