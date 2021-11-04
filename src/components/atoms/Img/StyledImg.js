import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  ${({ meImg }) =>
    meImg &&
    css`
      width: 324px;
      height: 324px;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 0 50px ${({ theme }) => theme.colors.grey};
    `}
`;
