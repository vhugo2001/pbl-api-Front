import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/index";

const AuthRoutes = () => (
  <Switch>
     <Route exact path="/" component={Home} />
  </Switch>
);

export default AuthRoutes;
