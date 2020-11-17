import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
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
        break;
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
        <div className="logo-spacer py-2">
          <img
            alt="Logo-UFF"
            className="logoUff2"
            src={require("../../../assets/images/logo-pbl.svg")}
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
              <Link to="/admin/perfil-usuario" className="link-menu">
                <NavbarDropdown.Item className="example1-dropdown-menu-item">
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text"><FaIcons.FaUserCircle /> Meu Perfil</div>
                </NavbarDropdown.Item>
              </Link>
              <NavbarDropdown.Item className="example1-dropdown-menu-item">
                <a
                  href="/admin/"
                  className="link-menu"
                  onClick={ServiceAuth.logout}
                >
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text"><FaIcons.FaSignOutAlt /> Sair</div>
                </a>
              </NavbarDropdown.Item>
            </NavbarDropdown.CSSTransitionMenu>

            <NavbarDropdown.CSSTransitionMenu
              className="example1-dropdown-menu"
              classNames="example1-dropdown-menu"
              timeout={200}
            >
              <Link to="/admin/perfil-usuario" className="link-menu">
                <NavbarDropdown.Item className="example1-dropdown-menu-item">
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text"><FaIcons.FaUserCircle /> Meu Perfil</div>
                </NavbarDropdown.Item>
              </Link>
              <a
                href="/admin/"
                className="link-menu"
                onClick={ServiceAuth.logout}
              >
                <NavbarDropdown.Item className="example1-dropdown-menu-item">
                  <div className="example1-dropdown-menu-item__spacer" />
                  <div className="example1-dropdown-menu-item__text"><FaIcons.FaSignOutAlt /> Sair</div>
                </NavbarDropdown.Item>
              </a>
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
          <ul className="sidebar-menu">
            <li className="sidebar-nav-title">Menu</li>
            {data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link className={item.cLinkName} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="text-center sidebar-footer">
            <svg viewBox="0 0 1200.41 605.56">
              <g>
                <path class="fil0" d="M600.2 147.59c0,-59.89 98.4,-66.46 98.4,4.92l0 49.2 100.85 0 0 49.19 -199.25 0 0 -103.31zm-100.85 -7.38l0 110.69 -152.51 0 0 206.63c0,55.27 -98.4,70.74 -98.4,-14.76l0 -194.33 -248.44 0 0 103.32 147.59 0c0,95.54 -14.23,186.25 81.94,237.84 46.64,25.01 114.84,20.46 158.15,-12.51 19.8,-15.08 38.96,-37.06 48.48,-59.76 20.62,-49.17 13.99,-105.92 13.99,-165.57l49.2 0 0 243.52c0,5.67 1.71,7.38 7.38,7.38l86.09 0c5.67,0 7.38,-1.71 7.38,-7.38l0 -243.52 199.25 0 0 248.44 100.85 0 0 -248.44 300.11 0 0 -100.86 -300.11 0 0 -100.85c0,-64.52 98.4,-64.52 98.4,0l0 51.66 100.85 0c0,-62.9 6.21,-109.36 -44.82,-159.35 -41.01,-40.17 -108.72,-54.99 -164.27,-30.06 -7.41,3.33 -15.47,7.25 -22.68,11.75 -29.34,18.28 -65.87,64.74 -65.87,106.32 -8.7,-6.37 -2.24,1.94 -5.29,-9.46 -4.11,-15.36 -2.76,-19.05 -12.72,-38.94 -21.32,-42.55 -73.72,-81.97 -119.74,-81.97 -50.74,0 -82.26,4.83 -122.4,44.87 -19.82,19.76 -42.41,56.89 -42.41,95.34z" />
              </g>
            </svg>
          </div>
      </div>
      <div className="page-container">
        <Routes />
      </div>
    </div>
    </>
  );
}

export default Navbar;
