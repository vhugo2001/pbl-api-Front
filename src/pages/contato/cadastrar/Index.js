import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { Card } from "../../../Components/Card/CardPrincipal";
import * as IoIcons from "react-icons/io";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

import "../../../Components/TableAtividade/style";
import "./styles.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { toast } from "react-toastify";

import SchemaCadastrar from "../Schema/SchemaCadastrar";
import DropDownList from "../../../Components/DropDownList/Default/DropDownList";
import authService from "../../../Services/AuthService";
import tipoContatoService from "../../../Services/TipoContatoService";
import empresaService from "../../../Services/EmpresaService";

const Index = ({
  selected,
  setSelectedContato,
  setIsAtualizar,
}) => {
  let usuarioLogado = authService.getCurrentUser();
  const [empresa, setEmpresa] = useState({});
  const [contato, setContato] = useState("");
  const [listaTipoContato, setListaTipoContato] = useState({});
  const [tipoContatoSelecionado, setTipoContatoSelecionado] = useState({});
  const [itemDropDow, setItemDropDow] = useState(selected);
  const [isUpdating, setIsUpdating] = useState(false);



  useEffect(() => {
    setItemDropDow(selected.tipoContato);
  }, [selected]);

  useEffect(() => {
    empresaService
      .listarID(usuarioLogado.id)
      .then((response) => {
        setEmpresa(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao recuperar o usuario logado");
      });
  }, []);

  useEffect(() => {
    tipoContatoService
      .listarTodos()
      .then((response) => {
        setListaTipoContato(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao listar Tipo Contato");
      });
  }, []);

  useEffect(() => {
    if (selected !== null && selected !== undefined && selected !== "") {
      setContato(selected);
      console.log(selected);
      setIsUpdating(true);
    }
  }, [selected]);

  const onSubmitHandler = (data) => {
    let _data = { ...data, idUsuario: usuarioLogado.id };

    console.log(_data);

    empresaService
      .incluirContato(_data)
      .then(() => {
        toast.success("Contato cadastrado com sucesso.");
        setIsAtualizar(true);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });

    console.log(_data);
  };

  const onUpdateHandler = (data) => {
    let _data = { ...data, id: contato.id, idUsuario: usuarioLogado.id };

    console.log(_data);
    empresaService
      .atualizarContato(_data.id, _data)
      .then(() => {
        toast.success("Contato atualizado com sucesso.");
        setIsAtualizar(true);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  const onClearHandler = () => {
    setContato({ ...contato, id: 0, nomeContato: "", email: "", contato: "" });
    setSelectedContato({});
    setIsUpdating(false);
  };

  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{
            nomeContato: contato.nomeContato,
            email: contato.email,
            contato: contato.contato,
            tipoContato: contato.tipoContato,
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
                      name="nomeContato"
                      autocomplete="off"
                      onChange={handleChange}
                      value={values.nomeContato}
                      valid={touched.nomeContato && !errors.nomeContato}
                      error={touched.nomeContato && errors.nomeContato}
                    />
                    {errors.nomeContato && touched.nomeContato && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.nomeContato}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.BreakRow />

                  <Card.Form.Group>
                    <Card.Form.Title>Email</Card.Form.Title>
                    <Card.Form.InputText
                      name="email"
                      autocomplete="off"
                      onChange={handleChange}
                      value={values.email}
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                    {errors.email && touched.email && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.email}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.BreakRow />

                  <Card.Form.Group>
                    <Card.Form.Title>Contato</Card.Form.Title>
                    <Card.Form.InputText
                      name="contato"
                      autocomplete="off"
                      onChange={handleChange}
                      value={values.contato}
                      valid={touched.contato && !errors.contato}
                      error={touched.contato && errors.contato}
                    />
                    {errors.contato && touched.contato && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.contato}
                      </Card.Form.StyledInlineErrorMessage>
                    )}
                  </Card.Form.Group>

                  <Card.Form.BreakRow />
                  <Card.Form.Group style={{ flex: 4 }}>
                    <Card.Form.Title>Tipo Contato</Card.Form.Title>
                    <DropDownList
                      name="tipoContato"
                      lista={listaTipoContato}
                      onSelect={setTipoContatoSelecionado}
                      selected={itemDropDow}
                      valid={touched.tipoContato && !errors.tipoContato}
                      error={touched.tipoContato && errors.tipoContato}
                    ></DropDownList>
                    {errors.tipoContato && touched.tipoContato && (
                      <Card.Form.StyledInlineErrorMessage>
                        {errors.tipoContato}
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
