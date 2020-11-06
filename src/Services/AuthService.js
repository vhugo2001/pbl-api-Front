import http from "./httpCommon";


const URL_AUT = "/pbl-api/auth";

const login = (data) => {
  return http.post(URL_AUT + "/signin", data);
};

const registrarAluno = (data) => {
    return http.post(URL_AUT + "/aluno/registrar", data);
};

const registrarEmpresa = (data) => {
  return http.post(URL_AUT + "/empresa/registrar", data);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

const logout = () => {
  localStorage.removeItem("user");
}

export default {
  registrarEmpresa,
  registrarAluno,
  getCurrentUser,
  login,
  logout
};
