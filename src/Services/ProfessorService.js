import http from "./httpCommon";

const URL_PBL = "/professor";

const listarTodos = () => {
  return http.get(URL_PBL);
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

const atualizarAtivo = (id, data) => {
  return http.put(URL_PBL + `/altera-status-ativo/${id}`, data);
};

const deletar = (id) => {
  return http.delete(URL_PBL + `/${id}`);
};

export default {
  listarTodos,
  incluir,
  atualizar,
  deletar,
  listarID,
  atualizarAtivo,
};
