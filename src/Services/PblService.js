import http from "./httpCommon";

const URL_PBL = "/categoria";

const listarTodos = () => {
  return http.get(URL_PBL);
};

const listarID = (id) => {
  return http.get(URL_PBL`/${id}`);
};

const incluir = (data) => {
  return http.post(URL_PBL, data);
};

const atualizar = (id, data) => {
  return http.put(URL_PBL`/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_PBL`/${id}`);
};

export default {
  listarTodos,
  incluir,
  atualizar,
  deletar,
  listarID,
};
