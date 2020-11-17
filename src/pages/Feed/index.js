import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import LogoUff from "../../assets/uff-logo.png";
import ImgPBL from "../../assets/PBL.png";
import LogoPBL from "../../assets/logopblcentro.png";
// import CardPublicacao from "../../Components/Card/CardPublicacao.js";
import {
  Container,
  TopContainer,
  CardsContainer,
  TopCardsContainer,
  BottomCardsContainer,
} from "./styles";

const Feed = () => {
  return (
    <Row>
      <Col lg="12">
        <Card border="light" className="shadow-sm">
          <Card.Header>
            <h2>Bem vindo</h2>
            <h3>
              Sistema oficial de administração e organização de PBLs da UFF
            </h3>
          </Card.Header>
          <Card.Body>
              <ul>
                <li>asioasiasa</li>
                <li>shuasiausha</li>
              </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Feed;
