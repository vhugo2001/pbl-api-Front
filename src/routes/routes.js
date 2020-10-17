import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import Info from "../pages/info";


import Teste from "../pages/teste/teste"

const Routes = () => (
  <Switch>
    <Route path="/iniciar-pbl" component={Teste} />
    <Route path="/alunos" component={ConsultarAlunos} />
    <Route path="/perfil-usuario" component={PerfilUsuario} />
    <Route path="/cadastro" component={Cadastro} />
    <Route exact path="/" component={Info} />
  </Switch>
);

export default Routes;
