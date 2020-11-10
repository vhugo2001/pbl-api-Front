import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import alunoService from "../../../Services/AuthService";
import SchemaAluno from "./SchemaYup/SchemaAluno";
import * as Constants from "../../../config/constants"
import { mask } from 'remask'

const Aluno = () => {
  const onSubmitHandler = async (data, {resetForm}) => {
    alunoService
      .registrarAluno(data)
      .then((response) => {
        toast.success(response.data.message);
        resetForm({});
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
        onSubmit={onSubmitHandler}
      >
        {({ errors, touched, handleSubmit, handleChange, isSubmitting, isValid, status, values }) => {
          return (
            <>
              <form action="/" autoComplete="off" onSubmit={handleSubmit}>
                <div className="top-row">
                  <div className="field-wrap">
                    <input
                      name="nome"
                      value = {values.nome || ''}
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
                      value = { mask(values.matricula, Constants.MASK_PATTERNS_MATRICULA) || ''}
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
                    value = {values.email || ''}
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
                    value = {values.senha || ''}
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
                    value = {values.senhaC || ''}
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
