import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card } from "../../../Components/Card/CardPrincipal";
import serviceDisciplina from "../../../Services/DisciplinaService";
import * as IoIcons from "react-icons/io";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "../../../Components/TableAtividade/style";
import "./styles.css";
import { toast } from "react-toastify";
import DisciplinaService from "../../../Services/DisciplinaService";
import SchemaCadastrar from "../Schema/SchemaCadastrar";

const Index = ({ selected, setIsAtualizar }) => {
  const [disciplina, setDisciplina] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (selected !== null && selected !== undefined && selected !== "") {
      setDisciplina(selected);
      setIsUpdating(true);
    }
  }, [selected]);

  const onSubmitHandler = (data) => {
    console.log(data);
    serviceDisciplina
      .incluir(data)
      .then((response) => {
        toast.success("Disciplina cadastrada com sucesso.");
        setIsAtualizar(true);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onUpdateHandler = (data) => {
    let _data = { ...data, id: disciplina.id };
    console.log(_data);
    DisciplinaService.atualizar(_data.id, _data)
      .then(() => {
        toast.success("Disciplina atualizada com sucesso.");
        setIsAtualizar(true);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onClearHandler = () => {
    setDisciplina({ ...disciplina, nome: "" });
    setIsUpdating(false);
  };
  const onDeleteHandler = () => {};

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            nome: disciplina.nome,
          }}
          validationSchema={SchemaCadastrar}
          onSubmit={(values) => {
            if (isUpdating) {
              onUpdateHandler(values);
            } else {
              onSubmitHandler(values);
            }
            setIsAtualizar(false);
          }}
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
                <div className="spacer-div" />
                {isUpdating && (
                  <>
                    <div
                      className="actions-form-button clear-button"
                      type="button"
                      onClick={onClearHandler}
                    >
                      <IoIcons.IoIosAdd className="icone-clear" />
                    </div>
                  </>
                )}
                <Card.Form
                  style={{ "padding-top": "0" }}
                  method="post"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <Card.Form.Group>
                    <Card.Form.Title>Nome</Card.Form.Title>
                    <Card.Form.InputText
                      name="nome"
                      autocomplete="off"
                      onChange={handleChange}
                      value={values.nome}
                      valid={touched.nome && !errors.nome}
                      error={touched.nome && errors.nome}
                    />
                    {errors.nome && touched.nome && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.nome}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>
                  <Card.Form.GroupButton className="group-button">
                    {!isUpdating && (
                      <Card.Button type="submit">Incluir</Card.Button>
                    )}
                    {isUpdating && (
                      <Card.Button type="submit">Atualizar</Card.Button>
                    )}
                  </Card.Form.GroupButton>
                </Card.Form>
              </>
            );
          }}
        </Formik>
      </Card>
    </>
  );
};

export default Index;
