import React from "react";
import FormularioPublicacao from '../../Components/InputPublicacao';
import CardPublicacao from "../../Components/Card/CardPublicacao.js";
import {
  Container,
  TopContainer,
  CardsContainer,
  TopCardsContainer,
  BottomCardsContainer,
} from "./styles";

const Feed = () => {
  return (
    <Container>
      <TopContainer>
        <FormularioPublicacao/>
        <h1>PBL</h1>
        <h3>
          Bem vindo ao sistema oficial de administração e organização de PBLs
        </h3>
      </TopContainer>
      <CardsContainer>
        <TopCardsContainer>
          <CardPublicacao />
          <CardPublicacao />
        </TopCardsContainer>
        <BottomCardsContainer>
          <CardPublicacao />
          <CardPublicacao />
        </BottomCardsContainer>
      </CardsContainer>
    </Container>
  );
};

export default Feed;
