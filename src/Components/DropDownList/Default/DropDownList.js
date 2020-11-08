import React, { useState, useEffect, useRef } from "react";
import { useField, useFormikContext } from "formik";
import { BsFillCaretDownFill } from "react-icons/bs";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  margin: 0;
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 0.4em;
  box-shadow: 0 1px 0 0 #d2d2d2;
  font-weight: 500;
  font-size: 1rem;
  color: #3faffa;
  background: #ffffff;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
`;

const DropDownHeaderContent = styled("div")`
  display: flex;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  margin-top: 0.8em;
  width: 15rem;
  z-index: 999;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-weight: 500;
  font-size: 1rem;
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 0.2em;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    background-color: #f1f1f1;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
`;

const Search = styled("input")`
  width: 100%;
  content: "";
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: inset 1px 2px 10px rgba(0, 0, 0, 0.1);
  text-indent: 10px;
  &:focus {
    border: 1px solid #8ebfed !important;
    outline: none;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #c0c0c0;
  }
`;

const DefaultDropDownList = ({ lista, onSelect, selected, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState(lista);
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
    setOptions(lista);
  }, [lista]);

  useEffect(() => {
    if(selected !== undefined ){
      setSelectedOption(selected.nome);
      console.log(selected)
      onSelect(selected);
     
    }else
    { 
      console.log("else: " + selected);
      onSelect("")
      setSelectedOption("");
    }

  }, [selected])

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (e) => () => {
    setSelectedOption(e.nome);
    onSelect(e);
    setFieldValue(field.name, e);
    setIsOpen(false);
    setOptions(lista);
  };

  const handleOnSearchChange = (e) => {
    if (e.target.value === "") {
      setOptions(lista);
    }

    setOptions(
      lista.filter((o) =>
        o.nome.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  //TODO - precisa tratar a questão do BLUR do dropdown
  const handlewBlur = (e) => {
    if (e.target.tagName === "INPUT") return;
  };

  return (
    <DropDownContainer
      ref={searchInput}
      onBlur={(e) => {
        handlewBlur(e);
      }}
    >
      <DropDownHeader
        style={{
          border:
            props.valid === false
              ? "1px solid rgb(191, 49, 12)"
              : "1px solid #d2d2d2",
        }}
        onClick={toggling}
      >
        <DropDownHeaderContent>{selectedOption || ""}</DropDownHeaderContent>
        <BsFillCaretDownFill style={{ color: "#8d8d8d" }} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <Search
              onChange={handleOnSearchChange}
              placeholder="Pesquisar..."
            />
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option.id}>
                {option.nome}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default DefaultDropDownList;
