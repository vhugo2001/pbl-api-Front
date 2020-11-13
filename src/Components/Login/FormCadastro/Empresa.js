import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { InputGroup, FormControl } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

import empresaService from "../../../Services/AuthService";
import SchemaEmpresa from "./SchemaYup/SchemaEmpresa";
import * as Constants from "../../../config/constants"
import { mask } from 'remask'

const Empresa = () => {
  const onSubmitHandler = async (data, { resetForm }) => {
    empresaService
      .registrarEmpresa(data)
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
          cnpj: "",
          email: "",
          senha: "",
          senhaC: "",
        }}
        validationSchema={SchemaEmpresa}
        onSubmit={onSubmitHandler}
      >
        {({ errors, touched, handleSubmit, handleChange, isSubmitting, isValid, status, values }) => {
          return (
            <>
              <form action="/" autoComplete="off" onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    name="nome"
                    value={values.nome || ''}
                    placeholder="Nome"
                    aria-label="nome"
                    valid={touched.nome && !errors.nome}
                    error={touched.nome && errors.nome}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.nome && touched.nome && (
                  <div className="error-message">{errors.nome}</div>
                )}

                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    name="cnpj"
                    value={mask(values.cnpj, Constants.MASK_PATTERNS_CNPJ) || ''}
                    placeholder="Nome"
                    aria-label="CNPJ"
                    valid={touched.cnpj && !errors.cnpj}
                    error={touched.cnpj && errors.cnpj}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.cnpj && touched.cnpj && (
                  <div className="error-message">{errors.cnpj}</div>
                )}

                <InputGroup className="mb-3">
                  <FormControl
                    type="email"
                    name="email"
                    value={values.email || ''}
                    placeholder="E-mail"
                    aria-label="email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.email && touched.email && (
                  <div className="error-message">{errors.email}</div>
                )}

                <InputGroup className="mb-3">
                  <FormControl
                    type="password"
                    name="senha"
                    value={values.senha || ''}
                    placeholder="Senha"
                    aria-label="senha"
                    valid={touched.senha && !errors.senha}
                    error={touched.senha && errors.senha}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.senha && touched.senha && (
                  <div className="error-message">{errors.senha}</div>
                )}

                <InputGroup className="mb-3">
                  <FormControl
                    type="password"
                    name="senhaC"
                    value={values.senhaC || ''}
                    placeholder="Confirmar Senha"
                    aria-label="Confirmar Senha"
                    valid={touched.senhaC && !errors.senhaC}
                    error={touched.senhaC && errors.senhaC}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.senhaC && touched.senhaC && (
                  <div className="error-message">{errors.senhaC}</div>
                )}

                <div className="form-group d-flex justify-content-end align-items-center">
                  <button type="submit" className="btn float-right btn-inline btn-login"><FaIcons.FaSave /> Enviar</button>
                </div>
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Empresa;
