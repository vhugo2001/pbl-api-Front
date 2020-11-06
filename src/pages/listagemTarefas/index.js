import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import '../../Components/TableTarefa/listagemTarefa.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { toast } from "react-toastify";
import { Card } from "../../Components/Card/CardPrincipal";
import serviceAtividade from '../../Services/AtividadeService'
import cellEditFactory from 'react-bootstrap-table2-editor';
import {
    Title,
    Group,
    LabelClick
} from '../../Components/TableTarefa/style'

const { SearchBar } = Search;

function ListagemTarefas() {
    // { selectedPbl, setSelectedAtividade }
    const [atividade, setAtividade] = useState([])
    let notas
    let dataEntreg
    let alunoResp

    useEffect(() => {

        serviceAtividade
            .listarIdPbl(13)
            .then((response) => {
                let data = response.data;
                setAtividade(data);

            })
            .catch((error) => {

                toast.error("Não foi possível selecionar o aluno.");
            });

    }, []);

    const tarefa = atividade

    const colunas = [

        {
            dataField: 'titulo',
            text: 'Atividade',

            formatter: (cellContent, row) => (
                <div>
                    <label className="TituloAtiv"><b>{row.titulo}</b></label><br />
                </div>
            ), headerStyle: (colum, colIndex) => {
                return { backgroundColor: 'transparent', border: 'none' };
            }

        },

        {
            dataField: 'descricao',
            text: 'Descrição',
            formatter: (cellContent, row) => (
                <div>
                    <label className="DescAtiv">{row.descricao}</label><br />

                </div>
            ), headerStyle: (colum, colIndex) => {
                return { backgroundColor: 'transparent', border: 'none' };
            }

        },
        {
            dataField: 'dataConclusao',
            text: 'Data de Conclusão',

            formatter: (cellContent, row) => (
                <div style={{ textAlign: 'end' }}>
                    <label className="ConclusaoAtiv">{row.dataConclusao}</label><br />
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { textAlign: 'end', backgroundColor: 'transparent', border: 'none' };
            }

        },

    ];




    const subcolunas = [
        {
            dataField: "icone",
            text: "",

            formatter: (cellContent, row) => (

                < div >
                    <div className="icone-button" onClick={() => alert('aaa')}>
                        <IoIcons.IoIosCheckmarkCircleOutline />
                    </div>

                </div >
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '35px', height: '5px', textAlign: 'center', backgroundColor: 'transparent', border: 'none' };
            }, editable: false
        },
        {
            dataField: 'titulo',
            text: '',

            formatter: (cellContent, row) => (
                <div>
                    <label className="TituloAtiv"><b>{row.titulo}</b></label><br />
                </div>
            ),
            headerStyle: {
                display: 'none'
            },
            editable: false
        },
        {
            dataField: 'atividadePbls',
            text: 'Aluno',
            formatter: (cellContent, row) => (
                <div >
                    {cellContent.forEach((item) => {
                        if (item.aluno !== null && item.aluno !== undefined) {
                            alunoResp = item.aluno.nome

                        }


                    })}
                    <label ><b>{alunoResp}</b></label><br />

                </div>
            ), headerStyle: {
                display: 'none'
            },
            editable: false
        }, {
            dataField: 'atividadePbls',
            text: 'Data Entrega',
            formatter: (cellContent, row) => (
                <div >
                    {cellContent.forEach((item) => {

                        dataEntreg = item.dataEntrega


                    })}


                    <label ><b>{dataEntreg}</b></label><br />

                </div>
            ),
            headerStyle: {
                display: 'none'
            },
            editable: false
        },
    ];

    const rowStyle = (row, rowIndex) => {
        return { backgroundColor: '#fff' };

    };
    const verificaDesc = (row) => {
        if (row.descricao === "" || row.descricao === null) {
            row.descricao = "Não há descrição para esta atividade"
            return [row]
        } else {
            return [row]
        }
    }

    const cellEdit = cellEditFactory({
        mode: 'click',
        blurToSave: true,
        afterSaveCell: (oldValue, newValue, row, column) => {

        }
    });

    const expandRow = {

        renderer: (row) => (

            < div >
                <ToolkitProvider
                    keyField='id'
                    data={verificaDesc(row)}

                    columns={subcolunas}
                >

                    {
                        props => (

                            < div >

                                <BootstrapTable
                                    {...props.baseProps}
                                    cellEdit={cellEdit}
                                    condensed
                                    bordered={false}
                                />
                            </div>
                        )

                    }
                </ToolkitProvider>
            </div >
        ),

        expandColumnPosition: 'right',

        onlyOneExpanding: true,
        showExpandColumn: true,
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            if (isAnyExpands) {
                return <b ></b>;
            }
            return <b></b>;
        },
        expandColumnRenderer: ({ expanded }) => {

            if (expanded) {
                return (
                    <div className='SetasExpand'>
                        <IoIcons.IoMdArrowDropdown />
                    </div>
                );
            }
            return (
                <div className='SetasExpand'>
                    <IoIcons.IoMdArrowDropleft />
                </div>
            );
        }
    };

    return (
        <>
            <div className="title-container">
                <h1>Consultar Tarefas</h1>
            </div>
            <Card >
                <ToolkitProvider
                    keyField='id'
                    data={tarefa}
                    columns={colunas}

                    search

                >
                    {
                        props => (
                            <>
                                <div className="table-searchAtiv">
                                    <SearchBar keyField='titulo'{...props.searchProps} placeholder='Buscar atividade...' />
                                    <div class="table-search-icon">
                                        <IoIcons.IoMdSearch class="search-icon" />
                                    </div>
                                </div>
                                <div className="scrollExpand">
                                    <BootstrapTable
                                        {...props.baseProps}
                                        bordered={false}

                                        condensed
                                        expandRow={expandRow}
                                        noDataIndication="Sem resultados"
                                        rowStyle={rowStyle} />
                                </div>
                            </>
                        )
                    }
                </ToolkitProvider>
            </Card>

        </>

    );

}

export default ListagemTarefas;