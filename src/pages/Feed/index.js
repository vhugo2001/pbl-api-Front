import React from "react";

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
