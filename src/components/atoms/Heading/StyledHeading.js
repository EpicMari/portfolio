import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  text-align: center;
  ${({ sectionMe__jobPosition }) =>
    sectionMe__jobPosition &&
    css`
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontSize.xxxl};

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.xxs};
      }
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.xs};
      }
      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.s};
      }
      @media (min-width: ${({ theme }) => theme.devices.desktopM}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.m};
      }
      @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.l};
      }
      @media (min-width: ${({ theme }) => theme.devices.desktopXl}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.xl};
      }
      @media (min-width: ${({ theme }) => theme.devices.screenFullHd}) {
        font-size: ${({ theme }) => theme.fontSize.bigFont.xxl};
      }
      @media (max-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }
      @media (max-height: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    `}
`;
export const H2 = styled.h2`
  text-align: center;

  ${({ sectionHeader }) =>
    sectionHeader &&
    css`
      text-transform: uppercase;
      font-size: 2em;
      margin: 20px 0;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: 3.5vw;
      }
    `}

  ${({ sectionMe__name }) =>
    sectionMe__name &&
    css`
      margin-bottom: 20px;

      @media (max-height: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    `}

  ${({ aboutMeText__heading }) =>
    aboutMeText__heading &&
    css`
      margin: 40px 0;
      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        grid-area: 1 / 2;
        transform: rotate(-90deg);
        margin: 0;
      }
    `}

    ${({ technologies__heading }) =>
    technologies__heading &&
    css`
      width: 100%;
      padding: 0 20px;
      margin: 0 0 60px;
      grid-area: 1 / 1 / 1 / 4;

      @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
        margin: 0 0 100px;
      }
    `}
`;
export const H3 = styled.h3`
  ${({ headLogo }) =>
    headLogo &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      padding: 10px 10px;
    `}

  ${({ footerText__heading }) =>
    footerText__heading &&
    css`
      text-align: center;
      margin-bottom: 5%;
      font-size: 10vw;

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: 8vw;
      }

      @media (min-width: ${({ theme }) => theme.devices.desktopS}) {
        font-size: 6vw;
      }

      @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
        font-size: 4vw;
      }

      @media (min-width: ${({ theme }) => theme.devices.desktopXl}) {
        margin-bottom: 3%;
      }

      @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
          theme.devices.desktop}) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }

      @media screen and (orientation: portrait) and (max-width: ${({ theme }) =>
          theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
      }
    `}
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;
