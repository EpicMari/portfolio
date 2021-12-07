import React from "react";
import Div from "../../atoms/Div";
import Link from "../../atoms/Link";
import Paragraph from "../../atoms/Paragraph";

const FooterLink = () => {
  return (
    <Div footerLink>
      <Div footerLink__line className="line__decoration"></Div>
      <Div footerLink__content>
        <Div>
          <Link href="https://www.linkedin.com/" target="_blank">
            <Paragraph footerLink__link>LinkedIn</Paragraph>
          </Link>
          <Link href="https://github.com/EpicMari" target="_blank">
            <Paragraph footerLink__link>GitHub</Paragraph>
          </Link>
        </Div>
        <Paragraph footerLink__me>martin reinicke 2021 ©</Paragraph>
      </Div>
    </Div>
  );
};

export default FooterLink;
