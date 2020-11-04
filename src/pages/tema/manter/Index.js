import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "../cadastrar/Index";
import Listar from "../listar/index";

const Index = () => {
  const [selectedTema, setSelectedTema] = useState("");
  const [selectedDisciplina, setSelectedDisciplina] = useState("");

  useEffect(() => {

  }, [selectedTema]);

  return (
    <>
      <div className="title-container">
        <h1>Manter Tema</h1>
      </div>

      <Row>
        <Col xl={4} lg={4} style={{ paddingLeft: "6px", paddingRight: "6px" }}>
          <Form  selected={selectedTema} selectedDisciplina={selectedDisciplina}/>
        </Col>
        <Col xl={8} lg={8} style={{ paddingLeft: "6px", paddingRight: "6px" }}>
          <Listar setSelectedTema={setSelectedTema} setSelectedDisciplina={setSelectedDisciplina} selectedTema={selectedTema} />
        </Col>
      </Row>
    </>
  );
};

export default Index;
