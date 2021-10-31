import React from "react";
import { StyledLink } from "./StyledLink";

const Link = ({ children, to, headLink }) => {
  return (
    <StyledLink to={to} headLink={headLink}>
      {children}
    </StyledLink>
  );
};

export default Link;
