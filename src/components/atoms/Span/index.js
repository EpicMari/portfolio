import React from "react";
import { StyledSpan } from "./StyledSpan";

const Span = ({ children, shortMe__span }) => {
  return <StyledSpan shortMe__span={shortMe__span}>{children}</StyledSpan>;
};

export default Span;
