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
import { toast } from "react-toastify";
import { Card } from "../../Components/Card/CardPrincipal";
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import {
    Container,
    Title,
    GroupButton,
    Ativar,
    Desativar
} from '../../Components/TableAtividade/style'
import { isEmptyObject } from "jquery";
import { endOfDay } from "date-fns";



const { SearchBar } = Search;

function ListagemAtividades() {
    const [messagem, setMensagem] = useState("");
    const [variant, setVariant] = useState("");
    const tarefa = [
        {
            atividade: { id: 1 }, professor: { id: 1 }, nota: 10, titulo: "Atividade 1", dataFim: "11/11/2011", descricao: "Descrição curta"
        },
        {
            atividade: { id: 2 }, professor: { id: 2 }, nota: 8.3, titulo: "Exercicio", dataFim: "11/11/2011",
            descricao: "Descrição de tamanho bem mediana, na média. Entre longa e curta."
        },
        { atividade: { id: 3 }, professor: { id: 3 }, nota: 3.8, titulo: "Pesquisa academica", dataFim: "11/11/2011", descricao: "" },
        {
            atividade: { id: 4 }, professor: { id: 4 }, nota: 5, titulo: "Trabalho de campo", dataFim: "11/11/2011",
            descricao: "Uma descrição beeeeeeeeeeeeeeeeeeeeem looooooooooooooooonga para verficar como o espaço irá se comportar, e bla bla bla bla. Muito longo mesmo, hmmm, aé Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim, sapien ac luctus hendrerit, massa nisl lacinia lacus, vel porta erat mi id est."
        },
    ]

    const colunas = [
        {
            dataField: "excluir",
            text: "",
            editable: false,
            formatter: (cellContent, row) => (
                <div>
                    <Link className="icon-button" >
                        <IoIcons.IoMdRadioButtonOff />
                    </Link>
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '35px', textAlign: 'center' };
            }
        },
        {
            dataField: 'titulo',
            text: 'Atividade',
            formatter: (cellContent, row) => (
                <div>
                    <label><b>{row.titulo}</b></label><br />
                    <label className="DescHeader">{row.descricao}</label>
                </div>
            )

        },
        {
            dataField: 'dataFim',
            text: 'Data de entrega',

        },
    ];

    const subcolunas = [{
        dataField: 'descricao',
        text: 'descrição',
        editor: {
            type: Type.TEXTAREA
        },
        headerStyle: {
            display: 'none'
        }
    }, {
        dataField: 'nota',
        text: 'Nota',
        headerStyle: {
            display: 'none'
        },
        formatter: (cellContent, row) => (
            <div>
                <label>Nota: {`${row.nota}`}</label>
            </div>
        )
    }
    ];

    const rowStyle = (row, rowIndex) => {
        return { backgroundColor: 'rgba(153, 186, 194,0.3)' };

    };

    const onAfterSaveCell = (valorAntigo, valorNovo, row, column) => {
        // Inserir metodo PUT para edição
        console.log(row.descricao)
        valorAntigo = valorNovo
    }

    const verificaDesc = (row) => {
        if (row.descricao === "" || row.descricao === null) {
            row.descricao = "Não há descrição para esta atividade"
            return [row]
        } else {
            return [row]
        }
    }

    const expandRow = {
        renderer: (row) => (

            <div>
                <ToolkitProvider
                    keyField='id'
                    data={verificaDesc(row)}
                    columns={subcolunas}

                >
                    {
                        props => (
                            <div>
                                <BootstrapTable
                                    {...props.baseProps}
                                    bordered={false}
                                    condensed
                                    cellEdit={cellEditFactory({ mode: 'click', blurToSave: true, afterSaveCell: onAfterSaveCell })}

                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div >
        ),
        expandColumnPosition: 'right',
        expandByColumnOnly: true,
        showExpandColumn: true,
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            if (isAnyExpands) {
                return <b>-</b>;
            }
            return <b>+</b>;
        },
        expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
                return (
                    <label>v</label>
                );
            }
            return (
                <label>&lt;</label> // &lt; equivale a < 
            );
        }

    };

    return (
        <>
            <div className="title-container">
                <h1>Agenda de Atividades</h1>
            </div>
            <Card>
                <ToolkitProvider
                    keyField='atividade'
                    data={tarefa}
                    columns={colunas}
                    search

                >
                    {
                        props => (
                            <div className="scrollExpandir">
                                <SearchBar keyField='titulo'{...props.searchProps} placeholder='Buscar atividade...' />
                                <BootstrapTable
                                    {...props.baseProps}
                                    bordered={false}
                                    condensed
                                    expandRow={expandRow}
                                    noDataIndication="Sem resultados"
                                    rowStyle={rowStyle}
                                    cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
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