import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card } from "../../../Components/Card/CardPrincipal";
import serviceDisciplina from "../../../Services/DisciplinaService";
import { toast } from "react-toastify";

const Index = () => {

    const [messagem, setMensagem] = useState("");
    const [variant, setVariant] = useState("");

    const onSubmitHandler = (data) => {
        console.log(data)
        serviceDisciplina
          .incluir(data)
          .then((response) => {
            let data = response.data;
            toast.success("Disciplina cadastrada com sucesso.");
          })
          .catch((error) => {
            toast.error("Erro ao cadastrar disciplina.");
          });
      };

    return (
        //Remover a div pai e atribur o padding 30px no componente Home!!!!!
        <>
          <div className="title-container">
            <h1>Cadastrar disciplina</h1>
          </div>
          <Card>
            <Formik
              initialValues={{
                nome: ""
              }}
              validationSchema={Yup.object().shape({
                nome: Yup.string()
                  .required("* Campo Nome é obrigatório")
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
                    <Card.Form
                      method="post"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <Card.Form.Group>
                        <Card.Form.Title>Nome</Card.Form.Title>
                        <Card.Form.InputText
                          autocomplete="off"
                          name="nome"
                          onChange={handleChange}
                          valid={touched.nome && !errors.nome}
                          error={touched.nome && errors.nome}
                        />
                        {errors.nome && touched.nome && (
                          <Card.Form.StyledInlineErrorMessage>
                            {errors.nome}
                          </Card.Form.StyledInlineErrorMessage>
                        )}
                      </Card.Form.Group>
    
                      <Card.Form.BreakRow />
    
                      <Card.Form.GroupButton>
                        <Card.Form.Submit type="submit">Salvar</Card.Form.Submit>
                      </Card.Form.GroupButton>
                    </Card.Form>
                  </>
                );
              }}
            </Formik>
          </Card>
        </>
      );
}

export default Index