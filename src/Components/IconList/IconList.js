import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Initials = styled("span")`
  display: block;
  font-size: 12px;
  font-weight: 700;
  height: 32px;
  left: 0;
  line-height: 32px;
  overflow: hidden;
  text-align: center;
  top: 0;
  width: 100%;
`;

const RoundedContainer = styled("div")`
  border-radius: 50%;
  margin-right: 2px;
  margin-left: 2px;
  width: 1.5rem;
  height: 1.5rem;
  text-transform: uppercase;
  color: black;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconList = ({ lista }) => {
  console.log(lista);

  const getIniciais = (i) => {
    var fields = i.split(" ");
    var value = "";

    if (fields.length > 1) {
      value = fields[0].substring(0, 1);
      value += fields[1].substring(0, 1);
    } else {
      value = fields[0].substring(0, 1);
      value += fields[0].substring(1, 2);
    }

    return value;
  };
  return (
    <Container>
      {lista.map((option) => (
        <RoundedContainer
          key={option.id}
          style={{ backgroundColor: "#c7c7c7", cursor: "pointer" }}
        >
          <Initials title={option.nome}>{getIniciais(option.nome)}</Initials>
        </RoundedContainer>
      ))}
    </Container>
  );
};

export default IconList;
