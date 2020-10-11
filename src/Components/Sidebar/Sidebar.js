import React, { useState } from "react";
import "./Sidebar.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Collapse } from 'react-bootstrap'

const Sidebar = (props) => {
    const [openPBL, setOpenPBL] = useState(false);
    const [openAluno, setOpenAluno] = useState(false);
    const [openEmpresa, setOpenEmpresa] = useState(false);

    return (
        <Nav className="flex-column sidebar">
            <Nav.Item className='tituloSide'>Menu</Nav.Item>

            <Nav.Link onClick={() => setOpenPBL(!openPBL)}
                aria-controls="example-collapse-text"
                aria-expanded={openPBL}>Pbl</Nav.Link>
            <Collapse in={openPBL}>
                <Nav.Item id="example-collapse-text">
                    <Nav.Link href="/">Cadastrar PBL</Nav.Link>
                    <Nav.Link href="/">Consultar PBL</Nav.Link>
                </Nav.Item>
            </Collapse>

            <Nav.Link onClick={() => setOpenAluno(!openAluno)}
                aria-controls="example-collapse-text"
                aria-expanded={openAluno}>Aluno</Nav.Link>
            <Collapse in={openAluno}>
                <Nav.Item id="example-collapse-text">
                    <Nav.Link href="/">Cadastrar Aluno</Nav.Link>
                    <Nav.Link href="/">Consultar Aluno</Nav.Link>
                </Nav.Item>
            </Collapse>

            <Nav.Link onClick={() => setOpenEmpresa(!openEmpresa)}
                aria-controls="example-collapse-text"
                aria-expanded={openEmpresa}>Empresa</Nav.Link>
            <Collapse in={openEmpresa}>
                <Nav.Item id="example-collapse-text">
                    <Nav.Link href="/">Cadastrar Empresa</Nav.Link>
                    <Nav.Link href="/">Consultar Empresa</Nav.Link>
                </Nav.Item>
            </Collapse>


        </Nav >
    );
};

export default Sidebar;