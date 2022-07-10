import React from 'react';
import Link from '../../atoms/Link';
import {
  StyledBoxLink,
  StyledContent,
  StyledDecorationLine,
  StyledNameSurname,
  StyledParagraph,
  StyledWrapper,
} from './StyledFooterLink';

const FooterLink = () => {
  return (
    <StyledWrapper>
      <StyledDecorationLine></StyledDecorationLine>
      <StyledContent>
        <StyledBoxLink>
          <Link href="https://www.linkedin.com/" target="_blank">
            <StyledParagraph>LinkedIn</StyledParagraph>
          </Link>
          <Link href="https://github.com/EpicMari" target="_blank">
            <StyledParagraph>GitHub</StyledParagraph>
          </Link>
        </StyledBoxLink>
        <StyledNameSurname>martin reinicke 2022 ©</StyledNameSurname>
      </StyledContent>
    </StyledWrapper>
  );
};

export default FooterLink;
