import React, { useState } from 'react';
import NavLogo from '../NavLogo';
import Button from '../../atoms/Button';
import Div from '../../atoms/Div';
import NavListLink from '../NavListLink';

const NavMobile = () => {
  const [menuOnOff, setMenuOnOff] = useState(false);

  const openMenu = () => {
    setMenuOnOff(!menuOnOff);
  };

  const closeMenu = () => {
    setMenuOnOff(false);
  };
  return (
    <Div nav className="navWrapper">
      <Div className="nav__box">
        <NavLogo closeMenu={closeMenu} navMobile="navMobile" />
        <Div buttonMenu>
          <Button onClick={openMenu} btnOpenMenu>
            Menu
          </Button>
        </Div>
      </Div>
      <Div nav__menu className={menuOnOff && 'active'}>
        <NavListLink closeMenu={closeMenu} navMobile="navMobile" />
      </Div>
    </Div>
  );
};

export default NavMobile;
