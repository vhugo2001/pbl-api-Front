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

function CardCadastroTarefa({ idTarefa, idDisciplina }) {
  const [tarefa, setTarefa] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [botaoExcluir, setBotaoExcluir] = useState(false);
  const [botaoSalvar, setBotaoSalvar] = useState(false);
  const [botaoAtualizar, setBotaoAtualizar] = useState(false);

  useEffect(() => {
    if (tarefa !== undefined && tarefa !== null && tarefa !== "") {
      setBotaoExcluir(true);
      setBotaoAtualizar(true);
      setBotaoSalvar(false);
    } else {
      setBotaoExcluir(false);
      setBotaoAtualizar(false);
      setBotaoSalvar(true);
    }
  }, [tarefa]);

  useEffect(() => {
    atividadeService
      .listarID(9)
      .then((response) => {
        response.data.dataConclusao = new Date(
          response.data.dataConclusao.split("/").reverse().join("-")
        );
        setTarefa(response.data);
        console.log(tarefa);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao acessar a lista de tarefas.");
      });
  }, []);

  const onDeleteHandler = (id) => {
    atividadeService
      .deletar(tarefa.id)
      .then(toast.success("Tarefa deletada com sucesso."))
      .catch((error) => {
        toast.error("Erro ao acessar a API.");
      });
  };

  const onUpdateHandler = (data) => {
    // console.log(data);
    // console.log(tarefa)
    data = { ...data, id: tarefa.id };

    atividadeService
      .atualizar(data.id, data)
      .then((response) => {
        console.log(data);
        toast.success("Tarefa atualizado com sucesso.");
      })
      .catch((error) => {
        toast.error("Erro ao atualizar tarefa.");
      });
  };

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      dataCriacao: "01/10/2020",
      disciplina: {
        id: 1,
      },
      professor: {
        id: 1,
      },
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    }
    console.log(data)

    atividadeService
      .incluir(data)
      .then((response) => {
        let data = response.data;
        setTarefa(data);
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
                <div
                  className="title-container"
                >
                  <h3>Incluir nova tarefa</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Form method="post" autoComplete="off" onSubmit={handleSubmit}
                    
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

                    <Card.Form.GroupButton>
                      {botaoSalvar && (
                        <Card.Form.Submit type="submit">
                          Salvar
                        </Card.Form.Submit>
                      )}
                      {botaoAtualizar && (
                        <Card.Form.Submit
                          type="button"
                          onClick={onSubmitHandler}

                        >
                          Atualizar
                        </Card.Form.Submit>
                      )}
                      {botaoExcluir && (
                        <Card.Form.Delete
                          type="button"
                          onClick={onDeleteHandler}
                        >
                          Excluir
                        </Card.Form.Delete>
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
