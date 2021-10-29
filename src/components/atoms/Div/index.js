import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  className,
  navMobile,
  navMobile__container,
  navMobile__menu,
}) => {
  return (
    <StyledDiv
      className={className}
      navMobile={navMobile}
      navMobile__container={navMobile__container}
      navMobile__menu={navMobile__menu}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
