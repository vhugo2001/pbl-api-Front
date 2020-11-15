import React, { useState, useEffect } from "react";
import atividadeService from "../../Services/AtividadeService";
import authService from "../../Services/AuthService";
import { Card } from "./CardPrincipal";
import { Formik } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import DatePickerField from "../DatePicker/DatePickerField";
import { toast } from "react-toastify";

import * as IoIcons from "react-icons/io";

function CardCadastroatividade({
  disciplina,
  selectedAtividade,
  setIsAtualizar,
}) {
  let usuarioLogado = authService.getCurrentUser();
  const [atividade, setAtividade] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedAtividadeEditado, setSelectedAtividadeEditado] = useState({});

  useEffect(() => {
    if ((selectedAtividade !== null) & (selectedAtividade !== undefined)) {
      atividadeService
        .listarID(selectedAtividade)
        .then((response) => {
          response.data.dataConclusao = new Date(
            response.data.dataConclusao.split("/").reverse().join("-")
          );
          setAtividade(response.data);
          setIsUpdating(true);
        })
        .catch((error) => {
          toast.error("Erro ao acessar a lista de atividades.");
        });
    }
  }, [selectedAtividade]);

  useEffect(() => {
    console.log(selectedAtividadeEditado.id);
    console.log(selectedAtividadeEditado);
    if (selectedAtividadeEditado.id !== undefined) {
      atividadeService
        .atualizar(selectedAtividadeEditado.id, selectedAtividadeEditado)
        .then((response) => {
          toast.success("atividade atualizado com sucesso.");
          setIsAtualizar(true);
        })
        .catch((error) => {
          toast.error("Erro ao atualizar atividade.");
        });
    }
  }, [selectedAtividadeEditado]);

  const onSubmitHandler = (data, resetForm) => {
    data = {
      ...data,
      disciplina: {
        id: disciplina.id,
      },
      professor: {
        id: usuarioLogado.id,
      },
      dataCriacao: format(new Date(), "dd/MM/yyyy"),
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    };

    atividadeService
      .incluir(data)
      .then((response) => {
        setIsAtualizar(true);
        toast.success("Atividade cadastrada com sucesso.");
        resetForm({});
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao cadastrar atividade.");
      });
  };

  const onUpdateHandler = (data) => {
    data = {
      ...atividade,
      disciplina: {
        id: disciplina.id,
      },
      professor: {
        id: usuarioLogado.id,
      },
      titulo: data.titulo,
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
      descricao: data.descricao,
    };
    setSelectedAtividadeEditado(data);
  };

  const onDeleteHandler = () => {
    atividadeService
      .deletar(atividade.id)
      .then(() => {
        toast.success("atividade deletada com sucesso.");
        onClearHandler();
        setIsAtualizar(true);
      })
      .catch((error) => {
        toast.error("Erro ao acessar a API.");
      });

    setIsAtualizar(false);
  };

  const onClearHandler = () => {
    setAtividade({
      ...atividade,
      titulo: "",
      descricao: "",
      dataConclusao: "",
      dataCriacao: "",
      id: null,
    });
    setIsUpdating(false);
  };

  return (
    <>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            titulo: atividade.titulo,
            dataConclusao: atividade.dataConclusao,
            descricao: atividade.descricao,
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
          onSubmit={(values,{resetForm}) => {
            if (disciplina === undefined) {
              toast.warn(
                "É necessário selecionar uma disciplina para cadastrar atividades",
                { autoClose: 6000 }
              );
              return;
            }

            if (isUpdating) {
              onUpdateHandler(values);
            } else {
              onSubmitHandler(values, resetForm);
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
            isValid,
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
                        value={values.titulo || ''}
                        valid={touched.titulo && !errors.titulo}
                        error={touched.titulo && errors.titulo}
                        placeholder="Título da atividade"
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
                        value={values.descricao || ''}
                        placeholder="Descrição da atividade"
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
                        <Card.Button type="submit">Cadastrar</Card.Button>
                      )}
                      {isUpdating && (
                        <Card.Button type="submit">Atualizar</Card.Button>
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

export default CardCadastroatividade;
