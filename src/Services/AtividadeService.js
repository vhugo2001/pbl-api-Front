import http from "./httpCommon";

const URL_ATV = "/atividades";

const listarTodos = () => {
  return http.get(URL_ATV);
};

const listarID = (id) => {
  return http.get(URL_ATV + `/${id}`);
};

const listarIdDisciplina = (id) => {
  return http.get(URL_ATV +  `/disciplina/${id}`);
};

const incluir = (data) => {
  return http.post(URL_ATV, data);
};

const atualizar = (id, data) => {
  return http.put(URL_ATV + `/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_ATV + `/${id}`);
};

export default {
  listarTodos,
  incluir,
  atualizar,
  deletar,
  listarID,
  listarIdDisciplina,
};
