import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import FormAluno from "./Aluno"

const FormCadastro = () => {
  return (
    <>
      <div class="sub-tab">
        <Tabs defaultActiveKey="aluno">
          <Tab eventKey="aluno" title="Aluno">
            <FormAluno/>
          </Tab>
          <Tab eventKey="professor" title="Professor"></Tab>
          <Tab eventKey="empresa" title="Empresa"></Tab>
        </Tabs>
      </div>
     
    </>
  );
};
export default FormCadastro;
