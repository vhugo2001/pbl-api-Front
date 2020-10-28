import React from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import CardCadastroTarefa from '../../Components/Card/CardCadastroTarefa'
import CardListaPbl from '../../Components/Card/CardListaPbl'
import ListagemAtividades from "../../pages/listagemAtividades/index"
import { Container, Row, Col } from 'react-bootstrap'
import CardCharts from '../../Components/Charts/Professor/Radial';


function Dashboard() {
  return (
    <>

    <div>
        {/* <Row>
          <Col xl={6} lg={6} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
            <Card>
              <h1>Quadro 1</h1>
            </Card>

          </Col>

          <Col xl={6} lg={6} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
            <CardCadastroTarefa />
          </Col>
        </Row>

        <Row style={{ paddingTop: '12px' }}>
         
          <Col xl={6} lg={6} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
            <ListagemAtividades />
          </Col>
          <Col xl={6} lg={6} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
            <Card>
            <CardCharts/>
            </Card>
          </Col>
        </Row> */}

        <Row>
          <Col xl={6} lg={6} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
            <CardListaPbl />
         
            <ListagemAtividades />

          </Col>

          <Col xl={6} lg={6} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
            <CardCadastroTarefa />

            <Card>
            <CardCharts/>
            </Card>
            
          </Col>
       
          </Row>
        </div>
    </>
  );
}

export default Dashboard;
