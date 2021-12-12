import React from "react";
import Div from "../components/atoms/Div";
import ContantContent from "../components/organisms/ContactContent";
import { links } from "../utils/links";

const Contact = () => {
  return (
    <Div contactViews id={links.contact}>
      <ContantContent />
    </Div>
  );
};

export default Contact;
