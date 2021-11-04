import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 200;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.greyTransparent};
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #3d3d3d;
  backdrop-filter: saturate(180%) blur(20px);
`;
