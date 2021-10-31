import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 200;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.greyTransparent};
  top: 0;
  right: 0;
  left: 0;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  backdrop-filter: saturate(180%) blur(20px);
`;
