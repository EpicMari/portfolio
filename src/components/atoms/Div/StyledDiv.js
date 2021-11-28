import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  &.navWrapper {
    max-width: 1000px;
    margin: 0 auto;
  }

  &.nav__box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
  }

  &.viewsWrapper {
    height: 100vh;
    padding-top: 40px;
  }

  ${({ nav }) =>
    nav &&
    css`
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        display: none;
      }
    `}
  ${({ navDesktop }) =>
    navDesktop &&
    css`
      display: none;
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        display: block;
      }
    `}

  ${({ nav__menu }) =>
    nav__menu &&
    css`
      display: none;
      box-shadow: 0px 6px 8px rgba(19, 19, 19, 0.7);

      &.active {
        position: fixed;
        top: 40px;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

  ${({ nav__content }) =>
    nav__content &&
    css`
      display: flex;
      align-items: center;
      position: relative;
      width: 0;
      height: 0;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.blackGrey};
      animation: 0.7s grow ease forwards;
      text-align: center;

      @keyframes grow {
        100% {
          height: 100vh;
          width: 100vw;
        }
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        animation-iteration-count: 0;
        height: 40px;
        width: auto;
        background-color: transparent;
      }
    `}
    ${({ buttonMenu }) =>
    buttonMenu &&
    css`
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        display: none;
      }
    `}

    ${({ sectionMe }) =>
    sectionMe &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 110px 0 20px;
      margin: 0 20px;
    `}

    ${({ scrollBalls }) =>
    scrollBalls &&
    css`
      position: relative;
      width: 10px;
      height: 60px;
      margin: 0 auto;

      & .scrollBalls__1,
      & .scrollBalls__2,
      & .scrollBalls__3 {
        position: absolute;
        border-radius: 50%;
        height: 10px;
        width: 10px;
        background-color: ${({ theme }) => theme.colors.white};
        animation-name: ball1;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
      }

      & .scrollBalls__2 {
        animation-name: ball2;
      }

      & .scrollBalls__3 {
        animation-name: ball3;
      }

      @keyframes ball1 {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        40%,
        100% {
          opacity: 1;
          transform: translateY(50px);
        }
      }
      @keyframes ball2 {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0.6;
        }
        60% {
          transform: translateY(50px);
          opacity: 0.6;
        }
        61% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes ball3 {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0.3;
        }
        90% {
          transform: translateY(50px);
          opacity: 0.3;
        }
        91% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    `}

    ${({ sectionMe__img }) =>
    sectionMe__img &&
    css`
      width: 324px;
      height: 324px;
      border-radius: 50%;
      margin-bottom: 40px;
    `}

    ${({ aboutMeText }) =>
    aboutMeText &&
    css`
      display: grid;
      grid-template-rows: 0.2fr auto 0.8fr;
      height: 100%;
      width: 100%;
      place-items: center;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr auto 1fr;
      }
    `}

    ${({ aboutMeText__text }) =>
    aboutMeText__text &&
    css`
      width: 80%;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
      }
    `}
    ${({ aboutMeText__slider }) =>
    aboutMeText__slider &&
    css`
      width: 80%;
      place-self: center;
      max-width: 800px;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        grid-area: 1 / 3;
      }
    `}

    ${({ projectsViews__wrapper }) =>
    projectsViews__wrapper &&
    css`
      height: 300vh;
    `}

    ${({ sectionProjects }) =>
    sectionProjects &&
    css`
      position: sticky;
      top: 0;
      z-index: 1;
    `}

    ${({ sectionProjects__wrapper }) =>
    sectionProjects__wrapper &&
    css`
      overflow: hidden;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.black};
      padding: 80px 0;
    `}

    ${({ sectionProjects__container }) =>
    sectionProjects__container &&
    css`
      position: relative;
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
    `}

    ${({ sectionProjects__sectionTitle }) =>
    sectionProjects__sectionTitle &&
    css`
      position: absolute;
      width: 100%;
      max-width: 1000px;
    `}

    ${({ sectionProjects__projectsCards }) =>
    sectionProjects__projectsCards &&
    css`
      position: relative;
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}

    ${({ sectionProjects__projectsCard }) =>
    sectionProjects__projectsCard &&
    css`
      position: absolute;
      height: 300px;
      width: 100%;
      padding: 10%;
      background-color: ${({ theme }) => theme.colors.blackGrey};
      border: 1px solid hsla(0, 0%, 51.4%, 0.16);

      &.card {
        border-radius: 50px;
        height: 380px;
      }
    `}
`;
