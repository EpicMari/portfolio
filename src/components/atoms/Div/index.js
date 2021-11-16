import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  className,
  nav__wrapper,
  nav__menu,
  nav__content,
  buttonMenu,
  navDesktop,
  navDesktop__content,
  sectionMe__wrapper,
  sectionMe__img,
  scrollBalls,
  aboutMeText__wrapper,
  aboutMeText__text,
  aboutMeText__slider,
}) => {
  return (
    <StyledDiv
      className={className}
      nav__wrapper={nav__wrapper}
      nav__menu={nav__menu}
      nav__content={nav__content}
      buttonMenu={buttonMenu}
      navDesktop={navDesktop}
      navDesktop__content={navDesktop__content}
      sectionMe__wrapper={sectionMe__wrapper}
      sectionMe__img={sectionMe__img}
      scrollBalls={scrollBalls}
      aboutMeText__wrapper={aboutMeText__wrapper}
      aboutMeText__text={aboutMeText__text}
      aboutMeText__slider={aboutMeText__slider}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
