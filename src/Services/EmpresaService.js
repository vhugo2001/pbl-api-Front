import http from "./httpCommon";

const URL_EMPRESA = "/empresa";

const listarTodos = () => {
  return http.get(URL_EMPRESA);
};

const listarID = (id) => {
  return http.get(URL_EMPRESA + `/${id}`);
};

const listarTodosContatos = () => {
  return http.get(URL_EMPRESA + "/contato");
};

const listarContatoID = (id) => {
  return http.get(URL_EMPRESA + "/contato"`/${id}`);
};

const incluirContato = (data) => {
  return http.post(URL_EMPRESA + "/contato", data);
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
  listarID,
  incluir,
  atualizar,
  deletar,
  listarTodosContatos,
  listarContatoID,
  incluirContato,
};
