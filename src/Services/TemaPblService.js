import http from "./httpCommon";

const URL_TEMA = "/temaPbl";

const listarTodos = () => {
  return http.get(URL_TEMA);
};

const listarIDDisciplina = (id) => {
  return http.get(URL_TEMA + `/disciplina/${id}`);
};

const listarID = (id) => {
  return http.get(URL_TEMA + `/${id}`);
};

const incluir = (data) => {
  return http.post(URL_TEMA, data);
};

const atualizar = (id, data) => {
  return http.put(URL_TEMA + `/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_TEMA + `/${id}`);
};

export default {
  listarTodos,
  listarIDDisciplina,
  incluir,
  atualizar,
  deletar,
  listarID,
};
