import styled, { css } from "styled-components";

export const StyledUl = styled.ul`
  ${({ nav__list }) =>
    nav__list &&
    css`
      width: 85%;
      margin-left: auto;
      margin-right: auto;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        margin: 0;
        display: flex;
      }
    `}
`;
