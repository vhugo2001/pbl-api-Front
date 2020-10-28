import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import AuthService from "../../../Services/AuthService";

const Login = () => {
  const history = useHistory();

  const onSubmitHandler = (data) => {
    AuthService.login(data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("entrou")
         history.push("/admin");
      })
      .catch((error) => {
        toast.error("Usuario ou senha inválido");
      });
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          senha: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required("* Campo email é obrigatório")
            .nullable(),
          senha: Yup.string()
            .required("* Campo senha é obrigatório")
            .nullable(),
        })}
        onSubmit={(values) => onSubmitHandler(values)}
      >
        {({ errors, touched, handleSubmit, handleChange }) => {
          return (
            <>
              <h1>FEST - PROJETO PBL</h1>
              <form method="post" autoComplete="off" onSubmit={handleSubmit}>
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

                <p className="forgot">
                  <a href="/">Recuperar Senha?</a>
                </p>

                <button type="submit" className="button button-block">
                  Login
                </button>
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
