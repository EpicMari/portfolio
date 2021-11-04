import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledNavLink = styled(NavLink)`
  ${({ nav__NavLink }) => nav__NavLink && css``}
`;
