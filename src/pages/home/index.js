import React from "react";
import { Container,  Tabs, Tab } from "react-bootstrap";

import FormLogin from "../../Components/Login/FormLogin/FormLogin";
import FormCadastro from "../../Components/Login/FormCadastro/FormCadastro";

function Login() {
  return (
    <Container fluid>
      <div className="form-login">
        <Tabs defaultActiveKey="login">
          <Tab eventKey="login" title="Login">
            <FormLogin />
          </Tab>
          <Tab eventKey="aluno" title="Registrar">
            <FormCadastro />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default Login;
