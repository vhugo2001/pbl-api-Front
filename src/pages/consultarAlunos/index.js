import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import * as IoIcons from "react-icons/io";
import "../../Components/TableAluno/listAlunos.css";
import serviceUsuario from "../../Services/UsuarioService";
import serviceAluno from "../../Services/AlunoService";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { toast } from "react-toastify";

import {
  Container,
  GroupButton,
  Ativar,
  Desativar,
} from "../../Components/TableAluno/style";
import "../../Components/TableAluno/listAlunos.css";

const { SearchBar } = Search;

export default function ListAluno2(props) {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({});

  useEffect(() => {
    serviceAluno
      .listarTodos()
      .then((response) => {
        let data = response.data;
        if (data !== null && data !== undefined) {
          setAlunos(data.filter((f) => f.excluido !== true));
        }
      })
      .catch((error) => {
        toast.error("Erro ao acessar a lista de alunos.");
      });
  }, [aluno]);

  const colunas = [
    // {
    //     dataField: "id",
    //     text: "Perfil",
    //     sort: true

    // },
    {
      dataField: "nome",
      text: "Nome",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "matricula",
      text: "Matrícula",
      sort: true,
    },
    {
      dataField: "ativo",
      text: "Ativo",
      sort: true,
    },
    {
      dataField: "excluir",
      text: "Excluir",
      formatter: (cellContent, row) => (
        <div>
          <Link className="trash-button" onClick={() => handleExcluir(row)}>
            <IoIcons.IoMdTrash />
          </Link>
        </div>
      ),
    },
  ];

  const selectRow = {
    mode: "checkbox",
    clickToSelect: false,
    classes: "selection-row",
    onSelect: (row, isSelect, rowIndex, e) => {
      setAlunos((rows) => {
        return rows.map((r) => {
          if (r.id !== row.id) {
            return r;
          }

          return { ...r, isSelect };
        });
      });
    },

    onSelectAll: (isSelect, rows, e) => {
      setAlunos((rows) => {
        return rows.map((row) => {
          return { ...row, isSelect };
        });
      });
    },
  };

  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(
      alunos.filter((row) => row.isSelect === true).map((valor) => valor.id)
    );
  }, [alunos]);

  const atualizarAluno = (dados, status) => {
    serviceUsuario
      .alterarStatusAtivo(dados, status)
      .then((response) => {
        let data = response.data;
        setAluno(data);
      })
      .catch((error) => {
        toast.error("Erro ao atualizar lista de alunos");
      });
  };

  const handleAtivar = () => {
    result.forEach((item) => {
      atualizarAluno(item, { ativo: true });
    });
    toast.success("Sucesso ao ativar os alunos.");
  };

  const handleDesativar = () => {
    result.forEach((item) => {
      atualizarAluno(item, { ativo: false });
    });
    toast.success("Sucesso ao desativar os alunos.");
  };

  const handleExcluir = (item) => {
    excluirAluno(item.id, { excluido: true });
  };

  const excluirAluno = (dados, status) => {
    serviceUsuario
      .alterarStatusExcluido(dados, status)
      .then((response) => {
        let data = response.data;
        setAluno(data);
        toast.success("Sucesso ao excluir os aluno.");
      })
      .catch((error) => {
        toast.error("Erro ao excluir o aluno.");
      });
  };

  const rowStyle = (row, rowIndex) => {
    if (row.ativo === false) {
      return { backgroundColor: "#c3b6b6" };
    } else {
      return {};
    }
  };

  const options = paginationFactory({
    page: 1,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
  });

  return (
    <>
      <div className="title-container">
        <h1>Iniciar PBL</h1>
      </div>
      <Container className="container-list">
        <ToolkitProvider keyField="nome" data={alunos} columns={colunas} search>
          {(props) => (
            <div>
              <div class="table-custom-container">
                <div class="table-search">
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Buscar aluno por nome..."
                  />
                  <div class="table-search-icon">
                    <IoIcons.IoMdSearch class="search-icon" />
                  </div>
                </div>
                <BootstrapTable
                  className="list-alunos"
                  pagination={options}
                  {...props.baseProps}
                  bordered={false}
                  rowStyle={rowStyle}
                  striped
                  hover
                  condensed
                  selectRow={selectRow}
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
        <GroupButton>
          <Ativar onClick={handleAtivar}>Ativar</Ativar>
          <Desativar onClick={handleDesativar}>Desativar</Desativar>
        </GroupButton>
      </Container>
    </>
  );
}
