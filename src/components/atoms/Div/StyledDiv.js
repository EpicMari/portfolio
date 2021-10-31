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
`;
