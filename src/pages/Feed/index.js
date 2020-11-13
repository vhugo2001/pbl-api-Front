import React from "react";

import Card from "react-bootstrap/Card";
import LogoUff from "../../assets/uff-logo.png";
import ImgPBL from "../../assets/PBL.png";
import LogoPBL from "../../assets/logopblcentro.png";
// import CardPublicacao from "../../Components/Card/CardPublicacao.js";
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
        <h2 style={{ textAlign: "justify" }}>
          Bem vindo ao sistema oficial de administração e organização de PBLs da
          UFF
        </h2>
      </TopContainer>
      <CardsContainer>
        <TopCardsContainer>
          <Card style={{ width: "20rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src={ImgPBL}
              style={{ width: "100%", height: "auto" }}
            />
            <Card.Body>
              <Card.Title>O PBL</Card.Title>
              <h6 style={{ textAlign: "justify" }}>
                Problem Based Learning (ou Aprendizagem Baseada em Problemas) é
                uma metodologia de aprendizado que estimula a pró-atividade e o
                aprimoramento pessoal em um grupo acadêmico por meio de
                discussões profundas de casos interdisciplinares.
              </h6>
              <a
                target="_blank"
                href="https://pt.wikipedia.org/wiki/Aprendizagem_baseada_em_problemas"
              >
                Saiba mais
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src={LogoUff}
              style={{ width: "100%", height: "auto" }}
            />
            <Card.Body>
              <Card.Title>A Universidade</Card.Title>
              <h6 style={{ textAlign: "justify" }}>
                A Universidade Federal Fluminense (UFF) é uma Instituição
                pública de Ensino do Estado do Rio de Janeiro criada em 1960 que
                tem como missão promover a produção e difusão do conhecimento
                científico, tecnológico, artístico e cultural.
              </h6>
              <a target="_blank" href="http://www.uff.br/">
                Saiba mais
              </a>
            </Card.Body>
          </Card>
        </TopCardsContainer>
        <BottomCardsContainer>
          <Card style={{ width: "51rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src={LogoPBL}
              style={{ width: "35%", height: "auto", alignSelf: "center" }}
            />
            <Card.Body>
              <Card.Title>O Sistema</Card.Title>
              <h6 style={{ textAlign: "justify" }}>
                Ao acessar o sistema, um usuário visualiza uma tela de boas
                vindas com acesso à publicações atualizadas e links para páginas
                de conteúdos relacionados. O sistema permite que um professor
                usuário cadastrado possa inserir um novo PBL, associando-o a uma
                disciplina e a uma lista de atividades que serão desenvolvidadas
                pelos os alunos como requisitos de aprovação. O sistema não
                permite que um PBL criado, assim como as atividades relacionadas
                a ele, seja excluídas por outro usuário. Um professor poderá
                ainda inserir uma lista de problemas fictícios caso uma empresa
                não tenha cadastrado problemas reais. Aos alunos cadastrados, o
                sistema permite cadastrar e autogerenciar tarefas a serem
                realizadas durante o PBL. As empresas interessadas podem
                cadastrar-se no sistema, obtendo permissões de acesso para
                registrar problemas que serão vinculados aos PBLs.
              </h6>
            </Card.Body>
          </Card>
        </BottomCardsContainer>
      </CardsContainer>
    </Container>
  );
};

export default Feed;
