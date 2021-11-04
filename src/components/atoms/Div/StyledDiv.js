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

  &.container {
  }

  ${({ nav__wrapper }) =>
    nav__wrapper &&
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

    ${({ sectionMe__wrapper }) =>
    sectionMe__wrapper &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 100vh;
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
`;
