import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "PBL",
    path: "/pbl",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Iniciar PBL",
    path: "/iniciar-pbl",
    icon: <MdIcons.MdCreateNewFolder />,
    cName: "nav-text",
  },
  {
    title: "Consultar PBL",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Consultar Alunos",
    path: "/alunos",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Cadastrar Disciplina",
    path: "/cadastrar-disciplina",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
 
];
