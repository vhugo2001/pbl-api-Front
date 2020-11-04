import http from "./httpCommon";

const URL_PBL = "/temaPbl";

const listarTodos = () => {
  return http.get(URL_PBL);
};

const listarIDDisciplina = (id) => {
  return http.get(URL_PBL + `/disciplina/${id}`);
};

const listarID = (id) => {
  return http.get(URL_PBL + `/${id}`);
};

const incluir = (data) => {
  return http.post(URL_PBL, data);
};

const atualizar = (id, data) => {
  return http.put(URL_PBL + `/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_PBL + `/${id}`);
};

export default {
  listarTodos,
  listarIDDisciplina,
  incluir,
  atualizar,
  deletar,
  listarID,
};
