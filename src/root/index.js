import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import { themes } from "../themes/themes";
import NavigationTemplate from "../templates/NavigationTemplate";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";

const Root = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <NavigationTemplate>
        <Home />
        <About />
        <Projects />
      </NavigationTemplate>
    </ThemeProvider>
  );
};

export default Root;
