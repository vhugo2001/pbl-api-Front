import React from "react";
import { Container,  Tabs, Tab } from "react-bootstrap";

import FormLogin from "../../Components/Login/FormLogin/FormLogin";
import FormCadastroAluno from "../../Components/Login/FormCadastro/FormCadastro";

function Login({setIsLogado}) {
  return (
    <Container fluid>
      <div class="form-login">
        <Tabs defaultActiveKey="login">
          <Tab eventKey="login" title="Login">
            <FormLogin setIsLogado={setIsLogado} />
          </Tab>
          <Tab eventKey="aluno" title="Registrar">
            <FormCadastroAluno />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default Login;
