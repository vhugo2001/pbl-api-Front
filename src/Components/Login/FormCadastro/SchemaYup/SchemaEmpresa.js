import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string().required("* Campo nome é obrigatório").nullable(),
  cnpj: Yup.string()
    .required("* Campo cnpj é obrigatório")
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "Digite um cnpj válido")
    .nullable(),
  email: Yup.string().required("* Campo email é obrigatório").nullable(),
  senha: Yup.string()
    .required("* Campo senha é obrigatório")
    .min(6, "Senha muito curta - deve ter no minimo 6 caracteres"),
  senhaC: Yup.string().oneOf(
    [Yup.ref("senha"), null],
    "Senhas precisam ser idênticas."
  ),
});
