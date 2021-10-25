import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Projects from "../views/Projects";
import NavigationTemplate from "../templates/NavigationTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.projects} component={Projects} />
          <Route path={routes.about} component={About} />
          <Route path={routes.contact} component={Contact} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
