import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Card } from "../../../Components/Card/CardPrincipal";
import DropDownList from "../../../Components/DropDownList/Default/DropDownList";
import serviceTema from "../../../Services/TemaPblService";
import serviceDisciplina from "../../../Services/DisciplinaService";
import * as IoIcons from "react-icons/io";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "../../../Components/TableAtividade/style";
import "./styles.css";
import { toast } from "react-toastify";

const Index = ({ selected, selectedDisciplina }) => {
  const [Tema, setTema] = useState("");
  const [listaDisciplina, setlistaDisciplina] = useState([]);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    listarDisciplinas();
  }, []);

  useEffect(() => {
    if (selected !== null && selected !== undefined && selected !== "") {
      setTema(selected);
      setDisciplinaSelecionada(selectedDisciplina[0].nome);
      setIsUpdating(true);
    }
  }, [selected]);

  useEffect(() => {
    console.log(selectedDisciplina);
  }, [selectedDisciplina]);

  const listarDisciplinas = () => {
    serviceDisciplina
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setlistaDisciplina(data);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onSubmitHandler = (data) => {
    console.log(data);
  
  };

  const onUpdateHandler = (data) => {
    let _data = { ...data, id: Tema.id };
    console.log(_data);
    serviceTema
      .atualizar(_data.id, _data)
      .then(() => {
        toast.success("Tema atualizado com sucesso.");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onClearHandler = () => {
    setTema({ ...Tema, nome: "" });
    setDisciplinaSelecionada("");
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
            nome: Tema.nome,
            disciplina: disciplinaSelecionada,
          }}
          validationSchema={Yup.object().shape({
            nome: Yup.string()
              .required("* Campo Nome é obrigatório")
              .nullable(),
            disciplina: Yup.string()
              .required("* Campo Disciplina é obrigatório")
              .nullable(),
          })}
          onSubmit={(values) => {
            if (isUpdating) {
              return onUpdateHandler(values);
            } else {
              return onSubmitHandler(values);
            }
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

                    <div
                      className="actions-form-button delete-button"
                      type="button"
                      onClick={onDeleteHandler}
                    >
                      <IoIcons.IoMdTrash className="icone-deletar" />
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
                  <Card.Form.BreakRow />
                  <Card.Form.Group style={{ flex: 4 }}>
                    <Card.Form.Title>Disciplina</Card.Form.Title>
                    <DropDownList
                      name="disciplina"
                      lista={listaDisciplina}
                      onSelect={setDisciplinaSelecionada}
                      selected={selectedDisciplina}
                      valid={touched.disciplina && !errors.disciplina}
                      error={touched.disciplina && errors.disciplina}
                    ></DropDownList>
                    {errors.disciplina && touched.disciplina && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.disciplina}
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
