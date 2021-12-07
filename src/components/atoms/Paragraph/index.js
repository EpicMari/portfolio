import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({
  children,
  nav__description,
  aboutMeText__description,
  footerText__link,
  footerLink__link,
  footerLink__me,
}) => {
  return (
    <StyledParagraph
      nav__description={nav__description}
      aboutMeText__description={aboutMeText__description}
      footerText__link={footerText__link}
      footerLink__link={footerLink__link}
      footerLink__me={footerLink__me}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
