import styled, { css } from 'styled-components';

export const StyledSpan = styled.span`
  ${({ shortMe__span }) =>
    shortMe__span &&
    css`
      position: relative;
      z-index: 2;
    `}
`;
