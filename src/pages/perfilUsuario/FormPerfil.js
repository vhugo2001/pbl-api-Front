import React from "react";
import authService from "../../Services/AuthService";
import Aluno from "./Aluno";
import Professor from "./Professor";
import Empresa from "./Empresa";

const FormPerfil = () => {
  const Perfil = () => {
    
    switch (authService.getCurrentUser().roles[0]) {
      case "ROLE_ALUNO":
        return <Aluno />;
      case "ROLE_PROFESSOR":
        return <Professor />;
      default:
        return <Empresa />;
    }
  };
  return <Perfil />;
};

export default FormPerfil;
