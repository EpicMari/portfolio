import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  ${({ meImg }) =>
    meImg &&
    css`
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 0 50px ${({ theme }) => theme.colors.grey};
    `}
`;
