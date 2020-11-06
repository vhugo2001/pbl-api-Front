import * as Yup from "yup";

export default Yup.object().shape({
   nome: Yup.string()
      .required("Preenchimento do nome obrigatório."),
   email: Yup.string()
      .required("Preenchimento do e-mail obrigatório.")
      .email("Digite um e-mail válido.")
      .max(50, 'Máximo de 50 caracteres.'),
   senha: Yup.string()
      .required("Preenchimento da senha obrigatório.")
      .min(6, 'Máximo de 6 caracteres.')
      .max(50, 'Máximo de 50 caracteres.'),
   senhaConfirmacao: Yup.string()
      .required("Preenchimento da confirmação de senha obrigatório.")
      .oneOf([Yup.ref('senha'), null], "Senhas incompatíveis.")
      .min(6, 'Máximo de 6 caracteres.')
      .max(50, 'Máximo de 50 caracteres.'),
});