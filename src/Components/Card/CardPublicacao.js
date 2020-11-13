import React from "react";

import Card from "react-bootstrap/Card";
import LogoUff from "../../assets/uff-logo.png";

const CardPublicacao = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={LogoUff} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <h6>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </h6>
      </Card.Body>
    </Card>
  );
};

export default CardPublicacao;
