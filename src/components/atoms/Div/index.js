import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  className,
  style,
  onScroll,
  nav,
  nav__menu,
  nav__content,
  buttonMenu,
  navDesktop,
  navDesktop__content,
  sectionMe,
  sectionMe__img,
  scrollBalls,
  aboutMeText,
  aboutMeText__text,
  aboutMeText__slider,
  projectsViews__wrapper,
  sectionProjects,
  sectionProjects__wrapper,
  sectionProjects__container,
  sectionProjects__sectionTitle,
  sectionProjects__projectsCards,
  sectionProjects__projectsCard,
}) => {
  return (
    <StyledDiv
      className={className}
      style={style}
      onScroll={onScroll}
      nav={nav}
      nav__menu={nav__menu}
      nav__content={nav__content}
      buttonMenu={buttonMenu}
      navDesktop={navDesktop}
      navDesktop__content={navDesktop__content}
      sectionMe={sectionMe}
      sectionMe__img={sectionMe__img}
      scrollBalls={scrollBalls}
      aboutMeText={aboutMeText}
      aboutMeText__text={aboutMeText__text}
      aboutMeText__slider={aboutMeText__slider}
      projectsViews__wrapper={projectsViews__wrapper}
      sectionProjects={sectionProjects}
      sectionProjects__wrapper={sectionProjects__wrapper}
      sectionProjects__container={sectionProjects__container}
      sectionProjects__sectionTitle={sectionProjects__sectionTitle}
      sectionProjects__projectsCards={sectionProjects__projectsCards}
      sectionProjects__projectsCard={sectionProjects__projectsCard}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
