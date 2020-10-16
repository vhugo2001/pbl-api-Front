import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import ListAluno from "../../Components/TableAluno/ListAlunos"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DropDownList from "../../Components/DropDownList/Default/DropDownList";
import DropDownListAlunos from "../../Components/DropDownList/Alunos/DropDownList";
import serviceAluno from "../../Services/AlunoService";
import serviceTema from "../../Services/TemaPblService";

import '../../Components/App.css'
import servicePbl from "../../Services/PblService";
import { isEmptyObject } from "jquery";


const ConsultarAlunos = () => {
  const [listaAluno, setListaAluno] = useState([]);
  const [listaTemaPbl, setListaTemaPbl] = useState([]);
  const [listaPbl, setListaPbl] = useState([]);
  const [temaSelecionado, setTemaSelecionado] = useState({});
  const [alunosSelecionados, setAlunosSelecionados] = useState([]);

  const [pbl, setPbl] = useState();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataConclusao, setDataConclusao] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [aluno, setAluno] = useState();

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

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (isEmptyObject(temaSelecionado) === false) {
      const pbl =
      {
        "titulo": titulo,
        "situacaoProblema": "Situação Problema mais teste",
        "resumo": resumo,
        "dataConclusao": dataConclusao,
        "dataInicio": dataInicio,
        "aluno": alunosSelecionados,
        "professor": {
          "idProfessor": 1
        },
        "temaPbl": {
          "id": temaSelecionado.id
        }
      }

      setPbl(pbl)
      console.log(pbl)

      servicePbl
        .incluir(pbl)
        .then((response) => {
          let data = response.data;
          setListaPbl(data);
          console.log(listaPbl);
          alert("Pbl cadastrado com sucesso");
        })
        .catch(error => {
          console.log(error)
          alert("Não foi possivel cadastrar o Pbl");
        })
    } else {
      alert('selecione um tema')
    }
  }

  return (

    <>
      <div className="iniciar-pbl-title">
        <h1>Consultar Alunos</h1>
      </div>
      <ListAluno />

    </>
  );
};
export default ConsultarAlunos;
