import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import SchemaTarefa from "./SchemaTarefas";
import { toast } from "react-toastify";
import pt from "date-fns/locale/pt";
import subDays from "date-fns/subDays";
import * as IoIcons from "react-icons/io";
import { Modal, Button } from "react-bootstrap";
import { Card } from "../../Card/CardPrincipal";
import DatePickerField from "../../DatePicker/DatePickerField";
import DropDownListAlunos from "../../DropDownList/Alunos/DropDownList";

import tarefaService from "../../../Services/TarefaService";

const FormModal = ({ data, alunos, show, setShow }) => {
  const [showModal, setShowModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [dataConclusao, setDataConclusao] = useState("");
  const [alunosSelecionados, setAlunosSelecionados] = useState("");

  useEffect(() => {
    console.log(data);
    if (
      data !== null &&
      data !== undefined &&
      show === true &&
      Object.keys(data).length !== 0
    ) {
      setIsUpdating(true);
      if (data.dataConclusao !== "")
        setDataConclusao(data.dataConclusao.split("/").reverse().join("-"));
    } else {
      setIsUpdating(false);
    }
  }, [data]);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  const handleClose = () => {
    setShowModal(false);
    setShow(false);
  }

  const onSubmitHandler = (data) => {
    let _data = { ...data, disciplinas: [data.disciplinas] };
    tarefaService
      .incluir(_data)
      .then(() => {
        toast.success("Tarefa cadastrada com sucesso.");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onUpdateHandler = (values) => {
    tarefaService
      .atualizar(values.id, values)
      .then(() => {
        toast.success("Tarefa atualizada com sucesso.");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const handleExcluir = () => {};

  const onClearHandler = () => {};



  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
         
              <Formik
                enableReinitialize
                initialValues={{
                  titulo: data.titulo,
                  descricao: data.descricao,
                  concluido: data.concluido,
                  dataConclusao: data.dataConclusao,
                  alunos: data.alunos,
                }}
                validationSchema={SchemaTarefa}
                onSubmit={(values) => {
                  if (isUpdating) {
                    onUpdateHandler(values);
                  } else {
                    onSubmitHandler(values);
                  }
                }}
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
                      <div className="spacer-div" />
                      {isUpdating && (
                        <>
                          <div
                            className="actions-form-button clear-button"
                            type="button"
                            onClick={onClearHandler}
                          >
                            <IoIcons.IoIosAdd className="icone-clear" />
                          </div>
                        </>
                      )}
                      <Card.Form
                        style={{ "padding-top": "0" }}
                        method="post"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                      >
                        <Card.Form.Group>
                          <Card.Form.Title>Titulo</Card.Form.Title>
                          <Card.Form.InputText
                            name="titulo"
                            autocomplete="off"
                            onChange={handleChange}
                            value={values.titulo}
                            valid={touched.titulo && !errors.titulo}
                            error={touched.titulo && errors.titulo}
                          />
                          {errors.titulo && touched.v && (
                            <Card.Form.StyledInlineErrorMessage>
                              {errors.titulo}
                            </Card.Form.StyledInlineErrorMessage>
                          )}
                        </Card.Form.Group>

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
                        </Card.Form.Group>
                        <Card.Form.BreakRow />
                        <Card.Form.Group>
                          <Card.Form.Title>Descrição</Card.Form.Title>
                          <Card.Form.InputText
                            name="descricao"
                            autocomplete="off"
                            onChange={handleChange}
                            value={values.descricao}
                          />
                        </Card.Form.Group>
                        <Card.Form.BreakRow />
                        <Card.Form.Group style={{ flex: 5 }}>
                          <Card.Form.Title>Alunos</Card.Form.Title>
                          <DropDownListAlunos
                            name="alunos"
                            lista={alunos|| []}
                            onSelect={setAlunosSelecionados}
                            valid={touched.aluno && !errors.aluno}
                            error={touched.aluno && errors.aluno}
                          ></DropDownListAlunos>
                        </Card.Form.Group>

                        <Card.Form.GroupButton className="group-button">
                          {!isUpdating && (
                            <Card.Button type="submit">Incluir</Card.Button>
                          )}
                          {isUpdating && (
                            <Card.Button type="submit">Atualizar</Card.Button>
                          )}
                        </Card.Form.GroupButton>
                      </Card.Form>
                    </>
                  );
                }}
              </Formik>
      
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModal;
