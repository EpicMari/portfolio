import React from 'react';
import Div from '../../atoms/Div';
import Li from '../../atoms/Li';
import Ul from '../../atoms/Ul';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Link';
import { links } from '../../../utils/links';

const NavListLink = ({ closeMenu, navMobile }) => {
  return (
    <Div nav__content>
      {navMobile ? (
        <Ul nav__list>
          <Li nav__item>
            <Link linkType="linkScroll" to={links.about} onClick={() => closeMenu()}>
              <Paragraph nav__description>About</Paragraph>
            </Link>
          </Li>
          <Li nav__item>
            <Link linkType="linkScroll" to={links.projects} onClick={() => closeMenu()}>
              <Paragraph nav__description>Projects</Paragraph>
            </Link>
          </Li>
          <Li nav__item>
            <Link linkType="linkScroll" to={links.contact} onClick={() => closeMenu()}>
              <Paragraph nav__description>Contact</Paragraph>
            </Link>
          </Li>
        </Ul>
      ) : (
        <Ul nav__list>
          <Li nav__item>
            <Link linkType="linkScroll" to={links.about}>
              <Paragraph nav__description>About</Paragraph>
            </Link>
          </Li>
          <Li nav__item>
            <Link linkType="linkScroll" to={links.projects}>
              <Paragraph nav__description>Projects</Paragraph>
            </Link>
          </Li>
          <Li nav__item>
            <Link linkType="linkScroll" to={links.contact}>
              <Paragraph nav__description>Contact</Paragraph>
            </Link>
          </Li>
        </Ul>
      )}
    </Div>
  );
};

export default NavListLink;
