import React from "react";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Link from "../../atoms/Link";

const NavLogo = () => {
  return (
    <Div>
      <Link to="/" headLink>
        <Heading headingType="h3" headLogo>
          Mari.
        </Heading>
      </Link>
    </Div>
  );
};

export default NavLogo;
