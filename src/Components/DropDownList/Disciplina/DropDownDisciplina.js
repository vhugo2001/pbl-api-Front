import React, { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import disciplinaService from "../../../Services/DisciplinaService";
import { useField, useFormikContext } from "formik";

const DropDownDisciplina = ({ value, ...props }) => {
  const [data, setData] = useState([]);
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const [disciplinasProfessor, setDisciplinasProfessor] = useState();

  useEffect(() => {
    if (value !== undefined) {
      console.log(value);
      disciplinaService
        .listarTodos()
        .then((response) => {
          setData(response.data);
          setDisciplinasProfessor(value)
        })
        .catch((error) => {
          toast.error("Erro ao listar as disciplinas");
        });
    }
  }, [value]);

  const handleChange = (v) => {
    console.log(v)
    setDisciplinasProfessor(v);
    setFieldValue(field.name, v);
  }

  return (
    <Select
      options={data}
      name="disciplinas"
      value={disciplinasProfessor}
      onChange={handleChange}
      className="basic-multi-select"
      classNamePrefix="select"
      getOptionValue={(option) => option.id}
      getOptionLabel={(option) => option.nome.toUpperCase()}
      placeholder="Disciplinas"
      noOptionsMessage={() => "Nenhuma disciplina encontrada"}
      isMulti
    />
  );
};

export default DropDownDisciplina;
