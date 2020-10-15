import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import ConsultarAlunos from "../pages/consultarAlunos";
import ConsultarPBL from "../pages/consultarPBL";
import Info from "../pages/info";

import Teste from "../pages/teste/teste"

const Routes = () => (
  <Switch>
    <Route path="/iniciar-pbl" component={Teste} />
    <Route path="/alunos" component={ConsultarAlunos} />
    <Route path="/consult" component={ConsultarPBL} />
    <Route path="/cadastro" component={Cadastro} />
    <Route exact path="/" component={Info} />
  </Switch>
);

export default Routes;
