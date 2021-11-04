import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  ${({ headLink }) => headLink && css``}
`;
