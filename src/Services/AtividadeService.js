import http from "./httpCommon";

const URL_ATIVIDADE = "/atividades";

const listarTodos = () => {
    return http.get(URL_ATIVIDADE);
};

const listarID = (id) => {
    return http.get(URL_ATIVIDADE`/${id}`);
};

const listarIdDisciplina = (id) => {
    return http.get(URL_ATIVIDADE + `/disciplina/${id}`);
};

const incluir = (data) => {
    return http.post(URL_ATIVIDADE, data);
};

const atualizar = (id, data) => {
    return http.put(URL_ATIVIDADE`/${id}`, data);
};

const deletar = (id) => {
    return http.delete(URL_ATIVIDADE`/${id}`);
};

export default {
    listarTodos,
    incluir,
    atualizar,
    deletar,
    listarID,
    listarIdDisciplina
};