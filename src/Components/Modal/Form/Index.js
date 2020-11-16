import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import SchemaTarefa from "./SchemaTarefas";
import { toast } from "react-toastify";
import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import subDays from "date-fns/subDays";
import * as IoIcons from "react-icons/io";
import { Modal } from "react-bootstrap";
import { Card } from "../../Card/CardPrincipal";
import DatePickerField from "../../DatePicker/DatePickerField";
import DropDownListAlunos from "../../DropDownList/Alunos/DropDownList";

import tarefaService from "../../../Services/TarefaService";

const FormModal = ({ data, alunos, _show, setShow }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [dataConclusao, setDataConclusao] = useState("");
  const [alunosSelecionados, setAlunosSelecionados] = useState("");

  useEffect(() => {
    console.log(data);
    if (
      data !== null &&
      data !== undefined &&
      _show === true &&
      Object.keys(data).length !== 0
    ) {
      if (data.dataConclusao !== "") setIsUpdating(true);
      data.dataConclusao.split("/").reverse().join("-")
      console.log( data.dataConclusao)
    } else {
      setIsUpdating(false);
    }
  }, [data]);

  const handleClose = () => {
    setShow(false);
  };

  const onSubmitHandler = (data) => {
    let _data = {
      ...data,
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    };
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

  const onClearHandler = () => {};

  return (
      <Modal show={_show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {data.titulo + " na atividade " + data.tituloAtividade}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            enableReinitialize
            initialValues={{
              idAtividade: data.idAtividade,
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
              setShow(false);
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
                        name="dataConclusao"
                        locale={pt}
                        useShortMonthInDropdown
                        minDate={subDays(new Date(), 0)}
                        dateFormat="dd/MM/yyyy"
                        selected={values.dataConclusao}
                        customInput={
                          <Card.Form.InputText
                            value={values.dataConclusao}
                            valid={
                              touched.dataConclusao && !errors.dataConclusao
                            }
                            error={
                              touched.dataConclusao && errors.dataConclusao
                            }
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
                        lista={alunos || []}
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
        </Modal.Body>
      </Modal>
  );
};

export default FormModal;
