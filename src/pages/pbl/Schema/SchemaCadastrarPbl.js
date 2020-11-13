import * as Yup from "yup";

export default Yup.object().shape({
   temaPbl: Yup.string()
     .required("* Campo Tema PBL é obrigatório")
     .nullable(),
   dataInicio: Yup.date()
     .required("* Campo Data Início é obrigatório")
     .nullable(),
   dataConclusao: Yup.date()
     .required("* Campo Data Conclusão é obrigatório")
     .nullable()
     .when(
       "dataInicio",
       (started, yup) =>
         started &&
         yup.min(
           started,
           "* Data Conclusão não pode ser anterior à Data Inicio"
         )
     ),
   aluno: Yup.string().required("* Campo Aluno é obrigatório"),
   problema: Yup.string().required("* Campo problema é obrigatório"),
 })