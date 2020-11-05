import React, { useState } from "react";

const Professor = () => {
  const [senhaConfirmacao, setSenhaConfirmacao] = useState();
  const [dadosProfessor, setDadosProfessor] = useState({
    ativo: true,
    disciplina: {
      id: 0,
    },
    email: "",
    excluido: false,
    nome: "",
    perfis: [
      {
        id: 2,
      },
    ],
    senha: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("corpo da requisição: ", dadosProfessor);
  };

  return (
    <form onSubmit={handleSubmit} /*action="/" method="post"*/>
      <div className="top-row">
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
            placeholder="Disciplina"
            type="text"
            required
            autoComplete="off"
          />
        </div>
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
