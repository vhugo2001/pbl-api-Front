import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const RandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const DropDownContainer = styled("div")`
  flex: 1;
  margin: 0;
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

const DropDownListContainer = styled("div")`
  position: absolute;
  margin-top: 0.8em;
  width: inherit;
`;

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

const ListItem = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 4rem;
  list-style: none;
  padding: 0.5em;
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

const ListInfo = styled("div")`
  padding: 0.6em;
  display: flex;
  flex-direction: column;
`;

const Nome = styled("span")`
  font-weight: 500;
  font-size: 1.1rem;
  color: #4d4d4d;
`;

const Email = styled("span")`
  margin-top: -3px;
  color: #888888;
`;

const Selected = styled("div")`
  display: flex;
  flex-direction: row;
  margin-right: 0.2rem;
  background: #ebebeb;
  color: #383838;
  padding: 0 0.5rem;
  font-weight: 550;
`;

const Remove = styled("div")`
  margin-left: 0.5rem;
  justify-content: center;
`;

const DefaultDropDownList = ({ lista, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState([]);
  const [options, setOptions] = useState();
  const searchInput = useRef(null);

  const nLista = lista.map((i) => {
    return { ...i, color: RandomColor() };
  });

  useEffect(() => {
    searchInput.current.focus();
    setOptions(nLista);
  }, [lista]);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onRemoveClicked = (id) => (event) => {
    event.stopPropagation();

    setSelectedOption(selectedOption.filter((f) => f.id !== id));
    onSelect(alunoSelecionado.filter((f) => f.id !== id));
    setAlunoSelecionado(alunoSelecionado.filter((f) => f.id !== id));
  };

  const onOptionClicked = (option) => () => {
    if (alunoSelecionado.filter((f) => f.id === option.id).length > 0)
      return;

    setAlunoSelecionado((alunoSelecionado) => [
      ...alunoSelecionado,
      { id: option.id },
    ]);
    //console.log(alunoSelecionado);
    setSelectedOption([...selectedOption, option]);

    setIsOpen(false);
    setOptions(nLista);
  };

  useEffect(() => {
    onSelect(alunoSelecionado);
  }, [alunoSelecionado]);

  const handleOnSearchChange = (e) => {
    if (e.target.value === "") {
      setOptions(nLista);
    }

    setOptions(
      nLista.filter((o) =>
        o.nome.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  //TODO - precisa tratar a questão do BLUR do dropdown
  const handlewBlur = (e) => {
    //setIsOpen(false);
    // e.target.value = "";
    //setOptions(nLista);
  };

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
    <DropDownContainer ref={searchInput}>
      <DropDownHeader onClick={toggling}>
        {selectedOption.map((s) => (
          <Selected style={{ zIndex: 1 }} key={s.id}>
            {s.nome}
            <Remove key={s.id} onClick={onRemoveClicked(s.id)}>
              <FontAwesomeIcon
                style={{ color: "#ff7a7a" }}
                icon={faWindowClose}
              />
            </Remove>
          </Selected>
        ))}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <Search
              onBlur={(e) => {
                handlewBlur(e);
              }}
              onChange={handleOnSearchChange}
              placeholder="Pesquisar..."
            />
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option.id}>
                <Image style={{ backgroundColor: option.color }}>
                  {getIniciais(option.nome)}
                </Image>
                <ListInfo>
                  <Nome>{option.nome}</Nome>
                  <Email>{option.usuario.email}</Email>
                </ListInfo>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default DefaultDropDownList;
