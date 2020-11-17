import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import AuthService from "../../../Services/AuthService";
import { InputGroup, FormControl } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";

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
              <form method="post" autoComplete="off" onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <MdIcons.MdEmail />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.email && touched.email && (
                  <div className="error-message">{errors.email}</div>
                )}

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <GoIcons.GoKey />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    aria-label="senha"
                    aria-describedby="basic-addon1"
                    valid={touched.senha && !errors.senha}
                    error={touched.senha && errors.senha}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.senha && touched.senha && (
                  <div className="error-message">{errors.senha}</div>
                )}

                <div className="form-group d-flex justify-content-between align-items-center">
                  <div className="text-right mb-3"><a href="" className="card-link">Recuperar senha</a></div>
                  <button type="submit" className="btn float-right btn-inline btn-login"><FaIcons.FaSignInAlt /> Login</button>
                </div>
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
