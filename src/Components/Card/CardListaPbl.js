import React, { useState, useEffect } from "react";
import { Card } from "./CardPrincipal";
import pblService from "../../Services/PblService";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "../TableAtividade/listAtividades.css";

function CardListaPbl({ setSelectedPbl }) {
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
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const colunas = [
    {
      dataFields: "idPbl",
      hidden: true,
      formatter: (cellContent, row) => row.idPbl,
    },
    {
      dataField: "",
      text: "Status",
      style: { cursor: "pointer" },
    },
    {
      dataField: "problema",
      text: "PBL",
      style: { cursor: "pointer" },
      headerStyle: (colum, colIndex) => {
        return { width: "50%" };
      },
      formatter: (cellContent, row) => (
        <div>
          <label className="TabelaListaPbl">{row.problema}</label>
        </div>
      ),
    },
    {
      dataField: "dataConclusao",
      text: "Entrega",
      sort: true,
      style: { cursor: "pointer" },

      formatter: (cellContent, row) => (
        <div>
          <label className="TabelaListaData">{row.dataConclusao}</label>
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
      setSelectedPbl(row);
    },
  };

  const { SearchBar } = Search;

  return (
    <>
      <Card>
        <ToolkitProvider keyField="id" data={pblList} columns={colunas} search>
          {(props) => (
            <div>
              <div className="header-container">
                <div className="title-container title-pbl-container">
                  <h5 className="title-card">Lista de PBLs</h5>
                </div>
                <div className="table-search-pbl">
                  <SearchBar
                    keyField="nome"
                    {...props.searchProps}
                    placeholder="Buscar PBL..."
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
    </>
  );
}

export default CardListaPbl;
