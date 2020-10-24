import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import Routes from "../../../routes/routes";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbars">
        <div className="toggle-holder">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className="logo-spacer">
          <img
            alt="Logo-UFF"
            className="logoUff2"
            src={require("../../Images/Logo_UFF_2.png")}
          />
        </div>
        <div style={{ flex: 1 }}></div>
        <Link to="/dashboard" className="calendar-button">
          <IoIcons.IoMdCalendar />
        </Link>
        <Link to="/" className="notification-button">
          <MdIcons.MdNotificationsNone />
        </Link>
        <Link to="/perfil-usuario" className="profile-button">
          <CgIcons.CgProfile />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="navbar-logo">
            <img
              className="logoUff"
              alt="Logo-UFF"
              src={require("../../Images/Logo_UFF_2.png")}
            />
          </li>
          <IconContext.Provider value={{ color: "#FFF" }}>
            <div style={{ height: "50px" }}></div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </IconContext.Provider>
        </ul>
      </nav>
      <div style={{ display: "flex" }}>
        <div className="sidebar-main">
          <div style={{ height: "50px" }}></div>
          <h3 className="menu-title">Menu</h3>
          <div style={{ height: "20px" }}></div>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </div>
        <div className="page-container">
          

          <Routes />
        </div>
      </div>
    </>
  );
}

export default Navbar;
