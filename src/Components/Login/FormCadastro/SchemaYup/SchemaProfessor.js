import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string().required("* Campo Nome é obrigatório"),
  email: Yup.string()
    .required("* Campo E-mail é obrigatório")
    .email("Digite um e-mail válido.")
    .max(50, "Máximo de 50 caracteres."),
  senha: Yup.string()
    .required("* Campo Senha é obrigatório")
    .min(6, "Mínimo de 6 caracteres.")
    .max(50, "Máximo de 50 caracteres."),
  senhaC: Yup.string().oneOf(
    [Yup.ref("senha"), null],
    "Senhas precisam ser idênticas."
  ),
});
