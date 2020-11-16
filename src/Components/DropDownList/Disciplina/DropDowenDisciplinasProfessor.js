import React, { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import professorService from "../../../Services/ProfessorService";

const DropDowenDisciplinasProfessor = ({usuario, selected}) => {
  const [professor, setProfessor] = useState(usuario);

  useEffect(() => {
    professorService
      .listarID(professor.id)
      .then((response) => {
        setProfessor(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao recuperar as informações do professor.");
      });
  }, []);

  const handleChange = (v) => {
      console.log(v)
    selected(v);
  }

  return (
    <Select
      options={professor.disciplinas}
      name="disciplinas"
      onChange={handleChange}
      className="basic-multi-select"
      classNamePrefix="select"
      getOptionValue={(option) => option.id}
      getOptionLabel={(option) => option.nome.toUpperCase()}
      placeholder="- Selecione uma disciplina -"
      noOptionsMessage={() => "Nenhuma disciplina encontrada"}
    />
  );
};

export default DropDowenDisciplinasProfessor;
