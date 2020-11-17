import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { useField, useFormikContext } from "formik";

import { BsFillCaretDownFill } from "react-icons/bs";

// flex: 1;
// margin: 0;
// cursor: pointer;

const Icons = styled("div")`
  padding: 0;
 
   display: flex;
  flex-wrap: wrap;
`;


const Image = styled("div")`
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
  console.log(lista)
  const [options, setOptions] = useState();

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
    <Icons>
      {lista.map((option) => (
        <Image key={option.id} style={{ backgroundColor: '#c7c7c7', cursor: 'pointer' }}>
          {getIniciais(option.nome)}
        </Image>
      ))}
    </Icons>

  );
};

export default IconList;
