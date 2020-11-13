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
import authService from "../../Services/AuthService";
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import DatePickerDefault from '../../Components/DatePicker/DatePickerDefault'
import pt from "date-fns/locale/pt";
import subDays from "date-fns/subDays";
import { format } from "date-fns";
import { Formik, Form, ErrorMessage } from "formik";
import DatePickerField from '../../Components/DatePicker/DatePickerField'


import {
    Container,
    Button,
    ButtonSalvar
} from '../../Components/TableTarefa/style'
import { Modal } from "react-bootstrap";

const { SearchBar } = Search;

function ListagemTarefas() {
    let usuarioLogado = authService.getCurrentUser();
    let status = false
    const [tarefa, setTarefa] = useState([
        {
            id: 1,
            titulo: 'Atividade',
            dataConclusao: '10/12/2020',
            tarefa: [
                {
                    id: 1,
                    concluido: true,
                    descricao: 'Desc 1A',
                    dataConclusao: '10/11/2020'
                },
                {
                    id: 2,
                    concluido: false,
                    descricao: 'Desc 2A',
                    dataConclusao: '10/11/2020'
                },
                {
                    id: 3,
                    concluido: false,
                    descricao: 'Desc 3A',
                    dataConclusao: '10/11/2020'
                }
            ]
        },
        {
            id: 2,
            titulo: 'Atividade 2',
            dataConclusao: '06/03/2021',
            tarefa: [
                {
                    id: 1,
                    concluido: true,
                    descricao: 'Desc 1B',
                    dataConclusao: '10/10/2020'
                },
                {
                    id: 2,
                    concluido: false,
                    descricao: 'Desc 2B',
                    dataConclusao: '10/11/2020'
                },
                {
                    id: 3,
                    concluido: false,
                    descricao: '',
                    dataConclusao: ''
                },
            ]
        },
        {
            id: 3,
            titulo: 'Atividade 3',
            dataConclusao: '03/03/2023',
            tarefa: []
        }

    ])

    const [dataConclusao, setDataConclusao] = useState("");

    const [showModal, setShowModal] = useState(false)
    const [dadosModal, setDadosModal] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    // useEffect(() => {
    //     console.log(usuarioLogado)
    //     serviceAtividade
    //         .listarPorIdAluno(usuarioLogado.id)
    //         .then((response) => {
    //             let data = response.data;
    //             setAtividade(data);
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             // toast.error(error.response.data);
    //         });

    // }, []);


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
    const colunas = [

        {
            dataField: 'titulo',
            text: 'Atividade',

            formatter: (cellContent, row) => (
                <div >
                    <label className="TituloAtiv" ><b >{row.titulo}</b></label><br />
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
                    <IoIcons.IoIosAddCircleOutline className="adicionar-button" onClick={() => handleAdd(row)} />
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '105px', height: '5px', backgroundColor: 'transparent', marginRight: '50px' };
            }
        },

    ];

    const subcolunas = [
        {
            dataField: "concluido",
            text: "",

            formatter: (cellContent, row) => (

                < div >
                    <div className="icone-button" onClick={(e) => handleConcluido(e, row)}>
                        <IoIcons.IoIosCheckmarkCircle />
                    </div>

                </div >
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '35px', height: '1px', textAlign: 'center', backgroundColor: 'transparent', border: 'none', padding: '0' };
            },
            style: (cell, row, rowIndex, colIndex) => {
                if (cell === true) {
                    return {
                        color: '#00bf9c'
                    };
                }
                return {
                    color: '#7f89a2'
                };
            },
            editable: false
        },
        {
            dataField: 'descricao',
            text: '',

            formatter: (cellContent, row) => {
                if (cellContent !== '') {
                    return (
                        <div>
                            <label className="TituloAtiv"><b>{cellContent}</b></label><br />
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <label className="TituloAtiv">Insira um título...</label><br />
                        </div>
                    )
                }
            },
            headerStyle: {
                display: 'none'
            }
        },
        // {
        //     dataField: 'alunos',
        //     text: '',

        //     formatter: (cellContent, row) => {
        //         if (cellContent !== '') {
        //             return (
        //                 <div>
        //                     <label className="TituloAtiv"><b>{cellContent}</b></label><br />
        //                 </div>
        //             )
        //         } else {
        //             return (
        //                 <div>
        //                     <label className="TituloAtiv">Atribua algum aluno...</label><br />
        //                 </div>
        //             )
        //         }
        //     },
        //     headerStyle: {
        //         display: 'none'
        //     }
        // },
        {
            dataField: 'dataConclusao',
            text: '',

            formatter: (cellContent, row) => {
                if (cellContent !== '') {
                    return (
                        <div>
                            <label className="TituloAtiv"><b>{cellContent}</b></label><br />
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <label className="TituloAtiv">Insira uma data...</label><br />
                        </div>
                    )
                }
            },
            headerStyle: {
                display: 'none'
            }
        },
        {
            dataField: "icone",
            text: "",

            formatter: (cellContent, row) => (

                <div className="action-button-deletar">
                    <IoIcons.IoMdTrash className="deletar-button" onClick={(e) => handleExcluir(e, row)} />
                </div>
            ),
            headerStyle: {
                display: 'none'
            }, editable: false
        },
    ];

    function handleExcluir(e, item) {
        e.stopPropagation();
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

    const handleConcluido = (e, item) => {
        e.stopPropagation();
        // if(item.concluido === true){
        //     let status = false
        // }else{
        //     status = true
        // }
        // statusTarefa(item.id,status);

        if (item.concluido === true) {
            status = false
        } else {
            status = true

        }
        statusTarefa(item.id, status);
    }

    const statusTarefa = (dados, status) => {

        // serviceTarefa
        //   .atualizar(dados, status)
        //   .then((response) => {
        //     let data = response.data;
        //     setTarefa(data);
        //   })
        //   .catch((error) => {
        //     toast.error("Erro modificar status da Tarefa.");
        //   });


    };

    const handleAdd = (item) => {

        // const novaTarefa = {
        //     "concluido": false,
        //     "dataConclusao": "",
        //     "dataCriacao": new Date(),
        //     "descricao": ""
        // }
        const novaTarefa = {
            id: 5,
            concluido: false,
            descricao: '',
            dataConclusao: ''
        }

        setTarefa(tarefa.map((x) => {
            if (x.id !== item.id) return x;
            return { ...x, tarefa: [...x.tarefa, novaTarefa] };
        }));

        // setTarefa({ ...item, tarefa: [...item.tarefa, novaTarefa] });


        // serviceTarefa
        //     .incluirTarefaAtiv(novaTarefa, item.id)
        //     .then((response) => {
        //         let data = response.data;
        //         setTarefa(data);
        //     })
        //     .catch((error) => {
        //         toast.error("Erro adicionar uma tarefa.");
        //     });

    }

    const rowEvents = {
        onClick: (e, row) => {
            setDadosModal(row)
            abrirModal()
        },

    };

    const abrirModal = () => {
        setShowModal(handleShow)

    }

    const onSubmitHandler = (data) => {
        // data = {
        //   ...data,
        //   dataCriacao: format(new Date(), "dd/MM/yyyy"),
        //   disciplina: {
        //     id: 1,
        //   },
        //   professor: {
        //     id: 2,
        //   },
        //   dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
        // };
        // console.log(data);

        // atividadeService
        //   .incluir(data)
        //   .then((response) => {
        //     let data = response.data;
        //     toast.success("Tarefa cadastrada com sucesso.");
        //   })
        //   .catch((error) => {
        //     toast.error("Erro ao cadastrar tarefa.");
        //   });
    };

    const ModalCard = () => {

        return (

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {dadosModal.descricao}
                    </Modal.Title>
                </Modal.Header>

                <Formik
                    enableReinitialize
                    initialValues={{
                        titulo: dadosModal.titulo,
                        dataConclusao: dadosModal.dataConclusao

                    }}
                    onSubmit={(values) => onSubmitHandler(values)}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        isSubmitting,
                        validating,
                        valid,
                    }) => {
                        return (
                            <>
                                <Modal.Body>
                                    <Card.Form
                                        method="post"
                                        autoComplete="off"
                                        onSubmit={handleSubmit}
                                    >
                                        <Card.Form.Group>
                                            <Card.Form.Title>Título</Card.Form.Title>
                                            <Card.Form.InputText
                                                name="titulo"
                                                onChange={handleChange}
                                                value={values.titulo}
                                                placeholder="Título da tarefa"
                                            />
                                        </Card.Form.Group>

                                        {/* <Card.Form.Group style={{ flex: 5 }}>
                                        <Card.Form.Title>Alunos</Card.Form.Title>
                                        <DropDownListAlunos
                                            name="aluno"
                                            lista={listaAluno}
                                            onSelect={setAlunosSelecionados}
                                            valid={touched.aluno && !errors.aluno}
                                            error={touched.aluno && errors.aluno}
                                        ></DropDownListAlunos>
                                        {errors.aluno && touched.aluno && (
                                            <Card.Form.StyledInlineErrorMessage>
                                                {errors.aluno}
                                            </Card.Form.StyledInlineErrorMessage>
                                        )}
                                    </Card.Form.Group>

                                    <Card.Form.BreakRow /> */}


                                        <Card.Form.Group>
                                            <Card.Form.Title>Data Conclusao</Card.Form.Title>
                                            <DatePickerField
                                                name="dataInicio"
                                                locale={pt}
                                                minDate={subDays(new Date(), 0)}
                                                useShortMonthInDropdown
                                                dateFormat="dd/MM/yyyy"
                                                selected={dataConclusao}
                                                customInput={
                                                    <Card.Form.InputText
                                                        onfocus="this.removeAttribute('readonly');"
                                                        readonly
                                                        value={dataConclusao}
                                                    />
                                                }
                                            />
                                            {errors.dataInicio && touched.dataInicio && (
                                                <Card.Form.StyledInlineErrorMessage>
                                                    {errors.dataInicio}
                                                </Card.Form.StyledInlineErrorMessage>
                                            )}
                                        </Card.Form.Group>

                                    </Card.Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleClose}>fechar </Button>
                                    <ButtonSalvar type="submit" onClick={handleClose}>Salvar </ButtonSalvar>
                                </Modal.Footer>
                            </>
                        );
                    }}
                </Formik>
            </Modal>
        );
    }

    const rowStyle = (row, rowIndex) => {

        if (row !== undefined) {
            if (row.concluido === true) {
                return { backgroundColor: "rgba(0, 185, 0, 0.1)", cursor: 'pointer' };
            } else {
                return { cursor: 'pointer' };
            }
        } else {
            return {}
        }
    };

    // const cellEdit = cellEditFactory({
    //     mode: 'click',
    //     blurToSave: true,
    //     afterSaveCell: (oldValue, newValue, row, column) => {
    //         // setTarefaEditada(row)
    //     }
    // });

    const expandRow = {

        renderer: (row) => (

            < div >
                <ToolkitProvider
                    keyField='id'

                    data={row.tarefa}
                    columns={subcolunas}
                >

                    {
                        props => (

                            < div >

                                <BootstrapTable
                                    {...props.baseProps}
                                    // cellEdit={cellEdit}
                                    condensed
                                    bordered={false}
                                    rowStyle={rowStyle}
                                    rowEvents={rowEvents}
                                />
                                {show ? <ModalCard /> : null}
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