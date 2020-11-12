import styled from "styled-components";

export const Container = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  h3 {
    text-align: center;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const TopCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 4rem;
`;

export const BottomCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin: 0;
`;
