import React from "react";
import { routes } from "../../../routes";
import Div from "../../atoms/Div";
import Li from "../../atoms/Li";
import NavLink from "../../atoms/NavLink";
import Ul from "../../atoms/Ul";
import Paragraph from "../../atoms/Paragraph";

const NavListLink = () => {
  return (
    <Div nav__content>
      <Ul nav__list>
        <Li nav__item>
          <NavLink to={routes.projects} nav__NavLink>
            <Paragraph nav__description>Projects</Paragraph>
          </NavLink>
        </Li>
        <Li nav__item>
          <NavLink to={routes.about} nav__NavLink>
            <Paragraph nav__description>About</Paragraph>
          </NavLink>
        </Li>
        <Li nav__item>
          <NavLink to={routes.contact} nav__NavLink>
            <Paragraph nav__description>Contact</Paragraph>
          </NavLink>
        </Li>
      </Ul>
    </Div>
  );
};

export default NavListLink;
