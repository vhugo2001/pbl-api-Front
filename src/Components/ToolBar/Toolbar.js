import React from "react";
import { Link } from "react-router-dom";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

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
              className="umbreon_logo"
              alt="Toolbar"
              src={require("../pngegg.png")}
            />
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add </Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
