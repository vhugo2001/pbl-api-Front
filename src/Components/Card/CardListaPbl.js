import React, { useState, useEffect } from "react";
import { Card } from "./CardPrincipal";
import pblService from "../../Services/PblService";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from 'react-bootstrap'



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
          setPblList(data)
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
            return { width: '60%' };
        }
     
        },
        {
          dataField: "dataConclusao",
          text: "Entrega",
          sort: true,
          headerStyle: (colum, colIndex) => {
            return { fontSize: '14px' };
        },
      }
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

    return (
        <>
        <Card>
            <BootstrapTable keyField="nome" data={pblList} columns={colunas} pagination={options}/>
        
        </Card>
        </>
    )
}

export default CardListaPbl;
