import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import CadastrarDisciplina from "../pages/disciplina/cadastrar/Index";
import IniciarPBL from "../pages/pbl/cadastrar/Index"
import DashBoardProfessor from "../pages/professor/dashboard/dashboard"
import Dashboard from "../pages/dashboard";


   

const Routes = () => (
  <Switch>
    <Route path="/pbl" exact component={DashBoardProfessor} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/iniciar-pbl" exact component={IniciarPBL} />
    <Route path="/alunos" component={ConsultarAlunos} />
    <Route path="/perfil-usuario" component={PerfilUsuario} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/cadastrar-disciplina" component={CadastrarDisciplina} />
  </Switch>
);

export default Routes;
