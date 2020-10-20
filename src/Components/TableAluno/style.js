import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
border-radius: 0.4167rem;
box-shadow: 0 9px 23px rgba(0, 0, 0, 0.09), 0 5px 5px rgba(0, 0, 0, 0.06) !important;
width:100%;
overflow-x:hidden;
`;
export const Title = styled.label`
  font-family: Montserrat, sans-serif !important;
  font-size: 18px;
  font-weight: 500;
  color: #72848c;
  margin-top: 30px;
  margin-left: 10px;
`;

export const Span = styled.span`
  font-family: Montserrat, sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin: 0;
  white-space:nowrap;
  
`;

export const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const Table = styled.table`
box-shadow: 0 9px 23px rgba(0, 0, 0, 0.09), 0 5px 5px rgba(0, 0, 0, 0.06) !important;
margin: 0px 10px 10px 10px;
width:90%;
justify-content:center;
border-collapse: collapse;
border-spacing: 0;
min-width:890px;

`;

export const Thead = styled.thead`
line-height:50px;
border: 1px solid black;

`;

export const Tbody = styled.tbody`
line-height:70px;
border: 1px solid black;
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`

`;

export const Image = styled("div")`
  border-radius: 50%;

  width: 3.5rem;
  height: 3.5rem;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  margin: 50px 0 10px;
`;

export const Ativar = styled.button`
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
  margin-right:50px;
`;

export const Desativar = styled.button`
  background-color: #cc0000;
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
 margin-left:50px;
`;