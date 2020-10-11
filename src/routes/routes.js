import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import ConsultarPBL from "../pages/consultarPBL";
import Info from "../pages/info";
import Login from "../pages/login";
import Teste from "../pages/teste/teste"

const Routes = () => (
  <Switch>
    <Route path="/teste" component={Teste} />
    <Route path="/login" component={Login} />
    <Route path="/consult" component={ConsultarPBL} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/" component={Info} />
  </Switch>
);

export default Routes;
