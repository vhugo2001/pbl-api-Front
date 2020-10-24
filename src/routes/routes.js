import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import Info from "../pages/info";

import CadastrarDisciplina from "../pages/disciplina/cadastrar/Index";


import IniciarPBL from "../pages/pbl/cadastrar/Index"
import Dashboard from "../pages/dashboard";

const Routes = () => (
  <Switch>
    <Route path="/iniciar-pbl" component={IniciarPBL} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/alunos" component={ConsultarAlunos} />
    <Route path="/perfil-usuario" component={PerfilUsuario} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/cadastrar-disciplina" component={CadastrarDisciplina} />
    <Route exact path="/" component={Info} />
  </Switch>
);

export default Routes;
