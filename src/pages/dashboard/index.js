import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import DropDownDisciplina from "../../Components/DashBoard/Filter/index";
import CardCadastroTarefa from "../../Components/Card/CardCadastroTarefa";
import CardListaPbl from "../../Components/Card/CardListaPbl";
import ListagemAtividades from "../../pages/listagemAtividades/index";
import { Container, Row, Col } from "react-bootstrap";
import CardCharts from "../../Components/Charts/Professor/Radial";
import authService from "../../Services/AuthService";
import "./styles.css";

function Dashboard() {
  let usuarioLogado = authService.getCurrentUser();
  const [selectedPbl, setSelectedPbl] = useState()
  const [selectedAtividade, setSelectedAtividade] = useState()
  const [listaDisciplina, setListaDisciplina] = useState()

  useEffect(() => {
    
  }, [])

  useEffect(() => {
  }, [selectedPbl])

  useEffect(() => {
  }, [selectedAtividade])

  return (
    <>
      <div>
        <Row>
          <Col xl={12} lg={12}><DropDownDisciplina lista={listaDisciplina} selected={setListaDisciplina} /></Col>
          <Col
            xl={6}
            lg={6}
            style={{ paddingLeft: "6px", paddingRight: "6px" }}
          >
            <CardListaPbl setSelectedPbl={setSelectedPbl} />

            <ListagemAtividades selectedPbl={selectedPbl} setSelectedAtividade={setSelectedAtividade} />
          </Col>

          <Col
            xl={6}
            lg={6}
            style={{ paddingLeft: "6px", paddingRight: "6px" }}
          >
            <CardCadastroTarefa selectedAtividade={selectedAtividade} />

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
