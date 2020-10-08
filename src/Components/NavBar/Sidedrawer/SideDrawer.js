import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side_drawer";

  if (props.show) {
    drawerClasses = "side_drawer open";
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
