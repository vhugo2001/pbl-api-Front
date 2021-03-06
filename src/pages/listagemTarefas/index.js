import React, { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import "../../Components/TableTarefa/listagemTarefa.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Container } from "../../Components/TableTarefa/style";
import { toast } from "react-toastify";
import serviceAtividade from "../../Services/AtividadeService";
import serviceTarefa from "../../Services/TarefaService";
import authService from "../../Services/AuthService";

import IconList from '../../Components/IconList/IconList'

//Teste Modal Component
import DatePicker from "react-datepicker";
import ModalTarefas from "../../Components/Modal/Form/Index";
import { Modal } from "react-bootstrap";
import { Formik } from "formik";
import SchemaTarefa from "../../Components/Modal/Form/SchemaTarefas";
import { Card } from "../../Components/Card/CardPrincipal";
import DatePickerField from "../../Components/DatePicker/DatePickerField";
import DropDownListAlunos from "../../Components/DropDownList/Alunos/DropDownList";
import pt from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import subDays from "date-fns/subDays";
import tarefaService from "../../Services/TarefaService";

import dateUtil from "../../helpers/date";

const { SearchBar } = Search;

const Index = () => {
  const [dadosModal, setDadosModal] = useState({});
  const [alunos, setAlunos] = useState({});
  const [selectedAlunos, setSelectedAlunos] = useState();
  const [show, setShow] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [tarefa, setTarefa] = useState([]);
  const [dtConclusao, setDtConclusao] = useState("");
  const [idTarefa, setIdTarefa] = useState("");

  let usuarioLogado = authService.getCurrentUser();

  useEffect(() => {
    listarTarefas()
  }, []);

  useEffect(() => { }, [show]);

  const listarTarefas = () => {

    serviceAtividade
      .listarPorIdAluno(usuarioLogado.id)
      .then((response) => {
        let data = response.data;
        console.log(data);
        setTarefa(data.atividadeTarefaDTOs);
        setAlunos(data.alunosPbl);


      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  }

  const colunas = [
    {
      dataField: "titulo",
      text: "Atividade",

      formatter: (cellContent, row) => (
        <div>
          <label className="TituloAtiv">
            <b>{row.titulo}</b>
          </label>
          <br />
        </div>
      ),
      headerStyle: (colum, colIndex) => {
        return { backgroundColor: "transparent" };
      },
    },

    {
      dataField: "dataConclusao",
      text: "Data de Conclusão",

      formatter: (cellContent, row) => (
        <div style={{ textAlign: "center" }}>
          <label className="ConclusaoAtiv">{row.dataConclusao}</label>
          <br />
        </div>
      ),
      headerStyle: (colum, colIndex) => {
        return { textAlign: "center", backgroundColor: "transparent" };
      },
    },

    {
      dataField: "icone",
      text: "",

      formatter: (cellContent, row) => (
        <div className="action-button-adicionar">
          <IoIcons.IoIosAddCircleOutline
            className="adicionar-button"
            onClick={() => handleAdd(row)}
          />
        </div>
      ),
      headerStyle: (colum, colIndex) => {
        return {
          width: "105px",
          height: "5px",
          backgroundColor: "transparent",
          marginRight: "50px",
        };
      },
    },
  ];

  const subcolunas = [
    {
      dataField: "concluido",
      text: "",

      formatter: (cellContent, row) => (
        <div>
          <div
            className="icone-button"
            onClick={(e) => handleConcluido(e, row)}
          >
            <IoIcons.IoIosCheckmarkCircle />
          </div>
        </div>
      ),
      headerStyle: (colum, colIndex) => {
        return {
          width: "35px",
          height: "1px",
          textAlign: "center",
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (cell === true) {
          return {
            color: "#00bf9c",
          };
        }
        return {
          color: "#7f89a2",
        };
      },
      editable: false,
    },
    {
      dataField: "titulo",
      text: "",

      formatter: (cellContent, row) => {

        if (cellContent !== "") {
          return (
            <div>
              <label className="TituloAtiv">
                <b>{cellContent}</b>
              </label>
              <br />
            </div>
          );
        } else {
          return (
            <div>
              <label className="TituloAtiv">Insira um título...</label>
              <br />
            </div>
          );
        }
      },
      headerStyle: {
        display: "none",
      },
    },
    {
      dataField: "descricao",
      text: "",

      formatter: (cellContent, row) => {
        if (cellContent !== "") {
          return (

            <div className='action-button-desc'>
              <div className="desc-button">
                <BiIcons.BiMessageAltDetail />
              </div>
            </div>

          );
        } else {
          return (
            <div>
              <label className="TituloAtiv">Insira uma descrição...</label>
              <br />
            </div>
          );
        }
      },
      headerStyle: {
        display: "none",
      },
    },
    {
      dataField: "alunos",
      text: "",

      formatter: (cellContent, row) => {

        if (cellContent !== undefined) {
          return (
            <div >
              <label className="TituloAtiv">
                <IconList lista={cellContent} />
              </label>
              <br />
            </div>
          );
        } else {
          return (
            <div style={{ textAlign: 'center' }}>
              <label className="TituloAtiv">Atribua algum aluno...</label>
              <br />
            </div>
          );
        }
      },
      headerStyle: {
        display: "none",
      },
    },
    {
      dataField: "dataConclusao",
      text: "",

      formatter: (cellContent, row) => {
        if (cellContent !== "") {
          return (
            <div style={{ textAlign: 'start' }}>
              <label className="TituloAtiv">
                <b>{cellContent}</b>
              </label>
              <br />
            </div>
          );
        } else {
          return (
            <div style={{ textAlign: 'start' }}>
              <label className="TituloAtiv">Insira uma data...</label>
              <br />
            </div>
          );
        }
      },
      headerStyle: {
        display: "none",
      },
    },
    {
      dataField: "icone",
      text: "",

      formatter: (cellContent, row) => (
        <div className="action-button-deletar">
          <IoIcons.IoMdTrash
            className="deletar-button"
            onClick={(e) => handleExcluir(e, row)}
          />
        </div>
      ),
      headerStyle: {
        display: "none",
      },
      editable: false,
    },
  ];

  function handleExcluir(e, item) {
    e.stopPropagation();
    console.log(item)
    excluirTarefa(item);
  }

  const excluirTarefa = (dados) => {
    console.log(dados)
    serviceTarefa
      .deletar(dados.idAtividade, dados.id)
      .then((response) => {
        // let data = response.data;
        // setTarefa(data);
        listarTarefas()
        toast.success("Sucesso ao excluir a tarefa.");
      })
      .catch((error) => {
        toast.error("Erro ao excluir a tarefa.");
      });
  };

  const handleConcluido = (e, item) => {
    e.stopPropagation();
    alterarConcluidoTarefa(item);

  };

  const onSubmitHandler = (data) => {
    data.dataConclusao = dtConclusao
    let _data = {
      ...data,
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    };

    tarefaService
      .incluir(_data)
      .then(() => {
        toast.success("Tarefa cadastrada com sucesso.");
        listarTarefas()
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onUpdateHandler = (values) => {

    values.dataConclusao = dtConclusao
    let _data = {
      ...values,
      dataConclusao: format(values.dataConclusao, "dd/MM/yyyy"),
    };

    console.log(_data)

    tarefaService
      .atualizar(_data.idAtividade, idTarefa, _data)
      .then(() => {
        toast.success("Tarefa atualizada com sucesso.");
        listarTarefas()
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const alterarConcluidoTarefa = (dados) => {
    console.log(dados)
    dados.concluido = !dados.concluido
    dados.dataConclusao = format(new Date(), 'dd/MM/yyyy')
    serviceTarefa
      .alterarConcluidoTarefa(dados)
      .then((response) => {
        // let data = response.data;
        // setTarefa(data);
        listarTarefas()
      })
      .catch((error) => {
        toast.error("Erro modificar status da Tarefa.");
      });
  };

  const onClearHandler = () => { };

  const handleClose = () => { setShow(false) };

  const handleAdd = (item) => {

    setDtConclusao("");
    const novaTarefa = {
      tituloAtividade: item.titulo,
      titulo: "",
      idAtividade: item.id,
      descricao: "",
      concluido: false
    };

    setDadosModal(novaTarefa);
    setIsUpdating(false)
    setShow(true);
  };
  const rowEvents = {
    onClick: (e, row) => {

      if (row.dataConclusao !== null && row.dataConclusao !== undefined) {
        setDtConclusao(
          dateUtil.DateFormater(row.dataConclusao)
        );
      } else {
        setDtConclusao("")
      }

      setIdTarefa(row.id)
      setDadosModal(row);
      setIsUpdating(true)
      setShow(true);
    },
  };

  const rowStyle = (row, rowIndex) => {
    if (row !== undefined) {
      if (row.concluido === true) {
        return { backgroundColor: "rgba(0, 185, 0, 0.1)", cursor: "pointer" };
      } else {
        return { cursor: "pointer" };
      }
    } else {
      return {};
    }
  };

  const expandRow = {
    renderer: (row) => (

      < div >
        <ToolkitProvider keyField="id" data={row.tarefas} columns={subcolunas}>
          {(props) => (
            <div>
              <BootstrapTable
                {...props.baseProps}
                // cellEdit={cellEdit}
                condensed
                bordered={false}
                rowStyle={rowStyle}
                rowEvents={rowEvents}
              />
            </div>
          )}
        </ToolkitProvider>
      </div >
    ),

    expandColumnPosition: "right",
    expandByColumnOnly: true,
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b></b>;
      }
      return <b></b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return (
          <div className="SetasExpand">
            <IoIcons.IoMdArrowDropdown />
          </div>
        );
      }
      return (
        <div className="SetasExpand">
          <IoIcons.IoMdArrowDropleft />
        </div>
      );
    },
  };

  console.log(tarefa)
  return (
    <>

      <div className="title-container">
        <h1>Consultar Tarefas</h1>
      </div>
      <Container className="container-list">
        <ToolkitProvider keyField="id" data={tarefa} columns={colunas} search>
          {(props) => (
            <>
              <div className="table-searchAtiv">
                <SearchBar
                  keyField="titulo"
                  {...props.searchProps}
                  placeholder="Buscar atividade..."
                />
                <div class="table-search-icon">
                  <IoIcons.IoMdSearch class="search-icon" />
                </div>
              </div>
              <div className="scrollExpand">
                <BootstrapTable
                  {...props.baseProps}
                  bordered={false}
                  condensed
                  expandRow={expandRow}
                  noDataIndication="Sem resultados"
                />
              </div>
            </>
          )}
        </ToolkitProvider>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {tarefa.titulo + " na atividade " + tarefa.tituloAtividade}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            enableReinitialize
            initialValues={{
              idAtividade: dadosModal.idAtividade,
              titulo: dadosModal.titulo,
              descricao: dadosModal.descricao,
              concluido: dadosModal.concluido,
              dataConclusao: dadosModal.dataConclusao,
              alunos: dadosModal.alunos,
            }}
            validationSchema={SchemaTarefa}
            onSubmit={(values) => {
              setShow(false);
              if (isUpdating) {
                onUpdateHandler(values);
              } else {
                onSubmitHandler(values);
              }

            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              isSubmitting,
              validating,
              valid,
            }) => {
              return (
                <>
                  <div className="spacer-div" />
                  {isUpdating && (
                    <>
                      <div
                        className="actions-form-button clear-button"
                        type="button"
                        onClick={onClearHandler}
                      >
                        <IoIcons.IoIosAdd className="icone-clear" />
                      </div>
                    </>
                  )}
                  <Card.Form
                    style={{ "padding-top": "0" }}
                    method="post"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <Card.Form.Group>
                      <Card.Form.Title>Titulo</Card.Form.Title>
                      <Card.Form.InputText
                        name="titulo"
                        autocomplete="off"
                        onChange={handleChange}
                        value={values.titulo}
                        valid={touched.titulo && !errors.titulo}
                        error={touched.titulo && errors.titulo}
                      />
                      {errors.titulo && touched.v && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.titulo}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.Group>
                      <Card.Form.Title>Data Conclusao</Card.Form.Title>

                      <DatePicker
                        onChange={setDtConclusao}
                        locale={pt}
                        useShortMonthInDropdown
                        minDate={subDays(new Date(), 0)}
                        dateFormat="dd/MM/yyyy"
                        selected={dtConclusao}
                        customInput={
                          <Card.Form.InputText value={dtConclusao} />
                        }
                      />
                    </Card.Form.Group>
                    <Card.Form.BreakRow />
                    <Card.Form.Group>
                      <Card.Form.Title>Descrição</Card.Form.Title>
                      <Card.Form.InputText
                        name="descricao"
                        autocomplete="off"
                        onChange={handleChange}
                        value={values.descricao}
                      />
                    </Card.Form.Group>
                    <Card.Form.BreakRow />
                    <Card.Form.Group style={{ flex: 5 }}>
                      <Card.Form.Title>Alunos</Card.Form.Title>
                      <DropDownListAlunos
                        name="alunos"
                        lista={alunos}
                        onSelect={setSelectedAlunos}
                      ></DropDownListAlunos>
                    </Card.Form.Group>

                    <Card.Form.GroupButton className="group-button">
                      {!isUpdating && (
                        <Card.Button type="submit">Incluir</Card.Button>
                      )}
                      {isUpdating && (
                        <Card.Button type="submit">Atualizar</Card.Button>
                      )}
                    </Card.Form.GroupButton>
                  </Card.Form>
                </>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Index;
