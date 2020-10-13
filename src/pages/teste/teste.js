import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DropDownList from "../../Components/DropDownList/Default/DropDownList";
import CustomAlert from "../../Components/Alert/CustomAlert"
import '../../Components/App.css'
import service from "../../Services/TemaPblService";
import servicePbl from "../../Services/PblService";
import { isEmptyObject } from "jquery";

const Teste = () => {
  const [lista, setLista] = useState([]);
  const [listaPbl, setListaPbl] = useState([]);
  const [temaSelecionado, setTemaSelecionado] = useState({});

  const [pbl, setPbl] = useState();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataConclusao, setDataConclusao] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [aluno, setAluno] = useState();

  useEffect(() => {
    service
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setLista(data);
        console.log(lista);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(temaSelecionado);
  }, [temaSelecionado]);


  // useEffect(() => {
  //     servicePbl
  //       .incluir(pbl)
  //       .then((response) => {
  //         let data = response.data;
  //         setListaPbl(data);
  //         console.log(listaPbl);
  //         alert("Pbl cadastrado com sucesso");
  //       })
  //       .catch((error) => console.log(error));
  //     alert("Erro ao cadastrar PBl");
  // }, [pbl]);

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
        "pblAlunos": [
          {
            "aluno": {
              "idAluno": 2
            }
          }
        ],
        "professor": {
          "idProfessor": 4
        },

        "temaPbl": {
          "idTemaPbl": temaSelecionado.idTemaPbl
        }
      }

      // {
      //   "aluno": [
      //     {
      //       "idAluno": 2,
      //     }
      //   ],
      //   "dataConclusao": dataConclusao,
      //   "dataInicio": dataInicio,
      //   "professor": {
      //     "idProfessor": 4
      //   },
      //   "resumo": resumo,
      //   "situacaoProblema": "Situação Problema AbC",
      //   "temaPbl": {
      //     "idTemaPbl": 1
      //   },
      //   "titulo": titulo
      // }

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
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!

    <Card>
      <Card.Form onSubmit={onSubmitHandler}>
        <Card.Form.Group style={{ flex: 5 }}>
          <Card.Form.Title>Tema PBL</Card.Form.Title>
          <DropDownList required
            lista={lista}
            onSelect={setTemaSelecionado}
          ></DropDownList>
        </Card.Form.Group>

        <Card.Form.Group>
          <Card.Form.Title>Data Inicio</Card.Form.Title>
          <Card.Form.InputText
            required pattern="\d{1,2}/\d{1,2}/\d{4}" onInput={e => e.target.setCustomValidity("")}
            onInvalid={e => e.target.setCustomValidity("Digite uma data válida")}
            onChange={e => setDataInicio(e.target.value)} value={dataInicio} placeholder="dd/mm/aaaa" />
        </Card.Form.Group>

        <Card.Form.Group>
          <Card.Form.Title>Data Conclusão</Card.Form.Title>
          <Card.Form.InputText
            required pattern="\d{1,2}/\d{1,2}/\d{4}" onInput={e => e.target.setCustomValidity("")}
            onInvalid={e => e.target.setCustomValidity("Digite uma data válida")}
            onChange={e => setDataConclusao(e.target.value)} value={dataConclusao} placeholder="dd/mm/aaaa" />
        </Card.Form.Group>

        <Card.Form.BreakRow />

        <Card.Form.Group style={{ flex: 5 }}>
          <Card.Form.Title>Alunos</Card.Form.Title>
          <Card.Form.InputText
            required pattern="^[^0-9]*" onInput={e => e.target.setCustomValidity("")}
            onInvalid={e => e.target.setCustomValidity("Este campo deve ter apenas letras")} />
        </Card.Form.Group>

        <Card.Form.Group>
          <Card.Form.Title>Empresa</Card.Form.Title>
          <Card.Form.InputText />
        </Card.Form.Group>

        <Card.Form.BreakRow />

        <Card.Form.Group>
          <Card.Form.Title>Titulo PBL</Card.Form.Title>
          <Card.Form.InputText
            required pattern="^(?=.*[a-zA-Z])([a-zA-ZÀ-ú0-9 ]+)$" onInput={e => e.target.setCustomValidity("")}
            onInvalid={e => e.target.setCustomValidity("O titulo deve conter ao menos 1 letra")}
            required onChange={e => setTitulo(e.target.value)} value={titulo} />
        </Card.Form.Group>

        <Card.Form.BreakRow />

        <Card.Form.Group>
          <Card.Form.Title>Resumo</Card.Form.Title>
          <Card.Form.InputTextArea required pattern="^(?=.*[a-zA-Z])([a-zA-ZÀ-ú0-9 ]+)$" onInput={e => e.target.setCustomValidity("")}
            onInvalid={e => e.target.setCustomValidity("O resumo deve conter ao menos 1 letra")}
            required onChange={e => setResumo(e.target.value)} value={resumo} />
        </Card.Form.Group>

        <Card.Form.GroupButton>
          <Card.Form.Submit >Salvar</Card.Form.Submit>
        </Card.Form.GroupButton>
      </Card.Form>
    </Card>
  );
};
export default Teste;
