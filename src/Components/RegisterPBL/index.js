import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonSubmit } from "../../Components/styleEstilos";
import api from "../../Services/api";
import { Multiselect } from "multiselect-react-dropdown";

function RegistarPBL() {
  const [inicio, onChange] = useState(new Date());
  const [fim, onChange2] = useState(new Date());
  const data = [
    { id: 1, alunos: "aluno 1" },
    { id: 2, alunos: "aluno 2" },
    { id: 3, alunos: "aluno 3" },
    { id: 4, alunos: "aluno 4" },
    { id: 5, alunos: "aluno 5" },
    { id: 6, alunos: "aluno 6" },
    { id: 7, alunos: "aluno 7" },
  ];
  const [options] = useState(data);

  const handleDateInicio = (data) => {
    console.log(data);
  };

  const [value, setValue] = useState();
  const [formattedValue, setFormattedValue] = useState();

  //   const [pbl, setPbl] = useState({
  //     id: 0,
  //     titulo: "",
  //     dataInicio: 0,
  //     dataFim: 1,
  //     empresa: "",
  //     tema: "",
  //     situacaoProblema: "",
  //   });

  //   const handleAddPBL = async () => {
  //     try {
  //       await api.post("/pbl", PBL);
  //     } catch (error) {
  //       alert("Erro no acesso a API");
  //     }
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(pbl);
  //     handleAddPBL();
  //   };

  return (
    <>
      <div
        className="container"
        style={{
          width: "70%",
          textAlign: "center",
        }}
      >
        <h2>Iniciar PBL</h2>
        <hr style={{ backgroundColor: "#002147", width: "100%" }}></hr>
      </div>

      <div className="container" style={{ width: "70%" }}>
        <form>
          <div className="form-group" style={{ textAlign: "center" }}>
            <label>Inserir Título do PBL</label>
            <input
              type="titulo"
              class="form-control"
              placeholder="Titulo do PBL"
              //   value={pbl.titulo}
              //     onChange={(e) =>
              //       setPbl({ ...pbl, titulo: e.target.value })
              //     }
            />
          </div>

          <div className="row">
            <div className="col-sm" style={{ textAlign: "center" }}>
              <label>Data de Inicio</label>
              <br />
              <DatePicker onChange={handleDateInicio} value={inicio} />
            </div>

            <div className="col-sm" style={{ textAlign: "center" }}>
              <label>Data de Fim</label>
              <br />
              <DatePicker
                onChange={onChange2}
                value={fim}
                format="dd/MM/yyyy"
              />
            </div>

            <div className="col-sm" style={{ textAlign: "center" }}>
              <label>Empresa relacionada</label>
              <br />
              <select
                className="form-control"
                name="empresasDropdown"
                style={{ marginTop: -5 }}
              >
                <option data-count="1" value="Nenhuma">
                  Nenhuma
                </option>
                <option data-count="2" value="Empresa 1">
                  Empresa 1
                </option>
                <option data-count="3" value="Empresa 2">
                  Empresa 2
                </option>
                <option data-count="4" value="Empresa 3">
                  Empresa 3
                </option>
                <option data-count="5" value="Empresa 4">
                  Empresa 4
                </option>
                <option data-count="6" value="Empresa 5">
                  Empresa 5
                </option>
                <option data-count="7" value="Empresa 6">
                  Empresa 6
                </option>
                <option data-count="8" value="Empresa 7">
                  Empresa 7
                </option>
                <option data-count="9" value="Empresa 8">
                  Empresa 8
                </option>
                <option data-count="10" value="Empresa 9">
                  Empresa 9
                </option>
                <option data-count="11" value="Empresa 10">
                  Empresa 10
                </option>
                <option data-count="12" value="Empresa 11">
                  Empresa 11
                </option>
              </select>
            </div>
          </div>

          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-sm-8" style={{ marginTop: 20 }}>
              <textarea
                class="form-control"
                placeholder="Descreva a situacao Problema"
                rows="5"
              ></textarea>
            </div>

            <div
              className="col-sm-4"
              style={{ marginTop: 20, textAlign: "center" }}
            >
              <label>Tema relacionado</label>
              <br />
              <select
                className="form-control"
                name="empresasDropdown"
                style={{ marginTop: -5 }}
              >
                <option data-count="1" value="Tema  1">
                  Tema 1
                </option>
                <option data-count="2" value="Tema  2">
                  Tema 2
                </option>
                <option data-count="3" value="Tema  3">
                  Tema 3
                </option>
                <option data-count="4" value="Tema  4">
                  Tema 4
                </option>
                <option data-count="5" value="Tema  5">
                  Tema 5
                </option>
                <option data-count="6" value="Tema  6">
                  Tema 6
                </option>
                <option data-count="7" value="Tema  7">
                  Tema 7
                </option>
                <option data-count="8" value="Tema  8">
                  Tema 8
                </option>
                <option data-count="9" value="Tema  9">
                  Tema 9
                </option>
                <option data-count="10" value="Tema  10">
                  Tema 10
                </option>
                <option data-count="11" value="Tema  11">
                  Tema 11
                </option>
              </select>
            </div>
          </div>
          <div
            className="col-sm-12"
            style={{ justifyContent: "center", marginTop: 20 }}
          >
            <Multiselect
              options={options}
              displayValue="alunos"
              placeholder="Atribua os alunos"
            />
          </div>

          <a href="/">
            <div style={{ textAlign: "center" }}>
              <ButtonSubmit style={{ marginTop: 20 }}>
                <b>Cadastrar</b>
              </ButtonSubmit>
            </div>
          </a>
        </form>
      </div>
    </>
  );
}

export default RegistarPBL;