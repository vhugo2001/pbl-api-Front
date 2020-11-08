import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string()
    .required("* Campo nome é obrigatório")
    .nullable(),
  cnpj: Yup.string()
    .required("* Campo cnpj é obrigatório")
    .matches(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
      "Digite um cnpj válido"
    )
    .nullable(),
  email: Yup.string()
    .required("* Campo email é obrigatório")
    .nullable(),
  endereco: Yup.string().nullable(),
  contato: Yup.string().nullable(),
})