import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import alunoService from "../../Services/AlunoService";
import authService from "../../Services/AuthService";
import { toast } from "react-toastify";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function PerfilUsuario() {
  const [aluno, setAluno] = useState(authService.getCurrentUser());
  const [mensagem, setMensagem] = useState("");
  const [variant, setVariant] = useState("");

  useEffect(() => {
    alunoService
      .listarID(aluno.id)
      .then((response) => {
        setAluno(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao acessar a lista de alunos.");
      });
  }, []);

  const onSubmitHandler = (data) => {

    data = {
      ...data, id: aluno.id
    }

    console.log(data);
    alunoService
      .atualizar(data.id, data)
      .then((response) => {
        console.log(data);
        toast.success("Perfil atualizado com sucesso.");
      })
      .catch((error) => {
          toast.error(error.response.data.mensage);
      });
  };

  return (
    <>
      <div className="meu-perfil-title title-container">
        <h1>Meu Perfil</h1>
      </div>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            nome: aluno.nome,
            email: aluno.email,
            matricula: aluno.matricula,
          }}
          validationSchema={Yup.object().shape({
            nome: Yup.string()
              .required("* Campo Nome é obrigatório")
              .nullable(),
            email: Yup.string()
              .required("* Campo E-mail é obrigatório")
              .nullable(),
            matricula: Yup.string()
              .required("* Campo Matricula é obrigatório")
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
                  className="iniciar-pbl-title"
                >
                  <h2>{values.nome}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Image
                    src={require("../../Components/Images/default_profile.png")}
                  />

                  <Card.Form
                    method="post"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <Card.Form.Group>
                      <Card.Form.Title>Nome</Card.Form.Title>
                      <Card.Form.InputText
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                        valid={touched.nome && !errors.nome}
                        error={touched.nome && errors.nome}
                        placeholder="Nome"
                      />
                      {errors.nome && touched.nome && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.nome}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.BreakRow />

                    <Card.Form.Group>
                      <Card.Form.Title>E-mail</Card.Form.Title>
                      <Card.Form.InputText
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        valid={touched.email && !errors.email}
                        error={touched.email && errors.email}
                        placeholder="E-mail"
                      />
                      {errors.email && touched.email && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.email}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.BreakRow />

                    <Card.Form.Group>
                      <Card.Form.Title>Matricula</Card.Form.Title>
                      <Card.Form.InputText
                        name="matricula"
                        onChange={handleChange}
                        valid={touched.matricula && !errors.matricula}
                        error={touched.matricula && errors.matricula}
                        value={values.matricula}
                        placeholder="Matricula"
                      />
                      {errors.matricula && touched.matricula && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.matricula}
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

export default PerfilUsuario;
