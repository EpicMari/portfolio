import React from 'react';
import Div from '../../atoms/Div';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Link';

const FooterText = () => {
  return (
    <Link href="mailto:reinicke.mari@gmail.com">
        <Div footerText>
          <Heading headingType="h3" footerText__heading>
            Interested in working with me?
          </Heading>
          <Paragraph footerText__link>reinicke.mari@gmail.com</Paragraph>
        </Div>
      </Link>
  );
};

export default FooterText;
