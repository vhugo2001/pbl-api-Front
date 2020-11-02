import React, { useState, useEffect } from "react";
import atividadeService from "../../Services/AtividadeService";
import { Card } from "./CardPrincipal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import DatePickerField from "../DatePicker/DatePickerField";
import { toast } from "react-toastify";
import { id } from "date-fns/locale";
import * as IoIcons from "react-icons/io";
import moment from 'moment';
import Moment from 'react-moment'

function CardCadastroTarefa({ selectedAtividade }) {
  const [tarefa, setTarefa] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedAtividadeEditado, setSelectedAtividadeEditado] = useState({})

  useEffect(() => {
    if (tarefa !== undefined && tarefa !== null && tarefa !== "") {
      setIsUpdating(true);
    } else {
      setIsUpdating(false);
    }
  }, [tarefa]);

  useEffect(() => {
    if (selectedAtividade !== null & selectedAtividade !== undefined) {
      atividadeService
        .listarID(selectedAtividade)
        .then((response) => {
          response.data.dataConclusao = new Date(
            response.data.dataConclusao.split("/").reverse().join("-")
          );
          setDataConclusao(response.data.dataConclusao);

          setTarefa(response.data);
        })
        .catch((error) => {
          toast.error("Erro ao acessar a lista de tarefas.");
        });
    }
  }, [selectedAtividade]);

  useEffect(() => {
    console.log(selectedAtividadeEditado.id)
    console.log(selectedAtividadeEditado)
    if (selectedAtividadeEditado.id !== undefined) {
      atividadeService
        .atualizar(selectedAtividadeEditado.id, selectedAtividadeEditado)
        .then((response) => {

          toast.success("Tarefa atualizado com sucesso.");
        })
        .catch((error) => { toast.error("Erro ao atualizar tarefa."); });
    }
  }, [selectedAtividadeEditado])


  const onDeleteHandler = (id) => {
    atividadeService
      .deletar(tarefa.id)
      .then(toast.success("Tarefa deletada com sucesso."))
      .catch((error) => {
        toast.error("Erro ao acessar a API.");
      });
  };

  const onAddHandler = () => {
    setTarefa('')
  };

  const onUpdateHandler = (data) => {
    data = {
      ...tarefa, titulo: data.titulo, dataConclusao: format(data.dataConclusao, 'dd/MM/yyyy'),
      descricao: data.descricao
    };
    setSelectedAtividadeEditado(data);

    // atividadeService
    //   .atualizarAtivPbl(selectedAtividadeEditado.id, selectedAtividadeEditado)
    //   .then((response) => {

    //     toast.success("Tarefa atualizado com sucesso.");
    //   })
    //   .catch((error) => {
    //     toast.error("Erro ao atualizar tarefa.");
    //     console.log(data);
    //     console.log(error);
    //   });
  };

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      dataCriacao: format(new Date(), "dd/MM/yyyy"),
      disciplina: {
        id: 1,
      },
      professor: {
        id: 2,
      },
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    };
    console.log(data);

    atividadeService
      .incluir(data)
      .then((response) => {
        let data = response.data;
        toast.success("Tarefa cadastrada com sucesso.");
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar tarefa.");
      });
  };

  return (
    <>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            titulo: tarefa.titulo,
            dataConclusao: tarefa.dataConclusao,
            descricao: tarefa.descricao,
          }}
          validationSchema={Yup.object().shape({
            titulo: Yup.string()
              .required("* Campo Nome é obrigatório")
              .nullable(),
            dataConclusao: Yup.string()
              .required("* Campo Data de conclusão é obrigatório")
              .nullable(),
            descricao: Yup.string()
              .required("* Campo Descrição é obrigatório")
              .nullable(),
          })}
          onSubmit={(values) => {

            if (isUpdating) {
              return onUpdateHandler(values);
            } else {
              return onSubmitHandler(values);
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
                      onClick={onAddHandler}
                    >
                      <IoIcons.IoIosAdd className="icone-clear" />
                    </div>

                    <div
                      className="actions-form-button delete-button"
                      type="button"
                      onClick={onDeleteHandler}
                    >
                      <IoIcons.IoMdTrash className="icone-deletar" />
                    </div>

                  </>
                )}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Form
                    method="post"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="card-form"
                  >
                    <Card.Form.Group>
                      <Card.Form.Title>Título</Card.Form.Title>
                      <Card.Form.InputText
                        name="titulo"
                        onChange={handleChange}
                        value={values.titulo}
                        valid={touched.titulo && !errors.titulo}
                        error={touched.titulo && errors.titulo}
                        placeholder="Título da tarefa"
                      />
                      {errors.titulo && touched.titulo && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.titulo}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.Group>
                      <Card.Form.Title>Data de Conlusão</Card.Form.Title>
                      <DatePickerField
                        name="dataConclusao"
                        locale={pt}
                        useShortMonthInDropdown
                        minDate={subDays(new Date(), 0)}
                        dateFormat="dd/MM/yyyy"
                        selected={dataConclusao}
                        customInput={
                          <Card.Form.InputText
                            value={dataConclusao}
                            valid={
                              touched.dataConclusao && !errors.dataConclusao
                            }
                            error={
                              touched.dataConclusao && errors.dataConclusao
                            }
                          />
                        }
                      />
                      {errors.dataConclusao && touched.dataConclusao && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.dataConclusao}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.BreakRow />

                    <Card.Form.Group>
                      <Card.Form.Title>Descrição</Card.Form.Title>
                      <Card.Form.InputTextArea
                        name="descricao"
                        onChange={handleChange}
                        valid={touched.descricao && !errors.descricao}
                        error={touched.descricao && errors.descricao}
                        value={values.descricao}
                        placeholder="Descrição da tarefa"
                      />
                      {errors.descricao && touched.descricao && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.descricao}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.BreakRow />

                    <Card.Form.GroupButton className="group-button">
                      {!isUpdating && (
                        <Card.Button type="submit">Salvar</Card.Button>
                      )}
                      {isUpdating && (
                        <Card.Button type="submit" >
                          Atualizar
                        </Card.Button>
                      )}
                    </Card.Form.GroupButton>
                  </Card.Form>
                </div>
              </>
            );
          }}

        </Formik>
      </Card>
    </>
  );
}

export default CardCadastroTarefa;


