import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import { Card } from "../../Card/CardPrincipal";

const FormModal = ({ data, service }) => {
  const [show, setShow] = useState(false);

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

  const onClearHandler = () => {
  
  };

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
                  dataCriacao: data.dataCriacao,
                  dataConclusao: data.dataConclusao,
                  alunos: data.alunos,
                }}
                validationSchema={SchemaCadastrar}
                onSubmit={(values) => {
                  if (isUpdating) {
                    onUpdateHandler(values);
                  } else {
                    onSubmitHandler(values);
                  }
                  setIsAtualizar(false);
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
                          <Card.Form.Title>
                            Prioridade ({range})
                          </Card.Form.Title>
                          <RangeSlider
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                            tooltip="off"
                            min={1}
                            max={10}
                          />
                        </Card.Form.Group>

                        <Card.Form.Group>
                          <Card.Form.Title>Status</Card.Form.Title>
                          <Checkbox
                            name="ativo"
                            autocomplete="off"
                            value={values.ativo}
                          >
                            Ativo
                          </Checkbox>
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
