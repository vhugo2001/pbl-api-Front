import React, { useState, useEffect } from "react";
import { Card } from "../../../Components/Card/CardPrincipal";
import alunoService from "../../../Services/AlunoService";
import authService from "../../../Services/AuthService";
import { toast } from "react-toastify";

import { Formik } from "formik";
import * as Yup from "yup";

function Index() {
  const [empresa, setEmpresa] = useState(authService.getCurrentUser());

  useEffect(() => {
    alunoService
      .listarID(empresa.id)
      .then((response) => {
        setEmpresa(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao recuperar as informações da empresa.");
      });
  }, []);

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      id: empresa.id,
    };

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
            nome: empresa.nome,
            email: empresa.email,
            cnpj: empresa.cnpj,
            endereco: empresa.endereco,
          }}
          validationSchema={Yup.object().shape({
            nome: Yup.string()
              .required("* Campo nome é obrigatório")
              .nullable(),
            cnpj: Yup.string()
              .required("* Campo cnpj é obrigatório")
              .matches(
                /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
                "Digite um cnpj válido"
              )
              .nullable(),
            email: Yup.string()
              .required("* Campo email é obrigatório")
              .nullable(),
            endereco: Yup.string()
            .required("* Campo endereço é obrigatório")
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

                    <Card.Form.Group>
                      <Card.Form.Title>CNPJ</Card.Form.Title>
                      <Card.Form.InputText
                        name="cnpj"
                        value={values.cnpj}
                        onChange={handleChange}
                        valid={touched.cnpj && !errors.cnpj}
                        error={touched.cnpj && errors.cnpj}
                        placeholder="CNPJ"
                      />
                      {errors.cnpj && touched.cnpj && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.cnpj}
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
                      />
                      {errors.email && touched.email && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.email}
                        </Card.Form.StyledInlineErrorMessage>
                      )}
                    </Card.Form.Group>

                    <Card.Form.BreakRow />

                    <Card.Form.Group>
                      <Card.Form.Title>Endereço</Card.Form.Title>
                      <Card.Form.InputText
                        name="endereco"
                        onChange={handleChange}
                        valid={touched.endereco && !errors.endereco}
                        error={touched.endereco && errors.endereco}
                        value={values.endereco}
                        placeholder="Endereço"
                      />
                      {errors.endereco && touched.endereco && (
                        <Card.Form.StyledInlineErrorMessage>
                          {errors.endereco}
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