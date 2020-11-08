import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { Card } from "../../../Components/Card/CardPrincipal";
import * as IoIcons from "react-icons/io";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

import "../../../Components/TableAtividade/style";
import "./styles.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { toast } from "react-toastify";
import problemaService from "../../../Services/ProblemaService";
import SchemaCadastrar from "../Schema/SchemaCadastrar";
import Checkbox from "../../../Components/Checkbox/index";
import RangeSlider from "react-bootstrap-range-slider";
import authService from "../../../Services/AuthService";

const Index = ({ selected, setSelectedProblema, setIsAtualizar }) => {
  let usuarioLogado =  authService.getCurrentUser();
  const [problema, setProblema] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [ range, setRange ] = useState("1");

  useEffect(() => {
    if (selected !== null && selected !== undefined && selected !== "") {
      setProblema(selected);
      setRange(selected.prioridade);
      console.log(selected)
      setIsUpdating(true);
    }
  }, [selected]);

  const onSubmitHandler = (data) => {
    
    let _data = { ...data, prioridade: range, idUsuario:usuarioLogado.id };

    problemaService
      .incluir(_data)
      .then(() => {
        toast.success("Problema cadastrado com sucesso.");
        setIsAtualizar(true);
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.data);
      });
  };

  const onUpdateHandler = (data) => {
    let _data = { ...data, id: problema.id, prioridade: range, idUsuario:usuarioLogado.id };
    console.log(_data);
    problemaService
      .atualizar(_data.id, _data)
      .then(() => {
        toast.success("Disciplina atualizada com sucesso.");
        setIsAtualizar(true);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onClearHandler = () => {
    setProblema({ ...problema, id: 0, descricao: "", ativo: false });
    setSelectedProblema({})
    setRange(1);
    setIsUpdating(false);
  };

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            descricao: problema.descricao,
            ativo: problema.ativo,
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
                    <Card.Form.Title>Descrição</Card.Form.Title>
                    <Card.Form.InputText
                      name="descricao"
                      autocomplete="off"
                      onChange={handleChange}
                      value={values.descricao}
                      valid={touched.descricao && !errors.descricao}
                      error={touched.descricao && errors.descricao}
                    />
                    {errors.descricao && touched.descricao && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.descricao}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.BreakRow />

                  <Card.Form.Group>
                    <Card.Form.Title>Prioridade ({range})</Card.Form.Title>
                    <RangeSlider

                      value={range}
                      onChange={e => setRange(e.target.value)}
                      tooltip='off'
                      min={1}
                      max={10}
                    />
                  </Card.Form.Group>

                  <Card.Form.Group>
                  <Card.Form.Title>Status</Card.Form.Title>
                    <Checkbox
                     name="ativo"
                     autocomplete="off"
                     value={values.ativo}
                    >
                      Ativo
                    </Checkbox>
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
