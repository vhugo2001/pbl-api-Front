import React from "react";
import { Link } from "react-router-dom";

import "./Toolbar.css";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <a href="/">
            <img
              className="uff_logo"
              alt="Toolbar"
              src={require("../../Images/Logo_UFF.png")}
            />
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <Link to="/">O que é o PBL</Link>
            </li>
            <li>
              <Link to="/consult">Consultar PBL</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
