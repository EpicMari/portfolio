import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({ children, onClick, btnOpenMenu }) => {
  return (
    <StyledButton onClick={onClick} btnOpenMenu={btnOpenMenu}>
      {children}
    </StyledButton>
  );
};

export default Button;
