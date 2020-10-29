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
import serviceAtividade from '../../Services/AtividadeService'

import {
    Title,
    Group,
    LabelClick
} from '../../Components/TableAtividade/style'
import { isEmptyObject } from "jquery";
import { endOfDay } from "date-fns";


const { SearchBar } = Search;

function ListagemAtividades({ idPBL }) {
    const [atividade, setAtividade] = useState([])
    idPBL = 1
    useEffect(() => {
        serviceAtividade
            .listarIdDisciplina(idPBL)
            .then((response) => {
                let data = response.data;
                setAtividade(data);

            })
            .catch((error) => console.log(error));
    }, [idPBL]);

    // {
    //     "dataConclusao": "15/10/2012",
    //     "dataCriacao": "03/07/2011",
    //     "descricao": "Descrição 2",
    //     "disciplina": {
    //       "id": 1
    //     },
    //     "professor": {
    //       "id": 4
    //     },
    //     "titulo": "Titulo2"
    //   }
    // "atividadePbls": [
    //     {
    //       "aluno": {
    //         "id": 0,
    //       },
    //       "dataEntrega": "2020-10-27T19:26:47.085Z",
    //       "id": 0,
    //       "nota": 0,
    //     }
    //   ],

    const tarefa = atividade
    const colunas = [
        {
            dataField: "icone",
            text: "",
            formatter: (cellContent, row) => (

                < div >
                    <div className="BordaIconeTop" />
                    <div className="icon-button">
                        {/* {moment(row.dataConclusao, "DD[/]MM[/]YYYY").isSameOrBefore(moment().add(1, 'days').format("DD[/]MM[/]YYYY"), 'day') ? <IoIcons.IoMdRadioButtonOff style={{ color: '#BB157C' }} />
                            : moment('10/10/2002', "DD[/]MM[/]YYYY").isSameOrBefore(moment(row.dataConclusao, "DD[/]MM[/]YYYY").format("DD[/]MM[/]YYYY"), 'day') ? <IoIcons.IoMdRadioButtonOff style={{ color: 'green' }} /> : <IoIcons.IoMdRadioButtonOff style={{ color: '#C38A0E' }} />}

                        {moment().isAfter(moment(row.dataConclusao, "DD[/]MM[/]YYYY", 'day') ? <IoIcons.IoMdRadioButtonOff style={{ color: '#BB157C' }} />
                            : 1 === 1 ? <IoIcons.IoMdRadioButtonOff style={{ color: 'green' }} /> : <IoIcons.IoMdRadioButtonOff style={{ color: '#C38A0E' }} />} */}

                        {/*e adicionar isEmptyObject(dataEntrega) ==false ,substituir valor base por dataEntrega */}
                        <IoIcons.IoMdRadioButtonOff />
                    </div>
                    <div className="BordaIconeBottom" />
                </div >
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '35px', textAlign: 'center' };
            }
        },
        {
            dataField: 'titulo',
            text: '',
            formatter: (cellContent, row) => (
                <div>
                    <label className="TituloTexto"><b>{row.titulo}</b></label><br />
                    <label className="DescHeader">{row.descricao}</label>
                </div>
            )
        },
        {
            dataField: 'dataConclusao',
            text: '',
            formatter: (cellContent, row) => (
                <div>
                    <label className="ConclusaoTexto">{row.dataConclusao}</label><br />
                </div>
            )
        },
    ];

    const subcolunas = [
        {
            dataField: 'aluno',
            text: 'Aluno responsável',
            editable: false

        }, {
            dataField: 'dataEntrega',
            text: 'Entregue no dia',
            editable: false,


        }, {
            dataField: "icone",
            text: "Arquivo",
            formatter: (cellContent, row) => (
                <div>
                    <div className="icon-file-button">
                        <IoIcons.IoIosDocument />
                    </div>
                </div>
            ),
            editable: false
        },
        {
            dataField: 'nota',
            text: 'Nota',
            formatter: (cellContent, row) => (
                <div>
                    <label style={{ cursor: 'pointer' }}><b>{row.nota}</b></label><br />

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

            < div >
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
                return <b ></b>;
            }
            return <b></b>;
        },
        expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
                return (
                    <div className='SetasExpandir'>
                        <IoIcons.IoMdArrowDropdown />
                    </div>
                );
            }
            return (
                <div className='SetasExpandir'>
                    <IoIcons.IoMdArrowDropleft />
                </div>
            );
        }

    };

    return (
        <>
            <Card>
                <div className="title-container">
                    <h5 className="title-card">Agenda de Atividades</h5>
                </div>
                <ToolkitProvider
                    keyField='id'
                    data={tarefa}
                    columns={colunas}

                    search

                >
                    {
                        props => (
                            <div className="scrollExpandir">
                                <SearchBar keyField='titulo'{...props.searchProps} placeholder='Buscar atividade...' />
                                <div className="icon-button" style={{ marginTop: '10px', marginBottom: '15px' }}>
                                    <IoIcons.IoMdRadioButtonOff style={{ color: 'green', marginLeft: '15px' }} /> <label className="StatusTexto">Entregue</label>
                                    <IoIcons.IoMdRadioButtonOff style={{ color: '#C38A0E' }} /><label className="StatusTexto">Pendente</label>
                                    <IoIcons.IoMdRadioButtonOff style={{ color: '#BB157C' }} /><label className="StatusTexto">Atrasado</label>
                                </div>
                                <BootstrapTable
                                    {...props.baseProps}
                                    bordered={false}
                                    condensed
                                    expandRow={expandRow}
                                    noDataIndication="Sem resultados"
                                    rowStyle={rowStyle}
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


// {
//     "atividadePbls": [
//         {
//             "aluno": {
//                 "id": 1,
//                 "matricula": "string",
//                 "nome": "Thomas"
//             },
//             "dataEntrega": "10/10/2010",
//             "id": 1,
//             "nota": 8
//         }
//     ],
//         "dataConclusao": "11/11/2011",
//             "dataCriacao": "09/09/2009",
//                 "descricao": "Descrição Teste",
//                     "disciplina": {
//         "id": 1
//     },
//     "professor": {
//         "id": 1
//     },
//     "titulo": "Titulo Teste"
// }