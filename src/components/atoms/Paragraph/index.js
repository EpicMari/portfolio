import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({ children, nav__description }) => {
  return (
    <StyledParagraph nav__description={nav__description}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
