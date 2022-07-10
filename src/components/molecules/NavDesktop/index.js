import React from 'react';
import NavListLink from '../NavListLink';
import NavLogo from '../NavLogo';
import { StyledContent, StyledWrapper } from './StyledNavDesktop';

const NavDesktop = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <NavLogo />
        <NavListLink />
      </StyledContent>
    </StyledWrapper>
  );
};

export default NavDesktop;
