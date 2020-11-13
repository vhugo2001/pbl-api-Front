import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SchemaTarefa from './SchemaTarefas';
import { toast } from "react-toastify";
import * as IoIcons from "react-icons/io";
import { Modal, Button } from "react-bootstrap";
import { Card } from "../../Card/CardPrincipal";
import DatePickerField from "../../DatePicker/DatePickerField";
import DropDownListAlunos from "../../DropDownList/Alunos/DropDownList";
import pt from "date-fns/locale/pt";
import subDays from "date-fns/subDays";

const FormModal = ({ data, service }) => {
  const [show, setShow] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [dataConclusao, setDataConclusao] = useState("");
  const [alunosSelecionados, setAlunosSelecionados] = useState("");
  

  useEffect(() => {
    if ((data !== null) & (data !== undefined)) {
      setIsUpdating(true);
      if (data.dataConclusao !== "")
        setDataConclusao(data.dataConclusao.split("/").reverse().join("-"));
    } else {
      setIsUpdating(false);
    }
  }, [data]);

  const handleClose = () => setShow(false);

  const onSubmitHandler = (data) => {
    let _data = { ...data, disciplinas: [data.disciplinas] };
    service
      .incluir(_data)
      .then(() => {
        toast.success("Tema cadastrado com sucesso.");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onUpdateHandler = (values) => {
    service
      .atualizar(values.id, values)
      .then(() => {
        toast.success("Tema atualizado com sucesso.");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const handleExcluir = () => {
    
  }

  const onClearHandler = () => {};

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Card>
              <Formik
                enableReinitialize
                initialValues={{
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
                          <Card.Form.Title>Descrição</Card.Form.Title>
                          <Card.Form.InputText
                            name="descricao"
                            autocomplete="off"
                            onChange={handleChange}
                            value={values.descricao}
                            valid={touched.descricao && !errors.descricao}
                            error={touched.descricao && errors.descricao}
                          />
                          {errors.descricao && touched.descricao && (
                            <Card.Form.StyledInlineErrorMessage>
                              {errors.descricao}
                            </Card.Form.StyledInlineErrorMessage>
                          )}
                        </Card.Form.Group>

                        <Card.Form.BreakRow />
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

                        <Card.Form.Group style={{ flex: 5 }}>
                          <Card.Form.Title>Alunos</Card.Form.Title>
                          <DropDownListAlunos
                            name="alunos"
                            lista={values.alunos}
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
            </Card>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleExcluir}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormModal;
