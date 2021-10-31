import React from "react";
import { StyledLi } from "./StyledLi";

const Li = ({ children, nav__item }) => {
  return <StyledLi nav__item={nav__item}>{children}</StyledLi>;
};

export default Li;
