import React from 'react';
import ContantContent from '../../components/organisms/ContactContent';
import { links } from '../../utils/links';
import { StyledFooter } from './StyledContact';

const Contact = () => {
  return (
    <StyledFooter id={links.contact}>
      <ContantContent />
    </StyledFooter>
  );
};

export default Contact;
