import styled, { css } from "styled-components";

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
          content: "";
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
`;
