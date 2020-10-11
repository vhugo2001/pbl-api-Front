import React, { useState, useEffect } from "react";
import { Container, Dropdown, Alert } from "react-bootstrap/*";

import pblService from "../../Services/PblService";
import temaPblService from "../../Services/TemaPblService";

import CustomAlert from "../../Components/Alert/CustomAlert";

const ALERTA_SUCESSO = "danger";
const ALERTA_ERRO = "success";

const iniciarPbl = () => {
  const [inicio, onChange] = useState(new Date());
  const [fim, onChange2] = useState(new Date());
  const [listaTemaPbl, setListaTemaPbl] = useState([]);

  useEffect(() => {
    temaPblService
      .listarTodos()
      .then((r) => {
        setListaTemaPbl(r);
      })
      .catch((error) => {
        setVariant(ALERTA_ERRO);
        setMensagem("Erro ao consultar - Tema Pbl");
      });
  }, []);

  return (
    <>
      <Container>
        <CustomAlert variant={variant} mensagem={mensagem} />

        <Form onSubmit={handleSubmit}>
          <div class="form-group text-left">
            <label for="nome">Nome:</label>
            <Input
              name="nome"
              id="nome"
              placeholder={"Digite o nome da categoria"}
              value={nome}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div class="form-group text-left">
            <label for="descricao">Descrição:</label>
            <Input
              name="descricao"
              id="descricao"
              placeholder={"Digite a descrição da categoria"}
              value={descricao}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <Salvar type="submit">
            <FontAwesomeIcon icon={faSave} /> Salvar
          </Salvar>
        </Form>
      </Container>
    </>
  );
};

export default iniciarPbl;
