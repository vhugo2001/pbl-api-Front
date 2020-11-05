import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import FormAluno from "./Aluno"
import FormProfessor from "./Professor"

const FormCadastro = () => {
  return (
    <>
      <div className="sub-tab">
        <Tabs defaultActiveKey="aluno">
          <Tab eventKey="aluno" title="Aluno">
            <FormAluno/>
          </Tab>
          <Tab eventKey="professor" title="Professor">
          <FormProfessor/>
          </Tab>
          <Tab eventKey="empresa" title="Empresa"></Tab>
        </Tabs>
      </div>
     
    </>
  );
};
export default FormCadastro;
