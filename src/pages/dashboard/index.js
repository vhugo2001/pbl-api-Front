import React from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import CardCadastroTarefa from '../../Components/Card/CardCadastroTarefa'
import ListagemAtividades from "../../pages/listagemAtividades/index"
import { Container, Row, Col } from 'react-bootstrap'

function Dashboard() {
  return (
    <>

      <Container>
        <Row>
          <Col>
            <Card>
              <h1>Quadro 1</h1>
            </Card>

          </Col>

          <Col>
            <CardCadastroTarefa />
          </Col>
        </Row>

        <Row style={{ paddingTop: '10px' }}>
          {/* <Card>
            <h1>Quadro 3</h1>
          </Card> */}
          <Col>
            <ListagemAtividades />
          </Col>
          <Col>
            <Card>
              <h1>Quadro 4</h1>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
