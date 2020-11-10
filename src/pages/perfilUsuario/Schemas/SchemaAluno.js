import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string()
    .required("* Campo Nome é obrigatório")
    .nullable(),
  email: Yup.string()
    .required("* Campo E-mail é obrigatório")
    .nullable(),
  matricula: Yup.string()
    .required("* Campo Matricula é obrigatório")
    .nullable(),
})