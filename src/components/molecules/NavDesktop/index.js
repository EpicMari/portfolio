import React from "react";
import Div from "../../atoms/Div";
import NavListLink from "../NavListLink";
import NavLogo from "../NavLogo";

const NavDesktop = () => {
  return (
    <Div navDesktop className="navWrapper">
      <Div className="nav__box">
        <NavLogo />
        <NavListLink />
      </Div>
    </Div>
  );
};

export default NavDesktop;
