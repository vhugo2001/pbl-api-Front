// import React, { useEffect, useState } from "react";
// import { Card } from "../../Components/Card/CardPrincipal";
// import ListAluno from "../../Components/TableAluno/ListAlunos"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import DropDownList from "../../Components/DropDownList/Default/DropDownList";
// import DropDownListAlunos from "../../Components/DropDownList/Alunos/DropDownList";
// import serviceAluno from "../../Services/AlunoService";
// import serviceTema from "../../Services/TemaPblService";

// import '../../Components/App.css'
// import servicePbl from "../../Services/PblService";
// import { isEmptyObject } from "jquery";

// const ConsultarAlunos = () => {
//   return (
//     <>
//       <div className="iniciar-pbl-title">
//         <h1>Consultar Alunos</h1>
//       </div>
//       <ListAluno />

//     </>
//   );
// };
// export default ConsultarAlunos;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import '../../Components/TableAluno/listAlunos.css'
import serviceUsuario from "../../Services/UsuarioService";
import serviceAluno from "../../Services/AlunoService";
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Alert from "../../Components/Alert/CustomAlert";
import { Card } from "../../Components/Card/CardPrincipal";
import {
  Container,
  Title,
  GroupButton,
  Ativar,
  Desativar
} from '../../Components/TableAluno/style'

const { SearchBar } = Search;

export default function ListAluno(props) {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({});
  const [messagem, setMensagem] = useState("");
  const [variant, setVariant] = useState("");

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
        setMensagem("Erro ao acessar a lista de alunos.");
        setVariant("danger");
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
      sort: true
    },
    {
      dataField: "email",
      text: "Email",
      sort: true
    },
    {
      dataField: "matricula",
      text: "Matrícula",
      sort: true
    },
    {
      dataField: "ativo",
      text: "Ativo",
      sort: true
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
      )
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
    }
  };

  const [result, setResult] = useState([])

  useEffect(() => {
    setResult(alunos.filter((row) => row.isSelect === true).map(valor => valor.id));

  }, [alunos])

  const atualizarAluno = (dados, status) => {
    serviceUsuario
      .alterarStatusAtivo(dados, status)
      .then((response) => {
        let data = response.data;
        setAluno(data)

      })
      .catch((error) => {
        setMensagem("Erro ao atualizar a lista de alunos.");
        setVariant("danger");
      })
  }

  const handleAtivar = () => {

    result.forEach((item) => {
      atualizarAluno(item, { "ativo": true })
    })
    setMensagem("Sucesso ao ativar os alunos.");
    setVariant("success");
  }

  const handleDesativar = () => {
    result.forEach((item) => {
      atualizarAluno(item, { "ativo": false })
    })
    setMensagem("Sucesso ao desativar os alunos.");
    setVariant("success");
  }


  const handleExcluir = (item) => {

    excluirAluno(item.id, { "excluido": true })
  }

  const excluirAluno = (dados, status) => {

    serviceUsuario
      .alterarStatusExcluido(dados, status)
      .then((response) => {
        let data = response.data;
        setAluno(data)
        setMensagem("Sucesso ao excluir o aluno.");
        setVariant("success");
      })
      .catch((error) => {
        setMensagem("Erro ao excluir o aluno da lista.");
        setVariant("danger");
      })
  }



  const rowStyle = (row, rowIndex) => {

    if (row.ativo === false) {
      return { backgroundColor: '#c3b6b6' };
    } else {
      return {};
    }

  };


  const options = paginationFactory({
    page: 1,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,

  });

  return (
    <>
      <div className="title-container">
        <h1>Consultar Alunos</h1>
        <Alert _mensagem={messagem} _variant={variant} />
      </div>
      <Card className="cardPrincipal">
        <Container className="cardListagem">
          <ToolkitProvider
            keyField='id'
            data={alunos}
            columns={colunas}
            search
          >
            {
              props => (
                <div>
                  <SearchBar keyField='nome'{...props.searchProps} placeholder='Buscar aluno por nome...' />
                  <BootstrapTable
                    pagination={options}
                    {...props.baseProps}
                    bordered={false}
                    rowStyle={rowStyle}
                    hover condensed
                    selectRow={selectRow}
                  />
                </div>
              )
            }
          </ToolkitProvider>
        </Container>
        <GroupButton>
          <Ativar onClick={handleAtivar}>Ativar</Ativar>
          <Desativar onClick={handleDesativar}>Desativar</Desativar>
        </GroupButton>
      </Card>
    </>
  );
}
