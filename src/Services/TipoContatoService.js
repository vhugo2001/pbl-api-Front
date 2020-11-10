import http from "./httpCommon";

const URL_TIPO_CONTATO = "/tipoContato";

const listarTodos = () => {
  return http.get(URL_TIPO_CONTATO);
};


export default {
  listarTodos
};
