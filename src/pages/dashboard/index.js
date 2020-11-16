import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import DropDownDisciplinaProfessor from "../../Components/DropDownList/Disciplina/DropDowenDisciplinasProfessor";
import CardCadastroTarefa from "../../Components/Card/CardCadastroTarefa";
import CardListaPbl from "../../Components/Card/CardListaPbl";
import ListagemAtividades from "../../pages/listagemAtividades/index";
import { Row, Col } from "react-bootstrap";
import CardCharts from "../../Components/Charts/Professor/Radial";
import authService from "../../Services/AuthService";
import { toast } from "react-toastify";
import "./styles.css";

function Dashboard() {
  let usuarioLogado = authService.getCurrentUser();
  const [selectedPbl, setSelectedPbl] = useState();
  const [selectedAtividade, setSelectedAtividade] = useState();
  const [selectedDisciplinas, setSelectedDisciplinas] = useState();
  const [isAtualizar, setIsAtualizar] = useState(false);

  useEffect(() => {
    toast.info(
      "É necessário selecionar uma disciplina para usar o dashboard de atividades!",
      { autoClose: 8000 }
    );
  }, []);

  useEffect(() => {}, [selectedPbl]);

  useEffect(() => {
    setIsAtualizar(true);
  }, [selectedAtividade]);

  return (
    <>
      <div>
        <Row>
          <Col xl={12} lg={12}>
            <DropDownDisciplinaProfessor
              usuario={usuarioLogado}
              selected={setSelectedDisciplinas}
            />
          </Col>
          <Col
            xl={6}
            lg={6}
            style={{ paddingLeft: "6px", paddingRight: "6px" }}
          >
            <CardListaPbl
              disciplina={selectedDisciplinas}
              setSelectedPbl={setSelectedPbl}
            />

            <ListagemAtividades
              selectedPbl={selectedPbl}
              setSelectedAtividade={setSelectedAtividade}
              isAtualizar={isAtualizar}
            />
          </Col>

          <Col
            xl={6}
            lg={6}
            style={{ paddingLeft: "6px", paddingRight: "6px" }}
          >
            <CardCadastroTarefa
              disciplina={selectedDisciplinas}
              selectedAtividade={selectedAtividade}
              setIsAtualizar={setIsAtualizar}
            />

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
