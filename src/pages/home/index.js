import React from "react";
import { Container, Tab, Row, Nav, Col } from "react-bootstrap";

import FormLogin from "../../Components/Login/FormLogin/FormLogin";
import FormCadastro from "../../Components/Login/FormCadastro/FormCadastro";

function Login() {
  return (
    <Container fluid>
      <div className="row flexbox-container">
        <div className="col-xl-8 col-11 d-flex justify-content-center">
          <div className="card rounded-0 mb-0 shadow-lg">
            <div className="row m-0">
              <div className="col-lg-6 d-lg-block d-none text-align align-self-center py-0 logo-container">
                <div>
                  <img className="img-fluid logo-pbl" src={require("../../assets/images/logo-pbl.svg")} alt="FEST - PROJETO PBL" />
                  <img className="img-fluid logo-uff text-right" src={require("../../assets/images/logo-uff.svg")} alt="Universidade Federal Fluminense" />
                </div>
              </div>
              <div className="col-lg-6 col-12 p-0">
                <div className="card rounded-0 mb-0 px-2 bg-login">
                  <div className="card-header">
                    <div className="card-title">
                      <h4 className="mb-0">Seja bem-vindo</h4>
                    </div>
                  </div>
                  <div className="card-content pt-4">
                    <div className="card-body pt-1">
                      <Tab.Container defaultActiveKey="login">
                        <Row>
                          <Col sm={12}>
                            <Tab.Content>
                              <Tab.Pane eventKey="login">
                                <FormLogin />
                              </Tab.Pane>
                              <Tab.Pane eventKey="aluno">
                                <FormCadastro />
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12}>
                            <Nav variant="pills" className="form-group d-flex justify-content-center align-items-center tabs-btn">
                              <Nav.Item>
                                <Nav.Link className="btn btn-block btn-inline btn-registrar" eventKey="aluno">Registrar</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link className="btn btn-block btn-inline btn-registrar" eventKey="login">Acessar</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
