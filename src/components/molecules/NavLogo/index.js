import React from "react";
import { links } from "../../../utils/links";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Link from "../../atoms/Link";

const NavLogo = () => {
  return (
    <Div>
      <Link linkType="linkScroll" to={links.home}>
        <Heading headingType="h3" headLogo>
          Mari.
        </Heading>
      </Link>
    </Div>
  );
};

export default NavLogo;
