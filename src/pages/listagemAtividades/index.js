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
import serviceAtividade from '../../Services/AtividadeService'

import {
    Title,
    Group,
    LabelClick
} from '../../Components/TableAtividade/style'
import { isEmptyObject } from "jquery";
import { endOfDay } from "date-fns";


const { SearchBar } = Search;

function ListagemAtividades({ selectedPbl, setSelectedAtividade }) {
    const [atividade, setAtividade] = useState([])

    const [alunoid, setAlunoid] = useState('')
    let notas
    let dataEntreg
    let alunoResp

    useEffect(() => {

        serviceAtividade
            .listarIdPbl(selectedPbl)
            .then((response) => {
                let data = response.data;
                setAtividade(data);
                console.log(response.data)
            })
            .catch((error) => console.log(error));
    }, [selectedPbl]);

    // {
    //     "dataConclusao": "01/10/2021",
    //     "dataCriacao": "01/05/2020",
    //     "descricao": "Descrição 2 testando atividade",
    //     "disciplina": {
    //       "id": 1
    //     },
    //     "professor": {
    //       "id": 4
    //     },
    //     "titulo": "Titulo Testando atividadePbls"
    // "atividadePbls": [
    //     {
    //       "aluno": {
    //         "id": 2
    //       },
    //       "dataEntrega": "07/11/2020",
    //       "id": 2,
    //       "nota": 8
    //     }
    //   ],
    //   }



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
                return { width: '35px', textAlign: 'center', backgroundColor: '#FFF', border: 'none' };
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
            ),
            headerStyle: {
                display: 'none'
            }
        },
        {
            dataField: 'dataConclusao',
            text: '',
            formatter: (cellContent, row) => (
                <div>
                    <label className="ConclusaoTexto">{row.dataConclusao}</label><br />
                </div>
            ),
            headerStyle: {
                display: 'none'
            }
        },
    ];

    const subcolunas = [
        {
            dataField: 'atividadePbls',
            text: 'Aluno responsável',
            formatter: (cellContent, row) => (
                <div className='valoresNoExpand'>
                    {cellContent.forEach((item) => {
                        if (item.aluno !== null && item.aluno !== undefined) {
                            alunoResp = item.aluno.nome

                        }

                        setAlunoid(item.id)
                    })}
                    <label ><b>{alunoResp}</b></label><br />

                </div>
            )
        }, {
            dataField: 'atividadePbls',
            text: 'Data da Entrega',
            formatter: (cellContent, row) => (
                <div className='valoresNoExpand'>
                    {cellContent.forEach((item) => {

                        dataEntreg = item.dataEntrega


                    })}


                    <label ><b>{dataEntreg}</b></label><br />

                </div>
            )
        }, {
            dataField: "icone",
            text: "Arquivo",
            formatter: (cellContent, row) => (
                <div className='valoresNoExpand'>
                    <div className="icon-file-button">
                        <IoIcons.IoIosDocument />
                    </div>
                </div>
            ),
            editable: false
        },
        {
            dataField: 'atividadePbls',
            text: 'Nota',
            formatter: (cellContent, row) => (
                <div className='valoresNoExpand'>
                    {cellContent.forEach((item) => {
                        notas = item.notas
                    })}
                    <label ><b>{notas}</b></label><br />

                </div>
            )

        }
    ];

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        bgColor: '#c7c7c7',

    };

    const tableRowEvents = {
        onClick: (e, row, rowIndex) => {

            setSelectedAtividade(row.id)

        },
    }

    const rowStyle = (row, rowIndex) => {
        return { backgroundColor: 'rgba(153, 186, 194,0.3)' };

    };
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

                            < div >

                                <BootstrapTable
                                    {...props.baseProps}
                                    selectRow={selectRow}
                                    rowEvents={tableRowEvents}
                                    bordered={false}
                                    condensed
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
                            <>
                                <div className="table-searchAtividades">
                                    <SearchBar keyField='titulo'{...props.searchProps} placeholder='Buscar atividade...' />
                                    <div class="table-search-icon">
                                        <IoIcons.IoMdSearch class="search-icon" />
                                    </div>
                                </div>
                                <div className="scrollExpandir">
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

export default ListagemAtividades;


// {
//     "id": 2,
//     "titulo": "Tit",
//     "descricao": "Desc",
//     "dataCriacao": "01/04/2020",
//     "dataConclusao": "11/12/2020",
//     "disciplina": {
//       "id": 1,
//       "nome": "Finanças"
//     },
//     "professor": {
//       "id": 4,
//       "email": "prof1@gmail.com",
//       "ativo": true,
//       "excluido": false,
//       "perfil": [],
//       "nome": "Professor",
//       "disciplina": {
//         "id": 1,
//         "nome": "Finanças"
//       }
//     },
//     "atividadePbls": [
//       {
//         "id": 1,
//         "dataEntrega": "10/08/2020",
//         "nota": 8,
//         "pbl": {
//           "idPbl": 1,
//           "problema": "Problema",
//           "situacaoProblema": "sitProb",
//           "resumo": "resumo",
//           "dataInicio": "01/01/2020",
//           "dataConclusao": "05/05/2021",
//           "professor": {
//             "id": 4,
//             "email": "prof1@gmail.com",
//             "ativo": true,
//             "excluido": false,
//             "perfil": [],
//             "nome": "Professor",
//             "disciplina": {
//               "id": 1,
//               "nome": "Finanças"
//             }
//           },
//           "aluno": [],
//           "pblTemaDisciplina": {
//             "tema": {
//               "id": 1,
//               "nome": "Tema F1",
//               "disciplinas": [
//                 {
//                   "id": 1,
//                   "nome": "Finanças"
//                 }
//               ]
//             },
//             "disciplina": {
//               "id": 1,
//               "nome": "Finanças"
//             },
//             "id": 1
//           }
//         },
//         "aluno": {
//           "id": 3,
//           "email": "usuario1@gmail.com",
//           "ativo": true,
//           "excluido": false,
//           "perfil": [
//             {
//               "nome": "ROLE_ALUNO",
//               "id": 1
//             }
//           ],
//           "nome": "Teste2",
//           "matricula": "Matricula"
//         }
//       }
//     ]
//   }