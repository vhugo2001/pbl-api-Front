import React from "react";
import { Card } from "../../Components/Card/CardPrincipal";

function PerfilUsuario() {
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
          <h2>Nome do aluno</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card.Image
            src={require("../../Components/Images/default_profile.png")}
          />
          <Card.Form>
            <Card.Form.Group>
              <Card.Form.Title>Nome</Card.Form.Title>
              <Card.Form.InputText></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.Group>
              <Card.Form.Title>E-mail</Card.Form.Title>
              <Card.Form.InputText></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.Group>
              <Card.Form.Title>Matricula</Card.Form.Title>
              <Card.Form.InputText></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.Group>
              <Card.Form.Title>Senha</Card.Form.Title>
              <Card.Form.InputText></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.Group>
              <Card.Form.Title>Nova Senha</Card.Form.Title>
              <Card.Form.InputText></Card.Form.InputText>
            </Card.Form.Group>

            <Card.Form.BreakRow />

            <Card.Form.GroupButton>
              <Card.Form.Submit>Salvar</Card.Form.Submit>
            </Card.Form.GroupButton>
          </Card.Form>
        </div>
      </Card>
    </>
  );
}

export default PerfilUsuario;
