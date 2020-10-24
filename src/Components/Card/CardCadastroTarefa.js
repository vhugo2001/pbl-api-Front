import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import atividadeService from "../../Services/AtividadeService";
import Alert from "../Alert/CustomAlert";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import DatePickerField from "../DatePicker/DatePickerField";

function CardCadastroTarefa() {
  const [tarefa, setTarefa] = useState({});
  const [mensagem, setMensagem] = useState("");
  const [variant, setVariant] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      dataCriacao: "10/10/2020",
      disciplina: {
        id: 1,
      },
      professor: {
        id: 1,
      },
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
    };

    atividadeService
      .incluir(data)
      .then((response) => {
        let data = response.data;
        console.log(data);
        setTarefa(data);
        setMensagem("Tarefa cadastrada com sucesso.");
        setVariant("success");
      })
      .catch((error) => {
        setMensagem("Erro ao cadastrar tarefa.");
        setVariant("danger");
      });
  };

  return (
    <>
      <Alert _mensagem={mensagem} _variant={variant} />
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            titulo: "",
            dataConclusao: "",
            descricao: "",
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
                  style={{
                    width: "100%",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                  className="iniciar-tarefa-title"
                >
                  <h2>Incluir nova tarefa</h2>
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
                        minDate={subDays(new Date(), 0)}
                        useShortMonthInDropdown
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
                      <Card.Form.Submit type="submit">Salvar</Card.Form.Submit>
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
