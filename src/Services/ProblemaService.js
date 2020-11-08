import http from "./httpCommon";

const URL_PROBLEMA = "/problema";

const listarTodos = () => {
  return http.get(URL_PROBLEMA);
};

const listarID = (id) => {
  return http.get(URL_PROBLEMA + `/${id}`);
};

const incluir = (data) => {
  return http.post(URL_PROBLEMA, data);
};

const atualizar = (id, data) => {
  return http.put(URL_PROBLEMA + `/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_PROBLEMA + `/${id}`);
};

export default {
  listarTodos,
  incluir,
  atualizar,
  deletar,
  listarID,
};
