import React from "react";
import { StyledNavLink } from "./StyledNavLink";

const NavLink = ({ children, to, nav__NavLink }) => {
  return (
    <StyledNavLink to={to} nav__NavLink={nav__NavLink}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
