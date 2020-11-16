import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { useField, useFormikContext } from "formik";

import { BsFillCaretDownFill } from "react-icons/bs";

// flex: 1;
// margin: 0;
// cursor: pointer;

const DropDownList = styled("div")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-weight: 500;
  font-size: 1rem;
`;


const Image = styled("div")`
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



const IconList = ({ lista }) => {
  const [options, setOptions] = useState();

  const nLista = lista.map((i) => {
    return { ...i, color: 'gray' };
  });

  useEffect(() => {
    setOptions(nLista);
  }, [lista]);

  const getIniciais = (i) => {
    var fields = i.split(" ");
    var value = "";

    if (fields.length > 1) {
      value = fields[0].substring(0, 1);
      value += fields[1].substring(0, 1);
    } else {
      value = fields[0].substring(0, 1);
    }

    return value;
  };

  return (
    <DropDownList>
      {options.map((option) => (
        <Image key={option.id} style={{ backgroundColor: option.color }}>
          {getIniciais(option.nome)}
        </Image>
      ))}
    </DropDownList>

  );
};

export default IconList;
