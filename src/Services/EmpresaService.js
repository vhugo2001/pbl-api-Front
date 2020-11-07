import http from "./httpCommon";

const URL_EMPRESA = "/empresa";

const listarTodos = () => {
  return http.get(URL_EMPRESA);
};

const listarID = (id) => {
  return http.get(URL_EMPRESA + `/${id}`);
};

const incluir = (data) => {
  return http.post(URL_EMPRESA, data);
};

const atualizar = (id, data) => {
  return http.put(URL_EMPRESA + `/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_EMPRESA + `/${id}`);
};

export default {
  listarTodos,
  incluir,
  atualizar,
  deletar,
  listarID,
};
