import React from "react";
import "./Footer.css";
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className='main-footer'>
      <Row>
        <Col>
          Reitoria da UFF Rua Miguel de Frias, 9 - Icaraí, Niterói - RJ 24220-900
        </Col>
      </Row>
      <Row>
        <Col>
          CNPJ 28.523.215/0001-06 - Telefone: 21 2629-5000
         </Col>
      </Row>
    </Container>
  );
};

export default Footer;
