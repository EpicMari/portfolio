import React from 'react';
import Footer from '../components/atoms/Footer';
import ContantContent from '../components/organisms/ContactContent';
import { links } from '../utils/links';

const Contact = () => {
  return (
    <Footer id={links.contact}>
      <ContantContent />
    </Footer>
  );
};

export default Contact;
