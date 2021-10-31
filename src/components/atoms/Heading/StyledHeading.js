import styled, { css } from "styled-components";

export const H1 = styled.h1``;
export const H2 = styled.h2``;
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
