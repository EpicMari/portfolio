import React from 'react';
import Link from '../../atoms/Link';
import { StyledDescription, StyledHeader, StyledParagraph } from './StyledFooterText';

const FooterText = () => {
  return (
    <Link href="mailto:reinicke.mari@gmail.com">
      <StyledDescription>
        <StyledHeader>Interested in working with me?</StyledHeader>
        <StyledParagraph>reinicke.mari@gmail.com</StyledParagraph>
      </StyledDescription>
    </Link>
  );
};

export default FooterText;
