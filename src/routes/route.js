import React from "react";
import { Switch, Route } from "react-router-dom";

import Add from "../pages/add";
import Home from "../pages/home";
import Update from "../pages/update";
import Cadastro from "../pages/cadastro";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cadastro" component={Cadastro} />
    <Route path="/add" component={Add} />
    <Route path={"/update/:id"} component={Update} />
  </Switch>
);

export default Routes;
