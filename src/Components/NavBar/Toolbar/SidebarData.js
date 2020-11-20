import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SidebarDataProfessor = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <FiIcons.FiPieChart />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "PBL",
    path: "/admin/pbl",
    icon: <FiIcons.FiHexagon />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Iniciar PBL",
    path: "/admin/iniciar-pbl",
    icon: <MdIcons.MdCreateNewFolder />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Consultar Alunos",
    path: "/admin/alunos",
    icon: <FiIcons.FiUsers />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Manter Disciplina",
    path: "/admin/manter-disciplina",
    icon: <FaIcons.FaListUl />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },

  {
    title: "Manter Tema",
    path: "/admin/manter-tema",
    icon: <MdIcons.MdCreateNewFolder />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Agenda",
    path: "/admin/calendario",
    icon: <FiIcons.FiCalendar />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },

  {
    title: "Manter Tarefa",
    path: "/admin/manter-tarefa",
    icon: <BiIcons.BiTask />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
];

export const SidebarDataAluno = [
  {
    title: "Atividades",
    path: "/aluno/atividade",
    icon: <FiIcons.FiHome />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Manter Tarefa",
    path: "/admin/manter-tarefa",
    icon: <BiIcons.BiTask />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Agenda",
    path: "/admin/calendario",
    icon: <FiIcons.FiCalendar />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
];

export const SidebarDataEmpresa = [
  {
    title: "Manter Problema",
    path: "/admin/manter-problema",
    icon: <FiIcons.FiAlertOctagon />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Manter Contato",
    path: "/admin/manter-contato",
    icon: <FaIcons.FaRegAddressBook />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
  {
    title: "Agenda",
    path: "/admin/calendario",
    icon: <FiIcons.FiCalendar />,
    cName: "sidebar-nav-item",
    cLinkName: "sidebar-nav-link"
  },
];
