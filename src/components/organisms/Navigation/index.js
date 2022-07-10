import React, { useEffect, useState } from 'react';
import NavDesktop from '../../molecules/NavDesktop';
import NavMobile from '../../molecules/NavMobile';
import { StyledNav } from './StyledNavigation';

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState();
  const handleWidth = () => {
    if (window.innerWidth < 769) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener('resize', handleWidth);
  }, []);
  return <StyledNav>{toggleNav ? <NavMobile /> : <NavDesktop />}</StyledNav>;
};

export default Navigation;
