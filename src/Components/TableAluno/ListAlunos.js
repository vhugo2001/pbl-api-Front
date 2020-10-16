import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import './listAlunos.css'
import serviceAluno from "../../Services/AlunoService";
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {
    Container,
    Title
} from './style'

const { SearchBar } = Search;



export default function ListAluno(props) {


    // const alunos = [
    //     { id: 1, nome: "Jorge", email: "jj@gmail.com", matricula: '111111111', ativo: true, excluir: false },
    //     { id: 2, nome: "Mateus", email: "MM@gmail.com", matricula: '222222222', ativo: true, excluir: false },
    //     { id: 3, nome: "Carla", email: "CL@gmail.com", matricula: '333333333', ativo: true, excluir: false },
    //     { id: 4, nome: "Francielle", email: "Fran@gmail.com", matricula: '444444444', ativo: true, excluir: false },
    //     { id: 5, nome: "Cleiton", email: "CC@gmail.com", matricula: '555555555', ativo: true, excluir: false }
    // ];
    const colunas = [
        {
            dataField: "id",
            text: "Perfil"
        },
        {
            dataField: "nome",
            text: "Nome"
        },
        {
            dataField: "email",
            text: "Email"
        },
        {
            dataField: "matricula",
            text: "Matrícula"
        },
        {
            dataField: "ativo",
            text: "Ativo",
            formatter: (cellContent, row) => (
                <div className="checkbox">
                    <label>
                        <input type="checkbox" />
                    </label>
                </div>
            )
        },
        {
            dataField: "excluir",
            text: "Excluir",
            formatter: (cellContent, row) => (
                <Link to="/" className="trash-button">
                    <IoIcons.IoMdTrash />
                </Link>
            )
        },
    ];


    const [alunos, setAlunos] = useState([]);
    useEffect(() => {
        serviceAluno
            .listarTodos()
            .then((response) => {
                let data = response.data;
                setAlunos(data);

            })
            .catch((error) => console.log(error));
    }, []);


    const options = {
        custom: true,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
        pageStartIndex: 1,
        firstPageText: 'Primeira página',
        prePageText: 'voltar',
        nextPageText: 'Próximo',
        lastPageText: 'Último',
        nextPageTitle: 'Primeira página',
        firstPageTitle: 'Próxima pagina',
        lastPageTitle: 'Última página',
        // showTotal: true,
        // totalSize: colunas.length
        sizePerPage: 1,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
    };


    const contentTable = ({ paginationProps, paginationTableProps }) => (

        <>
            <Title>Alunos cadastrados </Title>
            <ToolkitProvider
                keyField="nome"
                data={alunos}
                columns={colunas}
                search>
                {
                    props => (
                        <div>

                            <SearchBar {...props.searchProps} placeholder="buscar aluno por nome..." />
                            <hr />
                            <BootstrapTable keyField="id" {...props.baseProps} {...paginationTableProps}
                                bordered={false} striped hover condensed />
                        </div>
                    )
                }
            </ToolkitProvider>
            <PaginationListStandalone {...paginationProps} />
        </>
    );


    return (
        <Container>
            <PaginationProvider
                pagination={
                    paginationFactory(options)
                }
            >
                {contentTable}
            </PaginationProvider>
        </Container>
    );
}
