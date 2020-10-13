import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DropDownList from "../../Components/DropDownList/Default/DropDownList";
import DropDownListAlunos from "../../Components/DropDownList/Alunos/DropDownList";

import serviceAluno from "../../Services/AlunoService";
import serviceTema from "../../Services/TemaPblService";

const Teste = () => {
  const [listaAluno, setListaAluno] = useState([]);
  const [listaTemaPbl, setListaTemaPbl] = useState([]);
  const [temaSelecionado, setTemaSelecionado] = useState({});
  const [alunosSelecionados, setAlunosSelecionados] = useState([]);

  useEffect(() => {
    serviceAluno
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setListaAluno(data);
      })
      .catch((error) => console.log(error));
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

  useEffect(() => {
    //console.log(alunosSelecionados)
  }, [alunosSelecionados])

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!

    <Card>
      <Card.Form>
        <Card.Form.Group style={{ flex: 5 }}>
          <Card.Form.Title>Tema PBL</Card.Form.Title>
          <DropDownList
            lista={listaTemaPbl}
            onSelect={setTemaSelecionado}
          ></DropDownList>
        </Card.Form.Group>

        <Card.Form.Group className="form-group">
          <Card.Form.Title>Data Inicio</Card.Form.Title>
          <Card.Form.InputText/>
        </Card.Form.Group>

        <Card.Form.Group>
          <Card.Form.Title>Data Conclusão</Card.Form.Title>
          <Card.Form.InputText />
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
          <Card.Form.Title>Titulo PBL</Card.Form.Title>
          <Card.Form.InputText />
        </Card.Form.Group>

        <Card.Form.BreakRow />

        <Card.Form.Group>
          <Card.Form.Title>Situação problema</Card.Form.Title>
          <Card.Form.InputTextArea />
        </Card.Form.Group>

        <Card.Form.GroupButton>
          <Card.Form.Submit>Salvar</Card.Form.Submit>
        </Card.Form.GroupButton>
      </Card.Form>
    </Card>
  );
};
export default Teste;
