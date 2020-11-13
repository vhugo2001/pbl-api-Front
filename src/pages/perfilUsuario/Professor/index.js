import React, { useState, useEffect } from "react";
import { Card } from "../../../Components/Card/CardPrincipal";
import professorService from "../../../Services/ProfessorService";
import authService from "../../../Services/AuthService";
import { toast } from "react-toastify";

import { Formik } from "formik";
import * as Yup from "yup";
import SchemaProfessor from "../Schemas/SchemaProfessor"

function Index({ usuario }) {
  const [professor, setProfessor] = useState(usuario);

  useEffect(() => {
    professorService
      .listarID(professor.id)
      .then((response) => {
        setProfessor(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao recuperar as informações do professor.");
      });
  }, []);

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      id: professor.id,
    };

    professorService
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
            nome: professor.nome,
            email: professor.email,
          }}
          validationSchema={SchemaProfessor}
          onSubmit={(values) => onSubmitHandler(values)}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => {
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
                    src={require("../../../Components/Images/default_profile.png")} // incluir url vinda do usuario logado
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
                      <Card.Form.Title>Email</Card.Form.Title>
                      <Card.Form.InputText
                        name="email"
                        onChange={handleChange}
                        valid={touched.email && !errors.email}
                        error={touched.email && errors.email}
                        value={values.email}
                        placeholder="Email"
                        type="email"
                      />
                      {errors.email && touched.email && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.email}
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

export default Index;
