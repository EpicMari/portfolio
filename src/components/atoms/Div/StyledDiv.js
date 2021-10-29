import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ navMobile__container }) =>
    navMobile__container &&
    css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px;
    `}

  ${({ navMobile__menu }) =>
    navMobile__menu &&
    css`
      display: none;

      &.active {
        display: block;
      }
    `}
`;
