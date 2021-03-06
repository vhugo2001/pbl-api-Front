import React, { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

import * as IoIcons from "react-icons/io";
import "../../Components/TableAtividade/listAtividades.css";

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { toast } from "react-toastify";
import { Card } from "../../Components/Card/CardPrincipal";
import serviceAtividade from "../../Services/AtividadeService";
import cellEditFactory from "react-bootstrap-table2-editor";

import { format, subDays, compareAsc } from "date-fns";

const { SearchBar } = Search;

function ListagemAtividades({
  selectedPbl,
  setSelectedAtividade,
  isAtualizar,
}) {
  const [atividade, setAtividade] = useState([]);
  const [selectedAtividadeEditado, setSelectedAtividadeEditado] = useState({});

  let dataEntreg;
  let alunoResp;

  useEffect(() => {
    if (selectedPbl !== null && selectedPbl !== undefined && isAtualizar) {
      serviceAtividade
        .listarIdPbl(selectedPbl)
        .then((response) => {
          let data = response.data;
          setAtividade(data);
        })
        .catch((error) => {
          toast.error("Não foi possível selecionar o aluno.");
        });
    }
  }, [selectedPbl, isAtualizar]);

  useEffect(() => {
    console.log(selectedAtividadeEditado.id);

    if (selectedAtividadeEditado.id !== undefined) {
      serviceAtividade
        .atualizarAtivPbl(selectedAtividadeEditado.id, selectedAtividadeEditado)
        .then((response) => {
          toast.success("Nota editada com sucesso.");
        })
        .catch((error) => {
          toast.danger("Não foi possível editar a nota.");
        });
    }
  }, [selectedAtividadeEditado]);

  const tarefa = atividade;

  const colunas = [
    {
      dataField: "icone",
      text: "",

      formatter: (cellContent, row) => {
        console.log(row);
        let statusColor;

        if (row.atividadePbls.length > 0) {
          let dataHoje = new Date();
          let dataConclusaoAtividade = new Date(
            row.dataConclusao.split("/").reverse().join("-")
          );
          let dataEntrega =
            row.atividadePbls[0].dataEntrega !== null
              ? new Date(
                  row.atividadePbls[0].dataEntrega
                    .split("/")
                    .reverse()
                    .join("-")
                )
              : new Date("2000-01-01");

          //ENTREGUE
          if (dataEntrega != null) statusColor = "green";

          //ATRASADO
          if (
            compareAsc(dataHoje, dataConclusaoAtividade) === 1 ||
            compareAsc(dataEntrega, dataConclusaoAtividade) === 1
          )
            statusColor = "#BB157C";

          //PENDETE
          if (compareAsc(dataConclusaoAtividade, dataHoje))
            statusColor = "#C38A0E";
        }

        return (
          <div>
            <div
              className="BordaIconeTop"
              style={{ borderColor: statusColor }}
            />
            <div className="icon-button">
              <IoIcons.IoMdRadioButtonOff style={{ color: statusColor }} />
            </div>
            <div
              className="BordaIconeBottom"
              style={{ borderColor: statusColor }}
            />
          </div>
        );
      },
      headerStyle: (colum, colIndex) => {
        return {
          width: "35px",
          textAlign: "center",
          backgroundColor: "#FFF",
          border: "none",
        };
      },
    },
    {
      dataField: "titulo",
      text: "",

      formatter: (cellContent, row) => (
        <div>
          <label className="TituloTexto">
            <b>{row.titulo}</b>
          </label>
          <br />
          <label className="DescHeader">{row.descricao}</label>
        </div>
      ),
      headerStyle: {
        display: "none",
      },
    },
    {
      dataField: "dataConclusao",
      text: "",

      formatter: (cellContent, row) => (
        <div style={{ textAlign: "end" }}>
          <label className="ConclusaoTexto">{row.dataConclusao}</label>
          <br />
        </div>
      ),

      headerStyle: {
        display: "none",
      },
    },
  ];

  const subcolunas = [
    {
      dataField: "atividadePbls",
      text: "Aluno",
      formatter: (cellContent, row) => (
        <div>
          {cellContent.forEach((item) => {
            if (item.aluno !== null && item.aluno !== undefined) {
              alunoResp = item.aluno.nome;
            }
          })}
          <label>
            <b>{alunoResp}</b>
          </label>
          <br />
        </div>
      ),
      editable: false,
    },
    {
      dataField: "atividadePbls",
      text: "Data Entrega",
      formatter: (cellContent, row) => (
        <div>
          {cellContent.forEach((item) => {
            dataEntreg = item.dataEntrega;
          })}

          <label>
            <b>{dataEntreg}</b>
          </label>
          <br />
        </div>
      ),
      editable: false,
    },
    {
      dataField: "icone",
      text: "Arquivo",
      formatter: (cellContent, row) => (
        <div>
          <div className="icon-file-button">
            <IoIcons.IoIosDocument />
          </div>
        </div>
      ),
      editable: false,
    },
    {
      dataField: "atividadePbls[0].nota",
      text: "Nota",
      formatter: (cellContent, row) => (
        <div>
          {console.log(row)}
          {console.log(cellContent)}
          <label>
            <b>{cellContent}</b>
          </label>
          <br />
        </div>
      ),
    },
  ];

  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      setSelectedAtividade(row.id);
    },
  };

  const rowStyle = (row, rowIndex) => {
    return { backgroundColor: "#fff", cursor: "pointer" };
  };
  const verificaDesc = (row) => {
    if (row.descricao === "" || row.descricao === null) {
      row.descricao = "Não há descrição para esta atividade";
      return [row];
    } else {
      return [row];
    }
  };

  const validaNota = (nota, row) => {
    if (!nota === "" || !/^\d+$/.test(nota)) {
      toast.warn("Insira apenas números!");
    } else {
      setSelectedAtividadeEditado(row);
    }
  };

  const cellEdit = cellEditFactory({
    mode: "click",
    blurToSave: true,
    afterSaveCell: (oldValue, newValue, row, column) => {
      validaNota(newValue, row);
    },
  });

  const expandRow = {
    renderer: (row) => (
      <div>
        <ToolkitProvider
          keyField="id"
          data={verificaDesc(row)}
          columns={subcolunas}
        >
          {(props) => (
            <div>
              <BootstrapTable
                {...props.baseProps}
                cellEdit={cellEdit}
                // bordered={false}
                condensed
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    ),

    expandColumnPosition: "right",
    expandByColumnOnly: true,
    onlyOneExpanding: true,
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
          <div className="SetasExpandir">
            <IoIcons.IoMdArrowDropdown />
          </div>
        );
      }
      return (
        <div className="SetasExpandir">
          <IoIcons.IoMdArrowDropleft />
        </div>
      );
    },
  };

  return (
    <>
      <Card>
        <div className="title-container">
          <h5 className="title-card">Agenda de Atividades</h5>
        </div>
        <ToolkitProvider keyField="id" data={tarefa} columns={colunas} search>
          {(props) => (
            <>
              <div className="table-searchAtividades">
                <SearchBar
                  keyField="titulo"
                  {...props.searchProps}
                  placeholder="Buscar atividade..."
                />
                <div class="table-search-icon">
                  <IoIcons.IoMdSearch class="search-icon" />
                </div>
              </div>
              <div className="scrollExpandir">
                <div className="icon-button-Indicativo">
                  <IoIcons.IoMdRadioButtonOff
                    style={{ color: "green", marginLeft: "15px" }}
                  />{" "}
                  <label className="StatusTexto">Entregue</label>
                  <IoIcons.IoMdRadioButtonOff style={{ color: "#C38A0E" }} />
                  <label className="StatusTexto">Pendente</label>
                  <IoIcons.IoMdRadioButtonOff style={{ color: "#BB157C" }} />
                  <label className="StatusTexto">Atrasado</label>
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  bordered={false}
                  rowEvents={tableRowEvents}
                  condensed
                  expandRow={expandRow}
                  noDataIndication="Sem resultados"
                  rowStyle={rowStyle}
                />
              </div>
            </>
          )}
        </ToolkitProvider>
      </Card>
    </>
  );
}

export default ListagemAtividades;
