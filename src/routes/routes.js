import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import CadastrarDisciplina from "../pages/disciplina/cadastrar/Index";
import IniciarPBL from "../pages/pbl/cadastrar/Index"

const Routes = () => (
  <Switch>
    <Route path="/iniciar-pbl" component={IniciarPBL} />
    <Route path="/alunos" component={ConsultarAlunos} />
    <Route path="/perfil-usuario" component={PerfilUsuario} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/cadastrar-disciplina" component={CadastrarDisciplina} />
  </Switch>
);

export default Routes;
