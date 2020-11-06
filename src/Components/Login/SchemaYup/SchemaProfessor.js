import * as Yup from "yup";

export default Yup.object().shape({
   nome: Yup.string()
      .required("Preenchimento obrigatório.")
      .min(2, 'Mínimo de 2 caracteres.')
      .max(100, 'Máximo de 100 caracteres.'),
   matricula: Yup.string()
      .required("Preenchimento obrigatório.")
      .min(7, "Mínimo de 7 caracteres.")
      .max(7, "Máximo de 7 caracteres."),
   email: Yup.string()
      .email("Digite um e-mail válido.")
      .required("Preenchimento obrigatório."),
   senha: Yup.string()
      .required("Preenchimento obrigatório."),
   senhaConfirmacao: Yup.string()
      .required("Preenchimento obrigatório."),
});