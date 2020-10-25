import React from "react";
import { Switch, Route } from "react-router-dom";

import listagemAtividade from "../pages/listagemAtividades/index";
import ConsultarAlunos from "../pages/consultarAlunos";
import PerfilUsuario from "../pages/perfilUsuario";
import Cadastro from "../pages/cadastro";
import Info from "../pages/info";

import CadastrarDisciplina from "../pages/disciplina/cadastrar/Index";


import IniciarPBL from "../pages/pbl/cadastrar/Index"

const Routes = () => (
  <Switch>
    <Route path="/iniciar-pbl" component={IniciarPBL} />
    <Route path="/alunos" component={ConsultarAlunos} />
    <Route path="/perfil-usuario" component={PerfilUsuario} />
    {/* <Route path="/cadastro" component={Cadastro} /> */}
    <Route path="/listagemAtividades" component={listagemAtividade} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/cadastrar-disciplina" component={CadastrarDisciplina} />
    <Route exact path="/" component={Info} />
  </Switch>
);

export default Routes;
