import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import alunoService from "../../../Services/AuthService";
import SchemaAluno from "./SchemaYup/SchemaAluno";

const Aluno = () => {
  const onSubmitHandler = (data) => {
    alunoService
      .registrarAluno(data)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          nome: "",
          matricula: "",
          email: "",
          senha: "",
          senhaC: "",
        }}
        validationSchema={SchemaAluno}
        onSubmit={(values) => onSubmitHandler(values)}
      >
        {({ errors, touched, handleSubmit, handleChange }) => {
          return (
            <>
              <form action="/" autoComplete="off" onSubmit={handleSubmit}>
                <div className="top-row">
                  <div className="field-wrap">
                    <input
                      name="nome"
                      type="text"
                      valid={touched.nome && !errors.nome}
                      error={touched.nome && errors.nome}
                      placeholder="Nome"
                      onChange={handleChange}
                    />
                    {errors.nome && touched.nome && (
                      <div className="error-message">{errors.nome}</div>
                    )}
                  </div>

                  <div className="field-wrap">
                    <input
                      name="matricula"
                      type="text"
                      valid={touched.matricula && !errors.matricula}
                      error={touched.matricula && errors.matricula}
                      placeholder="Matrícula"
                      onChange={handleChange}
                    />
                    {errors.matricula && touched.matricula && (
                      <div className="error-message">{errors.matricula}</div>
                    )}
                  </div>
                </div>
                <div className="field-wrap">
                  <input
                    name="email"
                    type="email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>
                <div className="field-wrap">
                  <input
                    name="senha"
                    type="password"
                    valid={touched.senha && !errors.senha}
                    error={touched.senha && errors.senha}
                    placeholder="Senha"
                    onChange={handleChange}
                  />
                  {errors.senha && touched.senha && (
                    <div className="error-message">{errors.senha}</div>
                  )}
                </div>
                <div className="field-wrap">
                  <input
                    name="senhaC"
                    type="password"
                    valid={touched.senhaC && !errors.senhaC}
                    error={touched.senhaC && errors.senhaC}
                    placeholder="Confirmar Senha"
                    onChange={handleChange}
                  />
                  {errors.senhaC && touched.senhaC && (
                    <div className="error-message">{errors.senhaC}</div>
                  )}
                </div>
                <button type="submit" className="button button-block">
                  enviar registro
                </button>
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Aluno;

