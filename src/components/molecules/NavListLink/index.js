import React from "react";
import Div from "../../atoms/Div";
import Li from "../../atoms/Li";
import Ul from "../../atoms/Ul";
import Paragraph from "../../atoms/Paragraph";

const NavListLink = () => {
  return (
    <Div nav__content>
      <Ul nav__list>
        <Li nav__item>
          <Paragraph nav__description>Projects</Paragraph>
        </Li>
        <Li nav__item>
          <Paragraph nav__description>About</Paragraph>
        </Li>
        <Li nav__item>
          <Paragraph nav__description>Contact</Paragraph>
        </Li>
      </Ul>
    </Div>
  );
};

export default NavListLink;
