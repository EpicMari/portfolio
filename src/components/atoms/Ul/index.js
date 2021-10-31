import React from "react";
import { StyledUl } from "./StyledUl";

const Ul = ({ children, nav__list }) => {
  return <StyledUl nav__list={nav__list}>{children}</StyledUl>;
};

export default Ul;
