import styled, { css } from 'styled-components';

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
    min-height: 100vh;
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
      height: calc(100vh - 40px);
      padding: 80px 0 20px;
      margin: 0 20px;

      @media (max-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
        padding: 10% 0 20px;
      }

      @media (min-width: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
        padding-top: 30px;
      }
      @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
        padding-top: 60px;
      }
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
      /* width: 324px;
      height: 324px; */
      height: 40vh;
      width: 40vh;
      max-width: 300px;
      max-height: 300px;
      padding: 60px;
      border-radius: 50%;
      margin-bottom: 20px;

      @media (max-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
        padding: 15%;
        margin-bottom: 0;
      }

      @media (min-width: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
        padding: 10px;
        height: 30vh;
        width: 30vh;
        margin-bottom: 0;
      }
    `}

      &#about {
    padding-bottom: 80px;

    @media (min-width: ${({ theme }) => theme.devices.desktop}) {
      display: grid;
      grid-area: center;
    }
  }

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

      @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
          theme.devices.desktop}) {
        width: 60%;
      }
    `}
    ${({ aboutMeText__slider }) =>
    aboutMeText__slider &&
    css`
      width: 80%;
      place-self: center;
      max-width: 800px;
      margin-top: 80px;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        grid-area: 1 / 3;
        margin-top: 0;
      }

      @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
          theme.devices.laptop}) {
        max-width: 400px;
      }

      @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
          theme.devices.desktop}) {
        max-width: 400px;
      }
    `}

    ${({ projectsViews__wrapper }) =>
    projectsViews__wrapper &&
    css`
      height: 100%;
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.black};
    `}

    ${({ sectionProjects }) => sectionProjects && css``}

    ${({ sectionProjects__wrapper }) => sectionProjects__wrapper && css``}

    ${({ sectionProjects__container }) =>
    sectionProjects__container &&
    css`
      display: flex;
      height: 3000px;
    `}

    ${({ sectionProjects__containerTwo }) =>
    sectionProjects__containerTwo &&
    css`
      margin-top: 40px;
      width: 100%;
      height: 400px;
    `}

    ${({ sectionProjects__projectsCards }) => sectionProjects__projectsCards && css``}

    ${({ sectionProjects__projectsCard }) =>
    sectionProjects__projectsCard &&
    css`
      /* position: absolute;
      height: 300px;
      width: 100%;
      padding: 10%;
      background-color: ${({ theme }) => theme.colors.blackGrey};
      border: 1px solid hsla(0, 0%, 51.4%, 0.16);

      &.card {
        border-radius: 50px;
        height: 380px;
      } */
    `}

    ${({ technologies__line }) =>
    technologies__line &&
    css`
      height: 470px;
      width: 1px;
      grid-area: 2 / 2 / 5 / 2;
      align-self: start;
      background-image: linear-gradient(
        0deg,
        hsla(0, 0%, 53.3%, 0),
        hsla(0, 0%, 53.3%, 0.3) 20%,
        hsla(0, 0%, 53.3%, 0.3) 80%,
        hsla(0, 0%, 53.3%, 0)
      );
    `}

    ${({ technologies }) =>
    technologies &&
    css`
      width: 100%;
      padding-bottom: 150px;
    `}

    ${({ technologies__wrapper }) =>
    technologies__wrapper &&
    css`
      width: 100%;
      max-width: 1000px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      grid-template-rows: auto 100px 100px 100px 100px;
      gap: 20px 10px;
      place-items: center;
      margin: 0 auto;
    `}

    ${({ technologies__card }) =>
    technologies__card &&
    css`
      width: 100px;
      height: 100px;
      border-radius: 25px;
      background-color: ${({ theme }) => theme.colors.blackGrey};
      border: 1px solid hsla(0, 0%, 51.4%, 0.16);
      display: grid;
      & img {
        grid-area: center;
        height: 52px;
        width: 52px;
        @media (min-width: ${({ theme }) => theme.devices.tablet}) {
          height: 54px;
          width: 54px;
        }
        @media (min-width: ${({ theme }) => theme.devices.desktop}) {
          height: 56px;
          width: 56px;
        }
        @media (min-width: ${({ theme }) => theme.devices.desktopM}) {
          height: 58px;
          width: 58px;
        }
        @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
          height: 60px;
          width: 60px;
        }
      }

      &.card8 {
        grid-area: 5 / 3 / 5 / 3;
      }
    `}

    ${({ contactViews }) => contactViews && css``}

    
    ${({ footerText }) =>
    footerText &&
    css`
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      place-items: center;
      padding: 120px 10px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        padding: 200px 0;
      }

      @media screen and (orientation: landscape) and (min-width: ${({ theme }) =>
          theme.devices.tablet}) {
        padding: 50px 0 25px;
      }

      @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
          theme.devices.desktop}) {
        padding: 100px 0 70px;
      }
    `}
      
    ${({ footerLink }) => footerLink && css``}

    ${({ footerLink__content }) =>
    footerLink__content &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      max-width: 1000px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        & > div {
          display: flex;
        }

        width: 90%;
        margin: 0 auto 30px;
        align-content: center;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    `}

    ${({ footerLink__line }) =>
    footerLink__line &&
    css`
      margin: 30px auto;
      height: 1px;
      width: 90%;
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 53.3%, 0),
        hsla(0, 0%, 53.3%, 0.3) 20%,
        hsla(0, 0%, 53.3%, 0.3) 80%,
        hsla(0, 0%, 53.3%, 0)
      );
    `}

    ${({ skills }) =>
    skills &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
      padding-bottom: 150px;
    `}

    ${({ skillsDescription }) =>
    skillsDescription &&
    css`
      width: 100%;
      max-width: 800px;
      padding: 0 5%;
      margin: 0 auto;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        max-width: 1000px;
        padding: 0;
        align-items: center;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 300px 300px;
      }
    `}

    ${({ skillsDescription__descriptionContent }) =>
    skillsDescription__descriptionContent &&
    css`
      background-color: ${({ theme }) => theme.colors.blackGrey};
      border: 1px solid hsla(0, 0%, 51.4%, 0.16);
      border-radius: 25px;
      padding: 10%;

      &:first-child {
        margin-bottom: 40px;
      }

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        height: 100%;
        grid-area: 2 / 2;
        display: grid;
        place-items: center;
        &:first-child {
          grid-area: 1 / 1;
          margin-bottom: 0;
        }
      }
    `}
`;
