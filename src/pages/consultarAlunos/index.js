import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import ListAluno from "../../Components/TableAluno/ListAlunos"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DropDownList from "../../Components/DropDownList/Default/DropDownList";
import DropDownListAlunos from "../../Components/DropDownList/Alunos/DropDownList";
import serviceAluno from "../../Services/AlunoService";
import serviceTema from "../../Services/TemaPblService";

import '../../Components/App.css'
import servicePbl from "../../Services/PblService";
import { isEmptyObject } from "jquery";

const ConsultarAlunos = () => {
  return (
    <>
      <div className="iniciar-pbl-title">
        <h1>Consultar Alunos</h1>
      </div>
      <ListAluno />

    </>
  );
};
export default ConsultarAlunos;
