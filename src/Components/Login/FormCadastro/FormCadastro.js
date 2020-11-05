import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import FormAluno from "./Aluno";
import FormEmpresa from "./Empresa";

const FormCadastro = () => {
  return (
    <>
      <div className="sub-tab">
        <Tabs defaultActiveKey="aluno">
          <Tab eventKey="aluno" title="Aluno">
            <FormAluno />
          </Tab>
          <Tab eventKey="professor" title="Professor"></Tab>
          <Tab eventKey="empresa" title="Empresa">
            <FormEmpresa />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default FormCadastro;
