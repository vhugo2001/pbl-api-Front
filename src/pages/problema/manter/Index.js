import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "../cadastrar/Index";
import Listar from "../listar/index";

const Index = () => {
  const [selectedProblema, setSelectedProblema] = useState("");
  const [isAtualizar, setIsAtualizar] = useState(false);

  return (
    <>
      <div className="title-container">
        <h1>Manter Problema</h1>
      </div>

      <Row>
        <Col xl={4} lg={4} style={{ paddingLeft: "6px", paddingRight: "6px" }}>
          <Form selected={selectedProblema} setSelectedProblema={setSelectedProblema} setIsAtualizar={setIsAtualizar} />
        </Col>
        <Col xl={8} lg={8} style={{ paddingLeft: "6px", paddingRight: "6px" }}>
          <Listar
            setSelectedProblema={setSelectedProblema}
            selectedProblema={selectedProblema}
            isAtualizar={isAtualizar}
          />
        </Col>
      </Row>
    </>
  );
};

export default Index;
