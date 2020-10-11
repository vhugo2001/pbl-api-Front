import React from "react";
// import { Link } from "react-router-dom";
import "./Toolbar.css";
// import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Image, Navbar } from 'react-bootstrap'

const Toolbar = (props) => {
  return (
    // <header className="toolbar">
    //   <nav className="toolbar_navigation">
    //     <div className="toolbar_toggle_button">
    //       <DrawerToggleButton click={props.drawerClickHandler} />
    //     </div>
    //     <div className="toolbar_logo">
    //       <a href="/">
    //         <img
    //           className="uff_logo"
    //           alt="Toolbar"
    //           src={require("../../Images/Logo_UFF_2.png")}
    //         />
    //       </a>
    //     </div>
    //     <div className="spacer" />
    //     <div className="toolbar_navigation_items">
    //       <ul>
    //         <li>
    //           <Link to="/">O que é o PBL</Link>
    //         </li>
    //         <li>
    //           <Link to="/consult">Consultar PBL</Link>
    //         </li>
    //         <li>
    //           <Link to="/cadastro">Cadastro</Link>
    //         </li>
    //         <li>
    //           <Link to="/login">Login</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </header>

    // <Navbar className='main-navbar' expand="lg" variant="dark">
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Brand >
    //     <Image className="uff_logo" src={require("../../Images/Logo_UFF_2.png")} />
    //   </Navbar.Brand>
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className='ml-auto'>
    //       <Nav.Item  >
    //         <Nav.Link className='text-white' href="/">O que é PBL</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item >
    //         <Nav.Link className='text-white' href="/consult">Consultar PBL</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item >
    //         <Nav.Link className='text-white' href="/cadastro">Cadastro</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item >
    //         <Nav.Link className='text-white' href="/login">Login</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    <Navbar className='main-navbar' expand="lg" variant="dark">
      <Navbar.Brand>
        <Image className="uff_logo" src={require("../../Images/Logo_UFF_2.png")} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link className='textos-navs' href="/">O que é PBL</Nav.Link>
          <Nav.Link className='textos-navs' href="/consult">Consultar PBL</Nav.Link>
          <Nav.Link className='textos-navs' href="/cadastro">Cadastrar</Nav.Link>
          <Nav.Link className='textos-navs' href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Toolbar;
