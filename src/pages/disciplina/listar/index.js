import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import BootstrapTable from "react-bootstrap-table-next";
import { Modal, Button } from "react-bootstrap";
import { Card } from "../../../Components/Card/CardPrincipal";
import serviceDisciplina from "../../../Services/DisciplinaService";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as IoIcons from "react-icons/io";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "../../../Components/TableAtividade/style";
import "./styles.css";
import { toast } from "react-toastify";
import DisciplinaService from "../../../Services/DisciplinaService";

const Index = ({ setSelectedDisciplina, selectedDisciplina, isAtualizar }) => {
  const [disciplinaList, setDisciplinaList] = useState([]);
  const [show, setShow] = useState(false);

  const onSubmitHandler = (data) => {
    console.log(data);
    serviceDisciplina
      .incluir(data)
      .then((response) => {
        toast.success("Disciplina cadastrada com sucesso.");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  useEffect(() => {
    listarTodos();
  }, []);

  useEffect(() => {
    if (isAtualizar) listarTodos();
  }, [isAtualizar]);

  const listarTodos = () => {
    serviceDisciplina
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setDisciplinaList(data);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const handleExcluir = () => {
    setShow(false);
    serviceDisciplina
      .deletar(selectedDisciplina.id)
      .then((response) => {
        toast.success("Disciplina excluida com sucesso.");
        listarTodos();
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const handleAlterar = (row) => {
    setSelectedDisciplina({ id: row.id, nome: row.nome });
  };

  const handleClose = () => setShow(false);
  const handleShow = (row) => {
    setShow(true);
    setSelectedDisciplina({ id: row.id, nome: row.nome });
  };

  const colunas = [
    {
      dataFields: "id",
      hidden: true,
      formatter: (cellContent, row) => row.id,
    },
    {
      dataField: "nome",
      text: "Nome",
      style: { cursor: "pointer" },
      headerStyle: (colum, colIndex) => {
        return { width: "80%" };
      },
      formatter: (cellContent, row) => (
        <div>
          <label className="TabelaListaPbl">{row.nome}</label>
        </div>
      ),
    },

    {
      dataField: "acoes",
      text: "Ações",
      formatter: (cellContent, row) => (
        <div class="container-acoes">
          <div onClick={() => handleAlterar(row)}>
            <IoIcons.IoMdCreate />
          </div>
          <div onClick={() => handleShow(row)}>
            <IoIcons.IoMdTrash />
          </div>
        </div>
      ),
    },
  ];

  const options = paginationFactory({
    page: 1,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
  });

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    hideSelectColumn: true,
  };
  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      setSelectedDisciplina({ id: row.id, nome: row.nome });
    },
  };

  const { SearchBar } = Search;

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <>
      <Card>
        <ToolkitProvider
          keyField="id"
          data={disciplinaList}
          columns={colunas}
          search
        >
          {(props) => (
            <div>
              <div className="header-container">
                <div className="title-container title-pbl-container">
                  <h5 className="title-card">Lista de Disciplinas</h5>
                </div>
                <div className="table-search-pbl">
                  <SearchBar
                    keyField="nome"
                    {...props.searchProps}
                    placeholder="pesquisar..."
                  />
                  <div class="table-search-icon">
                    <IoIcons.IoMdSearch class="search-icon" />
                  </div>
                </div>
              </div>
              <BootstrapTable
                {...props.baseProps}
                keyField="nome"
                rowEvents={tableRowEvents}
                selectRow={selectRow}
                noDataIndication="Sem resultados"
                pagination={options}
                rowStyle={{
                  borderTop: "1px solid #eeeef4",
                  height: "60px",
                }}
              />
            </div>
          )}
        </ToolkitProvider>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Não é possivel excluir disciplinas que já possuem vinculo com PBL
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleExcluir}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Index;
