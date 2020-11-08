import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "PBL",
    path: "/admin/pbl",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Iniciar PBL",
    path: "/admin/iniciar-pbl",
    icon: <MdIcons.MdCreateNewFolder />,
    cName: "nav-text",
  },
  {
    title: "Professor",
    path: "/admin/dashboard",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Consultar Alunos",
    path: "/admin/alunos",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Manter Disciplina",
    path: "/admin/manter-disciplina",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Manter Tema",
    path: "/admin/manter-tema",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Manter Problema",
    path: "/admin/manter-problema",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Teste Calendario",
    path: "/admin/calendario",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Manter Tarefa",
    path: "/admin/manter-tarefa",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

];
