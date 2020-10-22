import http from "./httpCommon";

const URL_USUARIO = "/usuario";

const listarTodos = () => {
    return http.get(URL_USUARIO);
};

const listarID = (id) => {
    return http.get(URL_USUARIO + `/${id}`);
};

const incluir = (data) => {
    return http.post(URL_USUARIO, data);
};

const atualizar = (id, data) => {
    return http.put(URL_USUARIO + `/${id}`, data);
};

const alterarStatusAtivo = (id, data) => {
    return http.put(URL_USUARIO + `/altera-status-ativo/${id}`, data);
};

const alterarStatusExcluido = (id, data) => {
    return http.put(URL_USUARIO + `/altera-status-excluido/${id}`, data);
};

const deletar = (id) => {
    return http.delete(URL_USUARIO + `/${id}`);
};

export default {
    alterarStatusAtivo,
    alterarStatusExcluido,
};