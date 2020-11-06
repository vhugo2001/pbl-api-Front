import React, { useState } from "react";

import AuthService from "../../../Services/AuthService";

const Professor = () => {
  const [senhaConfirmacao, setSenhaConfirmacao] = useState();
  const [dadosProfessor, setDadosProfessor] = useState({
    email: "",
    nome: "",
    perfis: [
      {
        id: 2,
      },
    ],
    senha: "",
  });

  const handleSubmit = async (e) => {
    if (senhaConfirmacao === dadosProfessor.senha) {
      try {
        console.log(dadosProfessor);
        await AuthService.registrarProfessor(dadosProfessor);
        alert("Professor cadastrado com sucesso");
      } catch (error) {
        e.preventDefault();
        console.log(error);
      }
    } else {
      alert("Senhas diferentes");
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-wrap">
        <input
          placeholder="Nome"
          type="text"
          required
          autoComplete="off"
          onChange={(event) =>
            setDadosProfessor({ ...dadosProfessor, nome: event.target.value })
          }
        />
      </div>
      <div className="field-wrap">
        <input
          placeholder="Email"
          type="email"
          required
          autoComplete="off"
          onChange={(event) =>
            setDadosProfessor({ ...dadosProfessor, email: event.target.value })
          }
        />
      </div>
      <div className="field-wrap">
        <input
          placeholder="Senha"
          type="password"
          required
          autoComplete="off"
          onChange={(event) => setSenhaConfirmacao(event.target.value)}
        />
      </div>
      <div className="field-wrap">
        <input
          placeholder="Confirmar Senha"
          type="password"
          required
          autoComplete="off"
          onChange={(event) =>
            setDadosProfessor({ ...dadosProfessor, senha: event.target.value })
          }
        />
      </div>
      <button type="submit" className="button button-block">
        enviar registro
      </button>
    </form>
  );
};

export default Professor;
