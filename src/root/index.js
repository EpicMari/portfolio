import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import { themes } from "../themes/themes";
import NavigationTemplate from "../templates/NavigationTemplate";
import Home from "../views/Home";

const Root = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <NavigationTemplate>
        <Home />
      </NavigationTemplate>
    </ThemeProvider>
  );
};

export default Root;
