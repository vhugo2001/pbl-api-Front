import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from '../Components/PrivatRouter/Router';

import listagemAtividade from "../pages/listagemAtividades/index";
import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import Cadastro from "../pages/cadastro";
import Info from "../pages/info";

import CadastrarDisciplina from "../pages/disciplina/cadastrar/Index";
import IniciarPBL from "../pages/pbl/cadastrar/Index"
import DashBoardProfessor from "../pages/professor/dashboard/dashboard"
import Dashboard from "../pages/dashboard";


   

const Routes = () => (
  <Switch>
    <PrivateRoute path="/admin/pbl" exact component={DashBoardProfessor} />
    <PrivateRoute path="/admin/dashboard" component={Dashboard} />
    <PrivateRoute path="/admin/iniciar-pbl" exact component={IniciarPBL} />
    <PrivateRoute path="/admin/alunos" component={ConsultarAlunos} />
    <PrivateRoute path="/admin/perfil-usuario" component={PerfilUsuario} />
    {/* <Route path="/cadastro" component={Cadastro} /> */}
    <PrivateRoute path="/admin/listagemAtividades" component={listagemAtividade} />
    <PrivateRoute path="/admin/cadastro" component={Cadastro} />
    <PrivateRoute path="/admin/cadastrar-disciplina" component={CadastrarDisciplina} />
  </Switch>
);

export default Routes;
