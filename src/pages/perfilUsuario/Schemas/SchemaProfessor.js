import * as Yup from "yup";

export default Yup.object().shape({
   nome: Yup.string().required("* Campo nome é obrigatório"),
   email: Yup.string()
     .required("* Campo email é obrigatório")
     .nullable(),
 })