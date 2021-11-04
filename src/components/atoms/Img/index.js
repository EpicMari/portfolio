import React from "react";
import { StyledImg } from "./StyledImg";

const Img = ({ src, alt, meImg }) => {
  return <StyledImg src={src} alt={alt} meImg={meImg} />;
};

export default Img;
