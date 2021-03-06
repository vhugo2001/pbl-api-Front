import http from "./httpCommon";

const URL_TAREFA = "/tarefas";

const listarTodos = () => {
    return http.get(URL_TAREFA);
};

const listarID = (id) => {
    return http.get(URL_TAREFA + `/${id}`);
};

const incluir = (data) => {
    return http.post(URL_TAREFA, data);
};

const atualizar = (idAtividade, idTarefa, data) => {
    return http.put(URL_TAREFA + `/${idAtividade}/${idTarefa}`, data);
};

const deletar = (idAtividade, idTarefa) => {
    return http.delete(URL_TAREFA + `/${idAtividade}/${idTarefa}`);
};

const incluirTarefaAtiv = (id, data) => {
    return http.post(`/atividade/${id}` + URL_TAREFA, data);
};

const atualizarTarefaAtiv = (id, data) => {
    return http.put(`/atividade/${id}` + URL_TAREFA, data);
};

const alterarConcluidoTarefa = (data) => {
    return http.post(URL_TAREFA + `/alterar-concluido`, data);
};

export default {
    listarTodos,
    incluir,
    atualizar,
    deletar,
    listarID,
    incluirTarefaAtiv,
    atualizarTarefaAtiv,
    alterarConcluidoTarefa

};
