import http from "./httpCommon";

const URL_DISCIPLINA = "/disciplina";

const listarTodos = () => {
  return http.get(URL_DISCIPLINA);
};

const listarID = (id) => {
  return http.get(URL_DISCIPLINA`/${id}`);
};

const incluir = (data) => {
  return http.post(URL_DISCIPLINA, data);
};

const atualizar = (id, data) => {
  return http.put(URL_DISCIPLINA`/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_DISCIPLINA`/${id}`);
};

export default {
  listarTodos,
  incluir,
  atualizar,
  deletar,
  listarID,
};
