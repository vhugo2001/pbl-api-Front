import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;
  border: 0;
  border-radius: 0.3167rem;
  box-shadow: 0 9px 23px rgba(0, 0, 0, 0.09), 0 5px 5px rgba(0, 0, 0, 0.06) !important;
  overflow: hidden;
  margin-top: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  width: 100%;
`;

export const Group = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
`;

export const Breakrow = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Title = styled.label`
  font-family: Montserrat, sans-serif !important;
  font-size: 16px;
  font-weight: 500;
  color: #72848c;
`;

export const InputText = styled.input`
  width: 100%;

  font-size: 1rem;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  -webkit-box-shadow: 0 1px 0 0 #d2d2d2;
  box-shadow: 0 1px 0 0 #d2d2d2;
  &:focus {
    border: 1px solid #8ebfed !important;
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }
    `}
`;

export const InputDate = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  -webkit-box-shadow: 0 1px 0 0 #d2d2d2;
  box-shadow: 0 1px 0 0 #d2d2d2;
  &:focus {
    border: 1px solid #8ebfed !important;
    outline: none;
  }
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  height: 150px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  -webkit-box-shadow: 0 1px 0 0 #d2d2d2;
  box-shadow: 0 1px 0 0 #d2d2d2;
  &:focus {
    border: 1px solid #8ebfed !important;
    outline: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: 100vh;
  max-height: 350px;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 50px 0 10px;
`;

export const Submit = styled.button`
  background-color: #07a7e3;
  color: white;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
  border-radius: 10px;
  padding: 15px 32px;
  display: inline-block;
`;

export const Delete = styled.button`
  background-color: #FF0000;
  color: white;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
  border-radius: 10px;
  padding: 15px 32px;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  top: 0;
`;


export const StyledInlineErrorMessage = styled.div`
  color: rgb(120, 27, 0);
  white-space: pre-line;
`;
