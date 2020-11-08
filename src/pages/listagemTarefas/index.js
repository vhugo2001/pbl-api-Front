import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import '../../Components/TableTarefa/listagemTarefa.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { toast } from "react-toastify";
import { Card } from "../../Components/Card/CardPrincipal";
import DatePicker from "react-datepicker";
import serviceAtividade from '../../Services/AtividadeService'
import serviceTarefa from '../../Services/TarefaService'
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import DatePickerDefault from '../../Components/DatePicker/DatePickerDefault'
import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import {
    Container
} from '../../Components/TableTarefa/style'

const { SearchBar } = Search;

function ListagemTarefas() {
    // { selectedPbl, setSelectedAtividade }
    const [atividade, setAtividade] = useState([])
    const [tarefaEditada, setTarefaEditada] = useState({})
    const [dataConclusao, setDataConclusao] = useState();

    useEffect(() => {
    }, [dataConclusao])

    useEffect(() => {

        serviceAtividade
            .listarIdPbl(21)
            .then((response) => {
                let data = response.data;
                setAtividade(data);

            })
            .catch((error) => {

                toast.error("Não foi possível selecionar o aluno.");
            });

    }, []);


    // useEffect(() => {
    //     if (tarefaEditada.id !== undefined) {
    //         serviceTarefa
    //             .atualizarAtivPbl(tarefaEditada.id, tarefaEditada)
    //             .then((response) => {

    //                 toast.success("Nota editada com sucesso.")
    //             })
    //             .catch((error) => { toast.danger("Não foi possível editar a nota.") });
    //     }
    // }, [tarefaEditada])

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
                return { backgroundColor: 'transparent' };
            }

        },

        {
            dataField: 'dataConclusao',
            text: 'Data de Conclusão',

            formatter: (cellContent, row) => (
                <div style={{ textAlign: 'center' }}>
                    <label className="ConclusaoAtiv">{row.dataConclusao}</label><br />
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { textAlign: 'center', backgroundColor: 'transparent' };
            }

        },

        {
            dataField: "icone",
            text: "",

            formatter: (cellContent, row) => (
                <div className="action-button-adicionar">
                    <IoIcons.IoIosAddCircleOutline className="adicionar-button" onClick={() => alert('Botao de Add')} />
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '105px', height: '5px', backgroundColor: 'transparent', marginRight: '50px' };
            }
        },

    ];

    const subcolunas = [
        {
            dataField: "icone",
            text: "",

            formatter: (cellContent, row) => (

                < div >
                    <div className="icone-button" onClick={() => () => handleConcluido(row)}>
                        <IoIcons.IoIosCheckmarkCircle />
                    </div>

                </div >
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '35px', height: '1px', textAlign: 'center', backgroundColor: 'transparent', border: 'none', padding: '0' };
            },
            // style: (cell, row, rowIndex, colIndex) => {
            //     if (row.concluido === true) {
            //         return {
            //             color: '#7f89a2'
            //         };
            //     }
            //     return {
            //         color: '#00bf9c'
            //     };
            // }, 
            editable: false
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
            }
        },
        {
            dataField: 'atividadePbls[0].pbl.aluno[0].nome',
            text: '',
            formatter: (cellContent, row) => (
                <div style={{ textAlign: 'center' }}>
                    <label >{cellContent}</label><br />
                </div>
            ), headerStyle: {
                display: 'none'
            },
            // editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
            //     <QualityRanger {...editorProps} value={value} />
            // )
        },
        // {
        //     dataField: 'dataConclusao',
        //     text: '',
        //     formatter: (cellContent, row) => (
        //         <div style={{ textAlign: 'center' }}>
        //             <label >{cellContent}</label><br />
        //         </div>
        //     ),
        //     headerStyle: {
        //         display: 'none'
        //     },
        //     editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex, onBlur) => (
        //         console.log(editorProps),
        //         console.log(dataConclusao),
        //         // <DatePickerDefault
        //         //     name="dataConclusao"
        //         //     locale={pt}
        //         //     minDate={subDays(new Date(), 0)}
        //         //     useShortMonthInDropdown
        //         //     dateFormat="dd/MM/yyyy"
        //         //     selected={row.dataConclusao}
        //         //     value={row.dataConclusao} />

        //         < DatePickerDefault {...editorProps} value={value} setDataConclusao={setDataConclusao} {...onBlur} />

        //     )
        // },

        {
            dataField: 'dataConclusao',
            text: '',
            formatter: (cell) => {
                console.log(cell)
                let dateObj = cell;
                if (typeof cell !== 'object') {
                    dateObj = new Date(cell);
                    console.log(dateObj)
                }
                return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
            },
            editor: {
                type: Type.DATE
            },
            headerStyle: {
                display: 'none'
            },

        },
        {
            dataField: "icone",
            text: "",

            formatter: (cellContent, row) => (
                <div className="action-button-deletar">
                    <IoIcons.IoMdTrash className="deletar-button" onClick={() => handleExcluir(row)} />
                </div>
            ),
            headerStyle: {
                display: 'none'
            }, editable: false
        },
    ];

    const handleExcluir = (item) => {
        // excluirTarefa(item.id);
    };

    //   const excluirTarefa = (dados) => {
    //     serviceTarefa
    //       .deletar(dados)
    //       .then((response) => {
    //         let data = response.data;
    //         setTarefa(data);
    //         toast.success("Sucesso ao excluir a tarefa.");
    //       })
    //       .catch((error) => {
    //         toast.error("Erro ao excluir a tarefa.");
    //       });
    //   };

    const handleConcluido = (item) => {
        // if(item.concluido === true){
        //     let status = false
        // }else{
        //     status = true
        // }
        // statusTarefa(item.id,status);
    }

    // const statusTarefa = (dados, status) => {
    //     serviceTarefa
    //       .atualizar(dados, status)
    //       .then((response) => {
    //         let data = response.data;
    //         setTarefa(data);
    //       })
    //       .catch((error) => {
    //         toast.error("Erro modificar status da Tarefa.");
    //       });
    //   };

    // const rowStyle = (row, rowIndex) => {
    //     if (row.concluido === true) {
    //       return { backgroundColor: "rgba(0, 185, 0, 0.1)" };
    //     } else {
    //       return {};
    //     }
    //   };

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
            // setTarefaEditada(row)
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
                                // rowStyle={ rowStyle }
                                />
                            </div>
                        )

                    }
                </ToolkitProvider>
            </div >
        ),

        expandColumnPosition: 'right',
        expandByColumnOnly: true,
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
            <Container className="container-list">
                <ToolkitProvider
                    keyField='id'
                    data={tarefa}
                    columns={colunas}
                    {...console.log(tarefa)}
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
                                    />
                                </div>
                            </>
                        )
                    }
                </ToolkitProvider>
            </Container>

        </>

    );

}

export default ListagemTarefas;