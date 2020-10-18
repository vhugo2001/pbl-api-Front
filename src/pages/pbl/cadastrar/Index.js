import React, { useEffect, useState } from "react";
import { Card } from "../../../Components/Card/CardPrincipal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import DropDownList from "../../../Components/DropDownList/Default/DropDownList";
import DropDownListAlunos from "../../../Components/DropDownList/Alunos/DropDownList";
import serviceAluno from "../../../Services/AlunoService";
import serviceTema from "../../../Services/TemaPblService";
import servicePbl from "../../../Services/PblService";
import Alert from "../../../Components/Alert/CustomAlert";

import { isEmptyObject } from "jquery";

import "react-datepicker/dist/react-datepicker.css";

const Teste = () => {
  const [listaAluno, setListaAluno] = useState([]);
  const [listaTemaPbl, setListaTemaPbl] = useState([]);
  const [listaPbl, setListaPbl] = useState([]);
  const [temaSelecionado, setTemaSelecionado] = useState({});
  const [alunosSelecionados, setAlunosSelecionados] = useState([]);
  const [problema, setProblema] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [messagem, setMensagem] = useState("");
  const [variant, setVariant] = useState("");

  useEffect(() => {
    serviceAluno
      .listarTodos()
      .then((response) => {
        setListaAluno(response.data);
      })
      .catch((error) => {
        setMensagem("Erro ao acessar a lista de alunos.");
        setVariant("danger");
      });
  }, []);

  useEffect(() => {
    serviceTema
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setListaTemaPbl(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (isEmptyObject(temaSelecionado) === false) {
      const pbl = {
        problema: problema,
        dataConclusao: format(dataConclusao, "dd/MM/yyyy"),
        dataInicio: format(dataInicio, "dd/MM/yyyy"),
        aluno: alunosSelecionados,
        professor: {
          id: 2,
        },
        temaPbl: {
          id: temaSelecionado.id,
        },
      };

      servicePbl
        .incluir(pbl)
        .then((response) => {
          let data = response.data;
          setListaPbl(data);
          console.log(listaPbl);
          setMensagem("Pbl cadastrado com sucesso.");
          setVariant("success");
        })
        .catch((error) => {
          setMensagem("Erro ao cadastrar o PBL.");
          setVariant("danger");
        });
    } else {
      alert("selecione um tema");
    }
  };

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <>
      <div className="title-container">
        <h1>Iniciar PBL</h1>
        <Alert _mensagem={messagem} _variant={variant} />
      </div>
      <Card>
        <Card.Form onSubmit={onSubmitHandler}>
          <Card.Form.Group style={{ flex: 4 }}>
            <Card.Form.Title>Tema PBL</Card.Form.Title>
            <DropDownList
              required
              lista={listaTemaPbl}
              onSelect={setTemaSelecionado}
            ></DropDownList>
          </Card.Form.Group>

          <Card.Form.Group>
            <Card.Form.Title>Data Inicio</Card.Form.Title>
            <DatePicker
              required
              locale={pt}
              minDate={subDays(new Date(), 0)}
              useShortMonthInDropdown
              dateFormat="dd/MM/yyyy"
              selected={dataInicio}
              onChange={(date) => setDataInicio(date)}
              customInput={<Card.Form.InputDate value={dataInicio} />}
            />
          </Card.Form.Group>

          <Card.Form.Group>
            <Card.Form.Title>Data Conclusão</Card.Form.Title>
            <DatePicker
              required
              locale={pt}
              minDate={subDays(new Date(), 0)}
              useShortMonthInDropdown
              dateFormat="dd/MM/yyyy"
              selected={dataConclusao}
              onChange={(date) => setDataConclusao(date)}
              customInput={<Card.Form.InputDate value={dataConclusao} />}
            />
          </Card.Form.Group>

          <Card.Form.BreakRow />

          <Card.Form.Group style={{ flex: 5 }}>
            <Card.Form.Title>Alunos</Card.Form.Title>
            <DropDownListAlunos
              lista={listaAluno}
              onSelect={setAlunosSelecionados}
            ></DropDownListAlunos>
          </Card.Form.Group>

          <Card.Form.Group>
            <Card.Form.Title>Empresa</Card.Form.Title>
            <Card.Form.InputText />
          </Card.Form.Group>

          <Card.Form.BreakRow />

          <Card.Form.Group>
            <Card.Form.Title>Problema</Card.Form.Title>
            <Card.Form.InputText
              required
              pattern="^(?=.*[a-zA-Z])([a-zA-ZÀ-ú0-9 ]+)$"
              onInput={(e) => e.target.setCustomValidity("")}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "O titulo deve conter ao menos 1 letra"
                )
              }
              onChange={(e) => setProblema(e.target.value)}
              value={problema}
            />
          </Card.Form.Group>

          <Card.Form.BreakRow />

          <Card.Form.GroupButton>
            <Card.Form.Submit>Salvar</Card.Form.Submit>
          </Card.Form.GroupButton>
        </Card.Form>
      </Card>
    </>
  );
};
export default Teste;
