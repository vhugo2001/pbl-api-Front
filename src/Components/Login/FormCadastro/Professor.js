import React, { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import professorService from "../../../Services/AuthService";
import SchemaProfessor from "./SchemaYup/SchemaProfessor";

const Professor = () => {
  const onSubmitHandler = async (data) => {
    professorService
      .registrarProfessor(data)
      .then((response) => {
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
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
          email: "",
          senha: "",
          senhaC: "",
        }}
        validationSchema={SchemaProfessor}
        onSubmit={(values) => onSubmitHandler(values)}
      >
        {({ errors, touched, handleSubmit, handleChange }) => {
          return (
            <>
              <form action="/" autoComplete="off" onSubmit={handleSubmit}>
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

export default Professor;
