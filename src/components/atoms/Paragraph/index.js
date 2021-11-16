import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({
  children,
  nav__description,
  aboutMeText__description,
}) => {
  return (
    <StyledParagraph
      nav__description={nav__description}
      aboutMeText__description={aboutMeText__description}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
