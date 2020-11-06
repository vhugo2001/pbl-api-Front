import React, { useState } from "react";
import { toast } from "react-toastify";
import SchemaProfessor from "../SchemaYup/SchemaProfessor";
import * as Yup from "yup";

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
        toast.success("Professor cadastrado com sucesso.");
        //alert("Professor cadastrado com sucesso");
      } catch (error) {
        e.preventDefault();
        console.log(error);
      }
    } else {
      toast.error("Senhas diferentes.");
      //alert("Senhas diferentes");
      e.preventDefault();
    }
  };

  const ValidaDados = async () => {
    try {
      await SchemaProfessor.validate(dadosProfessor, { abortEarly: false })
      handleSubmit();
    } catch (erro) {
      if (erro instanceof Yup.ValidationError) {
        const ErrorMessage = {}
        erro.inner.forEach((error) => {
          ErrorMessage[error.path] = error.message;
          toast.error("Erro ao cadastrar Professor.");
         // alert(error.message)
        })
      }
    }

  }

  return (
    <form onSubmit={ValidaDados}>
      <div className="field-wrap">
        <input
          placeholder="Nome"
          type="text"
          required
          autoComplete="off"
          onChange={(event) =>
            // setDadosProfessor({ ...dadosProfessor, nome: event.target.value })
            console.log(event.target.value)
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
