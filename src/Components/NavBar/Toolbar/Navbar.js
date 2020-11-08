import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  SidebarDataProfessor,
  SidebarDataAluno,
  SidebarDataEmpresa,
} from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import Routes from "../../../routes/routes";
import NavbarDropdown from "react-navbar-dropdown";
import ServiceAuth from "../../../Services/AuthService";
import { Role } from "../../../helpers/role";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState([]);

  const showSidebar = () => setSidebar(!sidebar);
  const currentUser = ServiceAuth.getCurrentUser();

  useEffect(() => {
    switch (currentUser.roles[0]) {
      case "ROLE_ALUNO":
        setData(SidebarDataAluno);
        break;
      case "ROLE_PROFESSOR":
        setData(SidebarDataProfessor);
        break;
      case "ROLE_EMPRESA":
        setData(SidebarDataEmpresa);
        break
    }
  });
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
        <div className="container-right">
          <Link to="/admin/dashboard" className="calendar-button">
            <IoIcons.IoMdCalendar />
          </Link>
          <Link to="/admin/" className="notification-button">
            <MdIcons.MdNotificationsNone />
          </Link>

          <NavbarDropdown className="drop-perfil">
            <NavbarDropdown.Toggle className="menu__item">
              <NavbarDropdown.Open>
                <CgIcons.CgProfile className="profile-button" />
              </NavbarDropdown.Open>
              <NavbarDropdown.Close>
                <CgIcons.CgProfile className="profile-button" />
              </NavbarDropdown.Close>
            </NavbarDropdown.Toggle>

            <NavbarDropdown.CSSTransitionMenu
              className="example1-dropdown-menu"
              classNames="example1-dropdown-menu"
              timeout={200}
            >
              <NavbarDropdown.Item className="example1-dropdown-menu-item">
                <Link to="/admin/perfil-usuario" className="link-menu">
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text">
                    Meu Perfil
                  </div>
                </Link>
              </NavbarDropdown.Item>
              <NavbarDropdown.Item className="example1-dropdown-menu-item">
                <a
                  href="/admin/"
                  className="link-menu"
                  onClick={ServiceAuth.logout}
                >
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text">Sair</div>
                </a>
              </NavbarDropdown.Item>
            </NavbarDropdown.CSSTransitionMenu>

            <NavbarDropdown.CSSTransitionMenu
              className="example1-dropdown-menu"
              classNames="example1-dropdown-menu"
              timeout={200}
            >
              <NavbarDropdown.Item className="example1-dropdown-menu-item">
                <Link to="/admin/perfil-usuario" className="link-menu">
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text">
                    Meu Perfil
                  </div>
                </Link>
              </NavbarDropdown.Item>
              <NavbarDropdown.Item className="example1-dropdown-menu-item">
                <a
                  href="/admin/"
                  className="link-menu"
                  onClick={ServiceAuth.logout}
                >
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text">Sair</div>
                </a>
              </NavbarDropdown.Item>
            </NavbarDropdown.CSSTransitionMenu>
          </NavbarDropdown>
        </div>
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
            {SidebarDataProfessor.map((item, index) => {
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

          {data.map((item, index) => {
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
