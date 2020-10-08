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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add </Link>
        </li>
        <li>
          <Link to="/">Delete</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
