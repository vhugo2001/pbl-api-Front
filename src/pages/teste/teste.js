import React from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const teste = () => {
  return (
    //Remover a div pai e atribur o padding 30px no componente Home!!!!!
    <div style={{ padding: "30px" }}>
      <Card>
        <Card.Form>
          <Card.Form.Group style={{ flex: 5 }}>
            <Card.Form.Title>Tema PBL</Card.Form.Title>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Card.Form.Group>

          <Card.Form.Group>
            <Card.Form.Title>Data Inicio</Card.Form.Title>
            <Card.Form.InputText />
          </Card.Form.Group>

          <Card.Form.Group>
            <Card.Form.Title>Data Conclusão</Card.Form.Title>
            <Card.Form.InputText />
          </Card.Form.Group>

          <Card.Form.BreakRow />

          <Card.Form.Group style={{ flex: 5 }}>
            <Card.Form.Title>Alunos</Card.Form.Title>
            <Card.Form.InputText />
          </Card.Form.Group>

          <Card.Form.Group>
            <Card.Form.Title>Empresa</Card.Form.Title>
            <Card.Form.InputText />
          </Card.Form.Group>

          <Card.Form.BreakRow />

          <Card.Form.Group>
            <Card.Form.Title>Titulo PBL</Card.Form.Title>
            <Card.Form.InputText />
          </Card.Form.Group>

          <Card.Form.BreakRow />

          <Card.Form.Group>
            <Card.Form.Title>Situação problema</Card.Form.Title>
            <Card.Form.InputTextArea />
          </Card.Form.Group>

          <Card.Form.GroupButton>
            <Card.Form.Submit>Salvar</Card.Form.Submit>
          </Card.Form.GroupButton>
        </Card.Form>
      </Card>
    </div>
  );
};
export default teste;
