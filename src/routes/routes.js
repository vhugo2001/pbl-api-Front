import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../Components/PrivatRouter/Router";

import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import Cadastro from "../pages/cadastro";
import ManterDisciplina from "../pages/disciplina/manter/Index";
import ManterTema from "../pages/tema/manter/Index";
import ListagemTarefas from "../pages/listagemTarefas/index";
import IniciarPBL from "../pages/pbl/cadastrar/Index"
import DashBoardProfessor from "../pages/professor/dashboard/dashboard"
import Dashboard from "../pages/dashboard";

const Routes = () => (
  <Switch>
    <PrivateRoute path="/admin/pbl" component={DashBoardProfessor} />
    <PrivateRoute path="/admin/dashboard" component={Dashboard} />
    <PrivateRoute path="/admin/iniciar-pbl" component={IniciarPBL} />
    <PrivateRoute path="/admin/alunos" component={ConsultarAlunos} />
    <PrivateRoute path="/admin/perfil-usuario" component={PerfilUsuario} />
    {/* <Route path="/cadastro" component={Cadastro} /> */}
    <PrivateRoute path="/admin/cadastro" component={Cadastro} />
    <PrivateRoute path="/admin/manter-disciplina" component={ManterDisciplina} />
    <PrivateRoute path="/admin/manter-tema" component={ManterTema} />
    <PrivateRoute path="/admin/manter-tarefa" component={ListagemTarefas} />
  </Switch>
);

export default Routes;
