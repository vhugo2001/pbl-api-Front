import * as Yup from "yup";

export default Yup.object().shape({
  titulo: Yup.string()
     .required("* Campo Nome é obrigatório")
     .nullable(),
 })