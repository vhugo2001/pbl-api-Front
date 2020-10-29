import React from "react";
import NavbarDropdown from "react-navbar-dropdown";
import * as IoIcons from "react-icons/io";
import "./style.css";

const index = () => {
  return (
    <div className="container-filter">
      <div className="item">
        <NavbarDropdown className="drop-perfil">
          <NavbarDropdown.Toggle className="menu__item">
            <NavbarDropdown.Open>
              <div className="menu__item__label">
                <IoIcons.IoIosFunnel className="profile-button" />
                <label>Disciplina</label>
              </div>
            </NavbarDropdown.Open>
            <NavbarDropdown.Close>
            <div className="menu__item__label">
                <IoIcons.IoIosFunnel className="profile-button" />
                <label>Disciplina</label>
              </div>
            </NavbarDropdown.Close>
          </NavbarDropdown.Toggle>

          <NavbarDropdown.CSSTransitionMenu
            className="example1-dropdown-menu"
            classNames="example1-dropdown-menu"
            timeout={200}
          >
            <NavbarDropdown.Item className="example1-dropdown-menu-item">
              <div className="example1-dropdown-menu-item__spacer" />
              <div className="example1-dropdown-menu-item__text">
                Meu Perfil
              </div>
            </NavbarDropdown.Item>
            <NavbarDropdown.Item className="example1-dropdown-menu-item">
              <div className="example1-dropdown-menu-item__spacer" />
              <div className="example1-dropdown-menu-item__text">Sair</div>
            </NavbarDropdown.Item>
          </NavbarDropdown.CSSTransitionMenu>
        </NavbarDropdown>
      </div>
    </div>
  );
};

export default index;
