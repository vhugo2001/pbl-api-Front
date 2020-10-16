import React, { useState } from "react";
import "./AppBar.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  Collapse,
  Navbar,
  Image,
  Row,
  Col,
  Dropdown,
  Container,
} from "react-bootstrap";
import Routes from "../../../routes/routes";
import { Link } from "react-router-dom";

const AppBar = (props) => {
  // const [openPBL, setOpenPBL] = useState(false);
  // const [openAluno, setOpenAluno] = useState(false);
  // const [openEmpresa, setOpenEmpresa] = useState(false);

  return (
    <Row className="BarMedidas RowPrincipal">
      <Col xs={5} sm={4} md={3} lg={2} xl={2} className="BarMedidas ">
        <Navbar className="flex-column sidenavigation" expand="lg">
          <Navbar.Brand>
            <Image
              className="logoUff"
              src={require("../../Images/Logo_UFF_2.png")}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" > */}

          <Nav className="flex-column SideNav mb-auto">
            <Nav.Item className="MenusLaterais">PBL</Nav.Item>
            <Nav.Item className="SubMenusLaterais">
              <Image
                className="iconesSubMenu"
                src={require("../../Images/paperPlane.png")}
              />
              <Link to="/teste" className="OpcoesLaterais">
                Cadastrar PBL
              </Link>
            </Nav.Item>
            <Nav.Item className="SubMenusLaterais">
              <Image
                className="iconesSubMenu"
                src={require("../../Images/paperPlane.png")}
              />
              <Link to="/consult" className="OpcoesLaterais">
                Consultar PBL
              </Link>
            </Nav.Item>

            <Nav.Item className="MenusLaterais">Aluno</Nav.Item>
            <Nav.Item className="SubMenusLaterais">
              <Image
                className="iconesSubMenu"
                src={require("../../Images/paperPlane.png")}
              />
              <Link to="/teste" className="OpcoesLaterais">
                Cadastrar Aluno
              </Link>
            </Nav.Item>
            <Nav.Item className="SubMenusLaterais">
              <Image
                className="iconesSubMenu"
                src={require("../../Images/paperPlane.png")}
              />
              <Link to="/alunos" className="OpcoesLaterais">
                Consultar Aluno
              </Link>
            </Nav.Item>

            <Nav.Item className="MenusLaterais">Teste</Nav.Item>
            <Nav.Item className="SubMenusLaterais">
              <Image
                className="iconesSubMenu"
                src={require("../../Images/paperPlane.png")}
              />
              <Link to="/cadastro" className="OpcoesLaterais">
                Cadastrar Empresa
              </Link>
            </Nav.Item>
            <Nav.Item className="SubMenusLaterais">
              <Image
                className="iconesSubMenu"
                src={require("../../Images/paperPlane.png")}
              />
              <Link to="/" className="OpcoesLaterais">
                Consultar Empresa
              </Link>
            </Nav.Item>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
      </Col>

      <Col xs={7} sm={8} md={9} lg={10} xl={10} className="BarMedidas">
        <Navbar className="topbar" expand="sm" variant="dark">
          <Navbar.Brand>
            <Nav.Item className="textos-navs">Menu</Nav.Item>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>

          <Dropdown>
            <div
              class="dropdown-toggle iconesDrop"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Image
                className="icones"
                src={require("../../Images/calendar.png")}
              />
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="/teste" className="OpcoesLaterais dropdown-item">
                Teste
              </Link>
              <Link to="/login" className="OpcoesLaterais dropdown-item">
                Login
              </Link>
              <Link to="/" className="OpcoesLaterais dropdown-item">
                Home
              </Link>
            </div>
          </Dropdown>

          <Dropdown>
            <div
              class="dropdown-toggle iconesDrop"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Image
                className="icones"
                src={require("../../Images/sino.png")}
              />
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="/teste" className="OpcoesLaterais dropdown-item">
                Teste
              </Link>
              <Link to="/login" className="OpcoesLaterais dropdown-item">
                Login
              </Link>
              <Link to="/" className="OpcoesLaterais dropdown-item">
                Home
              </Link>
            </div>
          </Dropdown>

          <Dropdown>
            <div
              class="dropdown-toggle iconesDrop"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              style={{ justifyContent: "flex-start" }}
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Nav.Link className="textos-navs">
                <label>Pessoa Logada</label>
              </Nav.Link>
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="OpcoesLaterais dropdown-item">
                Editar Perfil
              </Link>
              <Link
                onClick={() => alert("Deslogado")}
                className="OpcoesLaterais dropdown-item"
              >
                Sair
              </Link>
            </div>
          </Dropdown>

          <Image
            className="iconeLogin"
            src={require("../../Images/loginIcon.png")}
          />
        </Navbar>

        <div>
          {/* <div className='CardTitulo'>Iniciar PBL</div>
                    <div className='CardPrincipal' > */}
          <Routes />
          {/* </div> */}
        </div>
      </Col>
    </Row>
  );
};

export default AppBar;
