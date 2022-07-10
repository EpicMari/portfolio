import React, { useState } from 'react';
import NavLogo from '../NavLogo';
import NavListLink from '../NavListLink';
import {
  StyledBoxButton,
  StyledButton,
  StyledContainer,
  StyledListContainer,
  StyledWrapper,
} from './StyledNavMobile';

const NavMobile = () => {
  const [menuOnOff, setMenuOnOff] = useState(false);

  const openMenu = () => {
    setMenuOnOff(!menuOnOff);
  };

  const closeMenu = () => {
    setMenuOnOff(false);
  };
  return (
    <StyledWrapper>
      <StyledContainer>
        <NavLogo closeMenu={closeMenu} navMobile="navMobile" />
        <StyledBoxButton>
          <StyledButton onClick={openMenu}>Menu</StyledButton>
        </StyledBoxButton>
      </StyledContainer>
      <StyledListContainer className={menuOnOff && 'active'}>
        <NavListLink closeMenu={closeMenu} navMobile="navMobile" />
      </StyledListContainer>
    </StyledWrapper>
  );
};

export default NavMobile;
