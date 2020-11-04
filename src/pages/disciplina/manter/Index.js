import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "../cadastrar/Index";
import Listar from "../listar/index";

const Index = () => {
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [isAtualizar, setIsAtualizar] = useState(false);

  useEffect(() => {}, [selectedDisciplina]);

  return (
    <>
      <div className="title-container">
        <h1>Manter disciplina</h1>
      </div>

      <Row>
        <Col xl={4} lg={4} style={{ paddingLeft: "6px", paddingRight: "6px" }}>
          <Form selected={selectedDisciplina} setIsAtualizar={setIsAtualizar} />
        </Col>
        <Col xl={8} lg={8} style={{ paddingLeft: "6px", paddingRight: "6px" }}>
          <Listar
            setSelectedDisciplina={setSelectedDisciplina}
            selectedDisciplina={selectedDisciplina}
            isAtualizar={isAtualizar}
          />
        </Col>
      </Row>
    </>
  );
};

export default Index;
