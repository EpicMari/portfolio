import React from 'react';
import Nav from '../../atoms/Nav';
import NavDesktop from '../../molecules/NavDesktop';
import NavMobile from '../../molecules/NavMobile';

const Navigation = () => {
  return (
    <Nav>
      <NavMobile />
      <NavDesktop />
    </Nav>
  );
};

export default Navigation;
