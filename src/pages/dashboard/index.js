import React, {useState, useEffect} from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import CardCadastroTarefa from "../../Components/Card/CardCadastroTarefa";
import CardListaPbl from "../../Components/Card/CardListaPbl";
import ListagemAtividades from "../../pages/listagemAtividades/index";
import { Container, Row, Col } from "react-bootstrap";
import CardCharts from "../../Components/Charts/Professor/Radial";
import "./styles.css";

function Dashboard() {

  const [selectedPbl, setSelectedPbl] = useState('')

  useEffect(() => {
  }, [selectedPbl])


  return (
    <>
      <div>
        <Row>
          <Col
            xl={6}
            lg={6}
            style={{ paddingLeft: "6px", paddingRight: "6px" }}
          >
            <CardListaPbl setSelectedPbl={setSelectedPbl} />

            <ListagemAtividades selectedPbl={selectedPbl} />
          </Col>

          <Col
            xl={6}
            lg={6}
            style={{ paddingLeft: "6px", paddingRight: "6px" }}
          >
            <CardCadastroTarefa />

            <Card>
              <CardCharts />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
