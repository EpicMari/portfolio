import React from "react";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import Router from "../routing";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default Root;
