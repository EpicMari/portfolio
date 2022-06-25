import styled, { css } from 'styled-components';

export const StyledParagraph = styled.p`
  ${({ nav__description }) =>
    nav__description &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxl};
      letter-spacing: 2px;
      padding: 10px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSize.l};
        position: relative;
        &::after {
          position: absolute;
          content: '';
          top: 80%;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: ${({ theme }) => theme.colors.white};
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.5s;
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: center;
        }
      }
    `}

  ${({ aboutMeText__description }) =>
    aboutMeText__description &&
    css`
      font-size: 1.5em;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: 2.3vw;
      }

      &:last-child {
        margin-top: 40px;
      }

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        width: 70%;
      }
    `}

    ${({ footerText__link }) =>
    footerText__link &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
      display: inline-block;
      padding: 10px 20px;
      position: relative;
      &::after {
        position: absolute;
        content: '';
        top: 90%;
        left: 0;
        width: 100%;
        height: 1.5px;
        background: ${({ theme }) => theme.colors.white};
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.5s;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: center;
      }

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }
    `}

    ${({ footerLink__link }) =>
    footerLink__link &&
    css`
      text-align: center;
      padding: 10px 15px;
      opacity: 0.7;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }
    `}

    ${({ footerLink__me }) =>
    footerLink__me &&
    css`
      text-transform: uppercase;
      margin-top: 10px;
      opacity: 0.7;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        margin-top: 0;
      }
    `}

    ${({ skillsDescription__description }) =>
    skillsDescription__description &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        font-size: 20px;
      }
    `}
`;
