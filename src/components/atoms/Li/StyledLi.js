import styled, { css } from "styled-components";

export const StyledLi = styled.li`
  ${({ nav__item }) =>
    nav__item &&
    css`
      width: min-content;
      margin: 0 0 30px;
      text-align: left;
      text-transform: uppercase;
      transform: translateY(50px);
      opacity: 0;
      animation: 2s slideUp ease forwards 0.5s;
      position: relative;

      @keyframes slideUp {
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        animation-iteration-count: 0;
        transform: translateY(0);
        opacity: 1;
        margin: 0;
        margin-left: 20px;
      }
    `}
`;
