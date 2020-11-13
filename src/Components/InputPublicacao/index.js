import React from 'react';
import {useFormik, validateYupSchema} from 'formik';
import * as FaIcons from "react-icons/fa";
import { toast } from "react-toastify";
import * as Yup from 'yup';

import {Container, ButtonArea} from './style';

const InputPublicacao = () =>{

    const publicacaoSchema = Yup.object().shape({
        titulo: Yup.string()
        .required("È necessário inserir um titulo."),
        texto: Yup.string()
        .required("Publicação deve possuir um corpo.")
    });

    const formik =  useFormik({        
        initialValues: {
            titulo: '',
            texto: ''          
        },                           
        onSubmit: values => {            
          alert(JSON.stringify(values, null, 2));
          toast.success("Publicando Conteúdo...");                 
        },
      });

      return (
        <Container>            
            <form onSubmit={formik.handleSubmit}>          
                <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    placeholder="Titulo..."
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />          
                <textarea rows="4"            
                    name="texto"
                    type="textarea"
                    placeholder="Digite aqui..."
                    onChange={formik.handleChange}
                    value={formik.values.email}
                /> 
                <ButtonArea>           
                    <button type="submit">
                        <h6>Publicar</h6>
                    </button>                   
                    <FaIcons.FaFileUpload onClick={() => alert("Upload de Arquivo")} className="icon"/>                                    
                    <FaIcons.FaImage onClick={() => alert("Upload de Imagem")} className="icon"/> 
                    <FaIcons.FaLink onClick={() => alert("Enviar Link")} className="icon"/>                                                   
                    <FaIcons.FaTrashAlt onClick={() => alert("Descartar publicação")} className="icon"/>                                                          
                </ButtonArea>                              
            </form>
        </Container>
      );
}

export default InputPublicacao;