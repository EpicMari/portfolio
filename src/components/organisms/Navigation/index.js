import React, { useEffect, useState } from 'react';
import Nav from '../../atoms/Nav';
import NavDesktop from '../../molecules/NavDesktop';
import NavMobile from '../../molecules/NavMobile';

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
  return <Nav>{toggleNav ? <NavMobile /> : <NavDesktop />}</Nav>;
};

export default Navigation;
