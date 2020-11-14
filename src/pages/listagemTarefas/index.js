import React, { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import * as IoIcons from "react-icons/io";
import "../../Components/TableTarefa/listagemTarefa.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Container } from "../../Components/TableTarefa/style";
import { toast } from "react-toastify";
import serviceAtividade from "../../Services/AtividadeService";
import serviceTarefa from "../../Services/TarefaService";
import authService from "../../Services/AuthService";

//Teste Modal Component
import ModalTarefas from "../../Components/Modal/Form/Index";

const { SearchBar } = Search;

function ListagemTarefas() {
  const [dadosModal, setDadosModal] = useState({});
  const [alunos, setAlunos] = useState({});
  const [show, setShow] = useState(false);
  const [tarefa, setTarefa] = useState([]);

  let usuarioLogado = authService.getCurrentUser();

  useEffect(() => {
    serviceAtividade
      .listarPorIdAluno(usuarioLogado.id)
      .then((response) => {
        let data = response.data;
        console.log(data)
        setTarefa(data.atividadeTarefaDTOs);
        setAlunos(data.alunosPbl)
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        dataField: 'alunos',
        text: '',

        formatter: (cellContent, row) => {
            if (cellContent !== '') {
                return (
                    <div>
                        <label className="TituloAtiv"><b>{cellContent}</b></label><br />
                    </div>
                )
            } else {
                return (
                    <div>
                        <label className="TituloAtiv">Atribua algum aluno...</label><br />
                    </div>
                )
            }
        },
        headerStyle: {
            display: 'none'
        }
    },
    {
      dataField: "dataConclusao",
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
    // excluirTarefa(item.id);
  }

  //   const excluirTarefa = (dados) => {
  //     serviceTarefa
  //       .deletar(dados)
  //       .then((response) => {
  //         let data = response.data;
  //         setTarefa(data);
  //         toast.success("Sucesso ao excluir a tarefa.");
  //       })
  //       .catch((error) => {
  //         toast.error("Erro ao excluir a tarefa.");
  //       });
  //   };

  const handleConcluido = (e, item) => {
    e.stopPropagation();
    // if(item.concluido === true){
    //     let status = false
    // }else{
    //     status = true
    // }
    // statusTarefa(item.id,status);

    /*     if (item.concluido === true) {
      status = false;
    } else {
      status = true;
    } */
    /*  statusTarefa(item.id, status); */
  };

  const statusTarefa = (dados, status) => {
    // serviceTarefa
    //   .atualizar(dados, status)
    //   .then((response) => {
    //     let data = response.data;
    //     setTarefa(data);
    //   })
    //   .catch((error) => {
    //     toast.error("Erro modificar status da Tarefa.");
    //   });
  };

  const handleAdd = (item) => {
    // const novaTarefa = {
    //     "concluido": false,
    //     "dataConclusao": "",
    //     "dataCriacao": new Date(),
    //     "descricao": ""
    // }
    const novaTarefa = {
      titulo: "",
      id: 5,
      concluido: false,
      descricao: "",
      dataConclusao: "",
    };

    setTarefa(
      tarefa.map((x) => {
        if (x.id !== item.id) return x;
        return { ...x, tarefas: [...x.tarefas, novaTarefa] };
      })
    );

    setDadosModal(novaTarefa);
    setShow(true);

    // setTarefa({ ...item, tarefa: [...item.tarefa, novaTarefa] });

    // serviceTarefa
    //     .incluirTarefaAtiv(novaTarefa, item.id)
    //     .then((response) => {
    //         let data = response.data;
    //         setTarefa(data);
    //     })
    //     .catch((error) => {
    //         toast.error("Erro adicionar uma tarefa.");
    //     });
  };

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setDadosModal(row);
      setShow(true);
    },
  };

  const onSubmitHandler = (data) => {
    // data = {
    //   ...data,
    //   dataCriacao: format(new Date(), "dd/MM/yyyy"),
    //   disciplina: {
    //     id: 1,
    //   },
    //   professor: {
    //     id: 2,
    //   },
    //   dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    // };
    // console.log(data);
    // atividadeService
    //   .incluir(data)
    //   .then((response) => {
    //     let data = response.data;
    //     toast.success("Tarefa cadastrada com sucesso.");
    //   })
    //   .catch((error) => {
    //     toast.error("Erro ao cadastrar tarefa.");
    //   });
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
      <div>
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
      </div>
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
      <ModalTarefas data={dadosModal} alunos={alunos} show={show} setShow={setShow} />
    </>
  );
}

export default ListagemTarefas;
