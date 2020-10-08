import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  ContainerTitle,
  Title,
  ContainerName,
  ContainerSubTitle,
  SubTitle,
  ContainerDate,
  DateInicio,
  DateFim,
  ContainerTema,
  ContainerInfo,
} from "./style.js";

function RegistarPBL() {
  const [inicio, onChange] = useState(new Date());
  const [fim, onChange2] = useState(new Date());

  return (
    <Container>
      <ContainerTitle>
        <Title>Iniciar PBL</Title>
      </ContainerTitle>
      <ContainerSubTitle>
        <SubTitle>Inserir Título do PBL</SubTitle>
      </ContainerSubTitle>
      <ContainerName placeholder="Titulo do PBL"></ContainerName>
      <ContainerInfo>
        <ContainerDate>
          <DateInicio>
            <DatePicker onChange={onChange} value={inicio} />
          </DateInicio>
          <DateFim>
            <DatePicker onChange={onChange2} value={fim} />
          </DateFim>
        </ContainerDate>
        <ContainerTema></ContainerTema>
      </ContainerInfo>
    </Container>
  );
}

export default RegistarPBL;
