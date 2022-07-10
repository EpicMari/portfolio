import React from 'react';
import { links } from '../../../utils/links';
import Link from '../../atoms/Link';
import { StyledHeader } from './StyledNavLogo';

const NavLogo = ({ closeMenu, navMobile }) => {
  return (
    <div>
      {navMobile ? (
        <Link linkType="linkScroll" to={links.home} onClick={() => closeMenu()}>
          <StyledHeader>Mari.</StyledHeader>
        </Link>
      ) : (
        <Link linkType="linkScroll" to={links.home}>
          <StyledHeader>Mari.</StyledHeader>
        </Link>
      )}
    </div>
  );
};

export default NavLogo;
