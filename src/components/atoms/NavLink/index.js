import React from "react";
import { StyledNavLink } from "./StyledNavLink";

const NavLink = ({ children, to }) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
};

export default NavLink;
