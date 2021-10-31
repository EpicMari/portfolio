import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ btnOpenMenu }) =>
    btnOpenMenu &&
    css`
      background: none;
      border: none;
      font-size: ${({ theme }) => theme.fontSize.l};
      color: ${({ theme }) => theme.colors.white};
      padding: 10px 10px;
    `}
`;
