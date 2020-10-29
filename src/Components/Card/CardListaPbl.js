import React, { useState, useEffect } from "react";
import { Card } from "./CardPrincipal";
import pblService from "../../Services/PblService";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import '../TableAtividade/listAtividades.css'

function CardListaPbl() {
  const [pblList, setPblList] = useState([]);

  useEffect(() => {
    listarTodos();
  }, []);

  const listarTodos = () => {
    pblService
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setPblList(data);
      })
      .catch((error) => console.log(error));
  };

  const colunas = [
    {
      dataField: "",
      text: "Status",
    },
    {
      dataField: "problema",
      text: "PBL",
      headerStyle: (colum, colIndex) => {
        return { width: "50%" };
      },
      formatter: (cellContent, row) => (
        <div>
            <label className="TabelaListaPbl">{row.problema}</label>
        </div>
    )
    },
    {
      dataField: "dataConclusao",
      text: "Entrega",
      sort: true,
      
      formatter: (cellContent, row) => (
        <div>
            <label className="DataHeader">{row.dataConclusao}</label>
        </div>
    )
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

  const { SearchBar } = Search;

  return (
    <>
      <Card>
        <div className="title-container ">
          <h5 className="title-card">Lista de PBLs</h5>
        </div>
        <ToolkitProvider keyField="id" data={pblList} columns={colunas} search >
          {(props) => (
            <div>
              <SearchBar
                keyField="nome"
                {...props.searchProps}
                placeholder="Buscar PBL..."
              />

              <BootstrapTable
                {...props.baseProps}
                keyField="nome"
              
                noDataIndication="Sem resultados"
                pagination={options}
                rowStyle={{
                  border: "2px solid #dee2e6",
                  backgroundColor: "#f5fffd",
                  height: "60px",
              
                }}
              />
            </div>
          )}
        </ToolkitProvider>
      </Card>
    </>
  );
}

export default CardListaPbl;
