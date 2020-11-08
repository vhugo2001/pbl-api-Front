import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarDataProfessor = [
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
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdIcons.MdPieChart />,
    cName: "nav-text",
  },
  {
    title: "Consultar Alunos",
    path: "/admin/alunos",
    icon: <MdIcons.MdPeople />,
    cName: "nav-text",
  },
  {
    title: "Manter Disciplina",
    path: "/admin/manter-disciplina",
    icon: <FaIcons.FaListUl  />,
    cName: "nav-text",
  },

  {
    title: "Manter Tema",
    path: "/admin/manter-tema",
    icon: <MdIcons.MdCreateNewFolder/>,
    cName: "nav-text",
  },
  {
    title: "Agenda",
    path: "/admin/calendario",
    icon: <MdIcons.MdPermContactCalendar />,
    cName: "nav-text",
  },
  {
    title: "Manter Contato",
    path: "/admin/manter-contato",
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


export const SidebarDataAluno = [
  {
    title: "Atividades",
    path: "/aluno/atividade",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Manter Tarefa",
    path: "/admin/manter-tarefa",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Agenda",
    path: "/admin/calendario",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },


];

export const SidebarDataEmpresa = [
  {
    title: "Manter Problema",
    path: "/admin/manter-problema",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Agenda",
    path: "/admin/calendario",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];