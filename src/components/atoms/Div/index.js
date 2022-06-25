import React from 'react';
import { StyledDiv } from './StyledDiv';

const Div = ({
  children,
  id,
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
  technologies,
  technologies__wrapper,
  technologies__line,
  technologies__card,
  contactViews,
  footerLink,
  footerText,
  footerLink__line,
  footerLink__content,
  skills,
  skillsDescription__descriptionContent,
  skillsDescription,
}) => {
  return (
    <StyledDiv
      id={id}
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
      technologies={technologies}
      technologies__wrapper={technologies__wrapper}
      technologies__line={technologies__line}
      technologies__card={technologies__card}
      contactViews={contactViews}
      footerLink={footerLink}
      footerText={footerText}
      footerLink__line={footerLink__line}
      footerLink__content={footerLink__content}
      skills={skills}
      skillsDescription__descriptionContent={skillsDescription__descriptionContent}
      skillsDescription={skillsDescription}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
