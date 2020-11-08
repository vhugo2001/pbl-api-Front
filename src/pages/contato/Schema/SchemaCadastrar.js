import * as Yup from "yup";

export default Yup.object().shape({
   descricao: Yup.string()
     .required("* Campo Descrição é obrigatório")
     .nullable(),
 })