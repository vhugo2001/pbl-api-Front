import React, { useEffect, useState } from "react";
import { Card } from "../../../Components/Card/CardPrincipal";
import DatePickerField from "../../../Components/DatePicker/DatePickerField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import DropDownList from "../../../Components/DropDownList/Default/DropDownList";
import DropDownListAlunos from "../../../Components/DropDownList/Alunos/DropDownList";
import serviceAluno from "../../../Services/AlunoService";
import serviceTema from "../../../Services/TemaPblService";
import serviceDisciplina from "../../../Services/DisciplinaService";
import servicePbl from "../../../Services/PblService";
import { toast } from "react-toastify";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { isEmptyObject } from "jquery";

import "react-datepicker/dist/react-datepicker.css";

const Index = () => {
  const [listaAluno, setListaAluno] = useState([]);
  const [listaTemaPbl, setListaTemaPbl] = useState([]);
  const [listaDisciplina, setListaDisciplina] = useState([]);
  const [listaPbl, setListaPbl] = useState([]);
  const [temaSelecionado, setTemaSelecionado] = useState({});
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState({});
  const [alunosSelecionados, setAlunosSelecionados] = useState([]);

  const [dataConclusao, setDataConclusao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [messagem, setMensagem] = useState("");
  const [variant, setVariant] = useState("");

  const [formValues, setFormValues] = useState();

  useEffect(() => {
    serviceAluno
      .listarTodos()
      .then((response) => {
        setListaAluno(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao acessar a lista de alunos.");
      });
  }, []);

  useEffect(() => {
    console.log(disciplinaSelecionada.id);
    serviceTema
      .listarIDDisciplina(disciplinaSelecionada.id)
      .then((response) => {
        let data = response.data;
        console.log(data);
        setListaTemaPbl(data);
      })
      .catch((error) => console.log(error));
  }, [disciplinaSelecionada]);

  useEffect(() => {
    serviceDisciplina
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setListaDisciplina(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      professor: { id: 5 },
      dataInicio: format(data.dataInicio, "dd/MM/yyyy"),
      dataConclusao: format(data.dataConclusao, "dd/MM/yyyy"),
      pblTemaDisciplina: {
        disciplina: {
          id: disciplinaSelecionada.id,
        },
        tema: {
          id: temaSelecionado.id,
        },
      },
    };

    console.log(data);

    servicePbl
      .incluir(data)
      .then((response) => {
        let data = response.data;
        setListaPbl(data);
        console.log(listaPbl);
        toast.success("Pbl cadastrado com sucesso.");
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar o PBL.");
      });
  };

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <>
      <div className="title-container">
        <h1>Iniciar PBL</h1>
      </div>
      <Card>
        <Formik
          initialValues={{
            temaPbl: "",
            dataInicio: "",
            dataConclusao: "",
            aluno: "",
            problema: "",
          }}
          validationSchema={Yup.object().shape({
            temaPbl: Yup.string()
              .required("* Campo Tema PBL é obrigatório")
              .nullable(),
            dataInicio: Yup.date()
              .required("* Campo Data Início é obrigatório")
              .nullable(),
            dataConclusao: Yup.date()
              .required("* Campo Data Conclusão é obrigatório")
              .nullable()
              .when(
                "dataInicio",
                (started, yup) =>
                  started &&
                  yup.min(
                    started,
                    "* Data Conclusão não pode ser anterior à Data Inicio"
                  )
              ),
            aluno: Yup.string().required("* Campo Aluno é obrigatório"),
            problema: Yup.string().required("* Campo problema é obrigatório"),
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
                  <Card.Form.Group style={{ flex: 4 }}>
                    <Card.Form.Title>Disciplina</Card.Form.Title>
                    <DropDownList
                      lista={listaDisciplina}
                      onSelect={setDisciplinaSelecionada}
                    ></DropDownList>
                  </Card.Form.Group>

                  <Card.Form.Group style={{ flex: 4 }}>
                    <Card.Form.Title>Tema PBL</Card.Form.Title>
                    <DropDownList
                      name="temaPbl"
                      lista={listaTemaPbl}
                      onSelect={setTemaSelecionado}
                      valid={touched.temaPbl && !errors.temaPbl}
                      error={touched.temaPbl && errors.temaPbl}
                    ></DropDownList>
                    {errors.temaPbl && touched.temaPbl && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.temaPbl}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.Group>
                    <Card.Form.Title>Data Inicio</Card.Form.Title>
                    <DatePickerField
                      name="dataInicio"
                      locale={pt}
                      minDate={subDays(new Date(), 0)}
                      useShortMonthInDropdown
                      dateFormat="dd/MM/yyyy"
                      selected={dataInicio}
                      customInput={
                        <Card.Form.InputText
                          onfocus="this.removeAttribute('readonly');"
                          readonly
                          value={dataInicio}
                          valid={touched.dataInicio && !errors.dataInicio}
                          error={touched.dataInicio && errors.dataInicio}
                        />
                      }
                    />
                    {errors.dataInicio && touched.dataInicio && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.dataInicio}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.Group>
                    <Card.Form.Title>Data Conclusão</Card.Form.Title>
                    <DatePickerField
                      name="dataConclusao"
                      locale={pt}
                      minDate={subDays(new Date(), 0)}
                      useShortMonthInDropdown
                      dateFormat="dd/MM/yyyy"
                      selected={dataConclusao}
                      customInput={
                        <Card.Form.InputText
                          value={dataConclusao}
                          valid={touched.dataConclusao && !errors.dataConclusao}
                          error={touched.dataConclusao && errors.dataConclusao}
                        />
                      }
                    />
                    {errors.dataConclusao && touched.dataConclusao && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.dataConclusao}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.BreakRow />

                  <Card.Form.Group style={{ flex: 5 }}>
                    <Card.Form.Title>Alunos</Card.Form.Title>
                    <DropDownListAlunos
                      name="aluno"
                      lista={listaAluno}
                      onSelect={setAlunosSelecionados}
                      valid={touched.aluno && !errors.aluno}
                      error={touched.aluno && errors.aluno}
                    ></DropDownListAlunos>
                    {errors.aluno && touched.aluno && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.aluno}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.Group>
                    <Card.Form.Title>Empresa</Card.Form.Title>
                    <Card.Form.InputText />
                  </Card.Form.Group>

                  <Card.Form.BreakRow />

                  <Card.Form.Group>
                    <Card.Form.Title>Problema</Card.Form.Title>
                    <Card.Form.InputText
                      autocomplete="off"
                      name="problema"
                      onChange={handleChange}
                      valid={touched.problema && !errors.problema}
                      error={touched.problema && errors.problema}
                    />
                    {errors.problema && touched.problema && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.problema}
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
};
export default Index;
