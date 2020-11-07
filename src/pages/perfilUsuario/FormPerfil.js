import React from "react";
import authService from "../../Services/AuthService";
import Aluno from "./Aluno";
import Professor from "./Professor";
import Empresa from "./Empresa";

const FormPerfil = () => {
  const Perfil = () => {
    let usuarioLogado =  authService.getCurrentUser();
    switch (usuarioLogado.roles[0]) {
      case "ROLE_ALUNO":
        return <Aluno usuario={usuarioLogado} />;
      case "ROLE_PROFESSOR":
        return <Professor usuario={usuarioLogado} />;
      default:
        return <Empresa usuario={usuarioLogado}/>;
    }
  };
  return <Perfil />;
};

export default FormPerfil;
