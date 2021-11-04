import styled, { css } from "styled-components";

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
    `}
`;
export const H2 = styled.h2`
  text-align: center;
  ${({ sectionMe__name }) =>
    sectionMe__name &&
    css`
      margin-bottom: 20px;
    `}
`;
export const H3 = styled.h3`
  ${({ headLogo }) =>
    headLogo &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      padding: 10px 10px;
    `}
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;
