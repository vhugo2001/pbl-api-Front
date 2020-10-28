import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import "./listAlunos.css";
import serviceAluno from "../../Services/AlunoService";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Container, Title, GroupButton, Ativar, Desativar } from "./style";
import { IconContext } from "react-icons";
import { data } from "jquery";

const { SearchBar } = Search;

export default function ListAluno(props) {
  const [alunos, setAlunos] = useState([]);
  const [linha, setLinha] = useState([]);

  useEffect(() => {
    listarTodos();
   
  }, []);

  const listarTodos = () => {
    serviceAluno
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setAlunos(data.filter((f) => f.excluido !== true));
      })
      .catch((error) => console.log(error));
  };

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
      // formatter: (cellContent, row) => (
      //     <div className="checkbox">
      //         <label>

      //             {console.log(row)}
      //             <input type="checkbox" checked={row.ativo} />
      //         </label>
      //     </div>
      // )
    },
    {
      dataField: "excluir",
      text: "Excluir",
      formatter: (cellContent, row) => (
        <div>
          <Link className="trash-button">
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

  const selectedRows = alunos.filter((row) => row.isSelect);
  let result = selectedRows.map((valor) => valor.id);

  const handleAtivar = () => {
    const ativoStatus = {
      ativo: true,
      // "email": "string",
      // "matricula": "string",
      // "nome": "string",
    };

    let atribuiResult = result.forEach(atualizarAtivo);

    function atualizarAtivo(item) {
      serviceAluno
        .atualizarAtivo(item, ativoStatus)
        .then((response) => {
          let data = response.data;
          setAlunos(data);
          alert("Alunos ativados");
        })
        .catch((error) => console.log(error));
    }
  };
  const handleDesativar = () => {
    const ativoStatus = {
      ativo: false,
    };
    let atribuiResult = result.forEach(atualizarDesativo);

    function atualizarDesativo(item) {
      serviceAluno
        .atualizarAtivo(item, ativoStatus)
        .then((response) => {
          let data = response.data;
          setAlunos(data);
          alert("Alunos desativados");
        })
        .catch((error) => console.log(error));
    }
  };

  const rowStyle = (row, rowIndex) => {
    if (row.ativo === false) {
      return { backgroundColor: "#f2f2f2" };
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
    <Container>
       <Title>Alunos cadastrados </Title>
     
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
  );
}
