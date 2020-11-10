import * as Yup from "yup";

export default Yup.object().shape({
  nomeContato: Yup.string()
     .required("* Campo Nome é obrigatório")
     .nullable(),
     email: Yup.string()
     .required("* Campo Email é obrigatório")
     .nullable(),
     contato: Yup.string()
     .required("* Campo Contato é obrigatório")
     .nullable(),
     tipoContato: Yup.string()
     .required("* Campo Tipo Contato é obrigatório")
     .nullable(),
 })