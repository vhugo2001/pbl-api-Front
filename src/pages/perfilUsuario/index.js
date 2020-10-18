import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import alunoService from "../../Services/AlunoService";
import Alert from "../../Components/Alert/CustomAlert";

function PerfilUsuario() {
  const [aluno, setAluno] = useState({});
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    alunoService.listarID(1).then((response) => {
      setAluno(response.data);
      console.log(mensagem);
    });
  }, []);

  useEffect(() => {
    console.log(mensagem);
  }, [mensagem]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    alunoService
      .atualizar(1, aluno)
      .then((response) => {
        setMensagem("Entrou");
      })
      .catch((error) => {
        setMensagem(error);
      });
  };

  return (
    <>
      <div className="meu-perfil-title">
        <h1>Meu Perfil</h1>
      </div>
      <Card>
        <div
          style={{ flex: 1, textAlign: "center", paddingTop: 10 }}
          className="iniciar-pbl-title"
        >
          <h2>{aluno.nome}</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card.Image
            src={require("../../Components/Images/default_profile.png")}
          />

          <Card.Form onSubmit={handleOnClick}>
            <Card.Form.Group>
              <Card.Form.Title>Nome</Card.Form.Title>
              <Card.Form.InputText
                name="nome"
                onChange={(e) => handleInputChange(e)}
                defaultValue={aluno.nome}
                placeholder="Nome"
              ></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.Group>
              <Card.Form.Title>E-mail</Card.Form.Title>
              <Card.Form.InputText
                name="email"
                defaultValue={aluno.email}
                placeholder="E-mail"
              ></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.Group>
              <Card.Form.Title>Matricula</Card.Form.Title>
              <Card.Form.InputText
                name="matricula"
                defaultValue={aluno.matricula}
                placeholder="Matricula"
              ></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.Group>
              <Card.Form.Title>Senha</Card.Form.Title>
              <Card.Form.InputText placeholder="Senha"></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.Group>
              <Card.Form.Title>Nova Senha</Card.Form.Title>
              <Card.Form.InputText placeholder="Nova Senha"></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.GroupButton>
              <Card.Form.Submit type="submit">Salvar</Card.Form.Submit>
            </Card.Form.GroupButton>
          </Card.Form>
        </div>
      </Card>
    </>
  );
}

export default PerfilUsuario;
