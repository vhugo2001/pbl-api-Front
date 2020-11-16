import * as Yup from "yup";

export default Yup.object().shape({
   nome: Yup.string()
     .required("* Campo Nome é obrigatório")
     .nullable(),
   disciplinas: Yup.string()
     .required("* Campo Disciplina é obrigatório")
     .nullable(),
 })