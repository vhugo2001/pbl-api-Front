import React from "react";
import { Container, CardContainer, Breakrow } from "./styles";
import building from '../../../Components/Images/building.gif'

const dashboard = () => {
  return (
    <Container>
      <h2>Em construção...</h2>
      <img src={building} alt='building' />
    </Container>
  );
};

export default dashboard;
