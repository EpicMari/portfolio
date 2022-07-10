import React from 'react';
import Link from '../../atoms/Link';
import { links } from '../../../utils/links';
import { StyledWrapper, StyledList, StyledListItem, StyledParagraph } from './StyledNavListLink';

const NavListLink = ({ closeMenu, navMobile }) => {
  return (
    <StyledWrapper>
      {navMobile ? (
        <StyledList>
          <StyledListItem>
            <Link linkType="linkScroll" to={links.about} onClick={() => closeMenu()}>
              <StyledParagraph>About</StyledParagraph>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link linkType="linkScroll" to={links.projects} onClick={() => closeMenu()}>
              <StyledParagraph>Projects</StyledParagraph>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link linkType="linkScroll" to={links.contact} onClick={() => closeMenu()}>
              <StyledParagraph>Contact</StyledParagraph>
            </Link>
          </StyledListItem>
        </StyledList>
      ) : (
        <StyledList>
          <StyledListItem>
            <Link linkType="linkScroll" to={links.about}>
              <StyledParagraph>About</StyledParagraph>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link linkType="linkScroll" to={links.projects}>
              <StyledParagraph>Projects</StyledParagraph>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link linkType="linkScroll" to={links.contact}>
              <StyledParagraph>Contact</StyledParagraph>
            </Link>
          </StyledListItem>
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export default NavListLink;
