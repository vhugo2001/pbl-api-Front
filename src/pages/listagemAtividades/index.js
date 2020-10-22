import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import '../../Components/TableAtividade/listAtividades.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Alert from "../../Components/Alert/CustomAlert";
import { Card } from "../../Components/Card/CardPrincipal";
import cellEditFactory from 'react-bootstrap-table2-editor';
import {
    Container,
    Title,
    GroupButton,
    Ativar,
    Desativar
} from '../../Components/TableAtividade/style'
import { isEmptyObject } from "jquery";

const { SearchBar } = Search;

function ListagemAtividades() {
    const [messagem, setMensagem] = useState("");
    const [variant, setVariant] = useState("");


    const tarefa = [
        {
            id: 1, nome: "Direcionamento da pesquisa ", atividades: [
                { id: 1, nome: "Ativ 1", responsavel: "aluno 1", entrega: "06/11/2020" },
                { id: 2, nome: "Ativ 2", responsavel: "aluno 2", entrega: "06/11/2020" }
            ]
        },
        {
            id: 2, nome: "Projeto de Pesquisa", atividades: [{
                id: 2, nome: "Ativ 2", responsavel: "aluno 3", entrega: "06/11/2020"
            },
            ]
        },
        { id: 3, nome: "Relatório de pesquisa", atividades: [] },
        { id: 4, nome: "Produtos ", atividades: [] },
    ]

    const colspanForLastRow = (cell, row, rowIndex, colIndex) => {
        return { colSpan: `3` }
    }
    const hiddenColForLastRow = (cell, row, rowIndex, colIndex) => {
        return { hidden: true }
    }

    const colunas = [{
        dataField: 'nome',
        text: 'Atividade',
        attrs: colspanForLastRow,
    }, {
        dataField: 'resp',
        text: 'Responsavel',
        attrs: hiddenColForLastRow,
    }, {
        dataField: 'entreg',
        text: 'Data de Entrega',
        attrs: hiddenColForLastRow,
    }];

    const subcolunas = [{
        dataField: 'nome',
        text: 'Nome da atividade',
        headerStyle: {
            display: 'none'
        }
    }, {
        dataField: 'responsavel',
        text: 'Responsável pela tarefa',
        headerStyle: {
            display: 'none'
        }
    }, {
        dataField: 'entrega',
        text: 'Data de entrega',
        headerStyle: {
            display: 'none'
        }

    }];

    const rowStyle = (row, rowIndex) => {
        return { backgroundColor: '#b1b1b1' };

    };

    function verificarSub(row) {
        if (row.atividades.length === 0) {
            const subLinhaVazia = [{ nome: "Não há tarefas para esta atividades" }]
            return subLinhaVazia
        } else {
            return row.atividades
        }
    }

    function verificarEdit(row) {
        if (row.atividades.length === 0) {
            return ""
        } else {
            return cellEditFactory({ mode: 'click' })
        }
    }
    const expandRow = {
        renderer: (row) => (
            <div>
                <ToolkitProvider
                    keyField='id'
                    data={verificarSub(row)}
                    columns={subcolunas}

                >
                    {
                        props => (
                            <div>
                                <BootstrapTable
                                    {...props.baseProps}
                                    bordered={false}
                                    hover condensed
                                    rowStyle={rowStyle}
                                    cellEdit={verificarEdit(row)}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    };

    return (
        <>
            <div className="title-container">
                <h1>Agenda de Atividades</h1>
                <Alert _mensagem={messagem} _variant={variant} />
            </div>
            <Card>
                <ToolkitProvider
                    keyField='id'
                    data={tarefa}
                    columns={colunas}
                    search

                >
                    {
                        props => (
                            <div className="scrollExpandir">
                                <SearchBar keyField='nome'{...props.searchProps} placeholder='Buscar atividade...' />
                                <BootstrapTable
                                    {...props.baseProps}
                                    bordered={false}
                                    hover condensed
                                    expandRow={expandRow}


                                />
                            </div>
                        )
                    }
                </ToolkitProvider>

            </Card>
        </>
    );
}

export default ListagemAtividades;