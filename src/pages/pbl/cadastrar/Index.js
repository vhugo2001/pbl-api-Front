import React, { useEffect, useState } from "react";
import { Card } from "../../../Components/Card/CardPrincipal";
import DatePickerField from "../../../Components/DatePicker/DatePickerField";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import DropDownList from "../../../Components/DropDownList/Default/DropDownList";
import DropDownListAlunos from "../../../Components/DropDownList/Alunos/DropDownList";
import serviceEmpresa from "../../../Services/EmpresaService";
import serviceAluno from "../../../Services/AlunoService";
import serviceTema from "../../../Services/TemaPblService";
import serviceDisciplina from "../../../Services/DisciplinaService";
import servicePbl from "../../../Services/PblService";
import { toast } from "react-toastify";
import ApiCalendar from "react-google-calendar-api";
import authService from "../../../Services/AuthService";
import { Formik } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import SchemaCadastrarPbl from "../Schema/SchemaCadastrarPbl";

const Index = () => {
  let usuarioLogado = authService.getCurrentUser();
  const [listaAluno, setListaAluno] = useState([]);
  const [listaTemaPbl, setListaTemaPbl] = useState([]);
  const [listaDisciplina, setListaDisciplina] = useState([]);
  const [listaEmpresa, setListaEmpresa] = useState([]);
  const [empresaSelecionada, setEmpresaSelecionada] = useState([]);
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
    // ApiCalendar.handleSignoutClick();
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
    if (
      disciplinaSelecionada.id !== undefined &&
      disciplinaSelecionada.id !== ""
    ) {
      console.log(disciplinaSelecionada.id);
      serviceTema
        .listarIDDisciplina(disciplinaSelecionada.id)
        .then((response) => {
          let data = response.data;
          setListaTemaPbl(data);
        })
        .catch((error) => toast.error("Erro ao acessar a lista de temas."));
    }
  }, [disciplinaSelecionada]);

  useEffect(() => {
    serviceDisciplina
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setListaDisciplina(data);
      })
      .catch((error) => toast.error("Erro ao acessar a lista de disciplinas."));
  }, []);

  useEffect(() => {
    serviceEmpresa
      .listarTodos()
      .then((response) => {
        let data = response.data;
        setListaEmpresa(data);
      })
      .catch((error) => toast.error("Erro ao acessar a lista de empresas."));
  }, []);

  const onSubmitHandler = (data) => {
    console.log(data);
    const finalDate = data.dataConclusao;
    data = {
      ...data,
      professor: { id: usuarioLogado.id },
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
    const eventFromNow = {
      summary: "Entrega do PBL da disciplina " + disciplinaSelecionada.nome,
      description: "Problema a ser solucionado: " + data.problema,
      start: {
        date: format(new Date(finalDate), "yyyy-MM-dd"),
        timeZone: "America/Sao_Paulo",
      },
      end: {
        date: format(new Date(finalDate), "yyyy-MM-dd"),
        timeZone: "America/Sao_Paulo",
      },
    };
    servicePbl
      .incluir(data)
      .then((response) => {
        let data = response.data;
        setListaPbl(data);
        console.log(listaPbl);
        toast.success("Pbl cadastrado com sucesso.");

        ApiCalendar.onLoad(() => {
          if (ApiCalendar.sign) {
            ApiCalendar.createEvent(eventFromNow)
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            ApiCalendar.handleAuthClick();
          }
        });
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
          validationSchema={SchemaCadastrarPbl}
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
                    <DropDownList
                      lista={listaEmpresa}
                      onSelect={setEmpresaSelecionada}
                    ></DropDownList>
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
