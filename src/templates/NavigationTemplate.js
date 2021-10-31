import React from "react";
import Navigation from "../components/organisms/Navigation";

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default NavigationTemplate;
