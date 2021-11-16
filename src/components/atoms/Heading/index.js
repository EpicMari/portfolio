import React from "react";
import { H1, H2, H3, H4, H5, H6 } from "./StyledHeading";

const Heading = ({
  children,
  headingType,
  headLogo,
  sectionMe__name,
  sectionMe__jobPosition,
  aboutMeText__heading,
}) => {
  const _renderHeading = () => {
    switch (headingType) {
      case "h1":
        return (
          <H1 sectionMe__jobPosition={sectionMe__jobPosition}>{children}</H1>
        );
      case "h2":
        return (
          <H2
            sectionMe__name={sectionMe__name}
            aboutMeText__heading={aboutMeText__heading}
          >
            {children}
          </H2>
        );
      case "h3":
        return <H3 headLogo={headLogo}>{children}</H3>;
      case "h4":
        return <H4>{children}</H4>;
      case "h5":
        return <H5>{children}</H5>;
      default:
        return <H6>{children}</H6>;
    }
  };
  return <>{_renderHeading()}</>;
};

export default Heading;
