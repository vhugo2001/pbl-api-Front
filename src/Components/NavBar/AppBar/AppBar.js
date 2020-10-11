import React, { useState } from "react";
import './AppBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Collapse, Navbar, Image, Row, Col, Card, Container } from 'react-bootstrap'
import Routes from '../../../routes/routes'

const AppBar = (props) => {
    const [openPBL, setOpenPBL] = useState(false);
    const [openAluno, setOpenAluno] = useState(false);
    const [openEmpresa, setOpenEmpresa] = useState(false);

    // <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                 <Navbar.Collapse id="basic-navbar-nav">
    //                 </Navbar.Collapse>
    return (
        <Row className='BarMedidas RowPrincipal'>
            <Col xs={4} sm={4} md={4} lg={2} xl={2} className='BarMedidas'>
                <Nav className="flex-column sidenavigation" >
                    <Nav.Item className='logoUffTopo'>
                        <Image className='logoUff' src={require('../../Images/Logo_UFF_2.png')} />
                    </Nav.Item>

                    {/* <Nav.Item className='Links'>
                        <Nav.Link className='DropDownSIdeBar' onClick={() => setOpenPBL(!openPBL)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openPBL}>Pbl</Nav.Link>
                        <Collapse in={openPBL}>
                            <Nav.Item id="example-collapse-text" >
                                <Nav.Link className='DropDownSIdeBar' href="/">Cadastrar PBL</Nav.Link>
                                <Nav.Link className='DropDownSIdeBar' href="/">Consultar PBL</Nav.Link>
                            </Nav.Item>
                        </Collapse>

                        <Nav.Link className='DropDownSIdeBar' onClick={() => setOpenAluno(!openAluno)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openAluno}>Aluno</Nav.Link>
                        <Collapse in={openAluno}>
                            <Nav.Item id="example-collapse-text">
                                <Nav.Link className='DropDownSIdeBar' href="/">Cadastrar Aluno</Nav.Link>
                                <Nav.Link className='DropDownSIdeBar' href="/">Consultar Aluno</Nav.Link>
                            </Nav.Item>
                        </Collapse>

                        <Nav.Link className='DropDownSIdeBar' onClick={() => setOpenEmpresa(!openEmpresa)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openEmpresa}>Empresa</Nav.Link>
                        <Collapse in={openEmpresa}>
                            <Nav.Item id="example-collapse-text">
                                <Nav.Link className='DropDownSIdeBar' href="/">Cadastrar Empresa</Nav.Link>
                                <Nav.Link className='DropDownSIdeBar' href="/">Consultar Empresa</Nav.Link>
                            </Nav.Item>
                        </Collapse>
                    </Nav.Item> */}
                    <Nav.Link className='DropDownSIdeBar' href="/login">Login</Nav.Link>
                    <Nav.Link className='DropDownSIdeBar' href="/consult">Consultar PBL</Nav.Link>
                    <Nav.Link className='DropDownSIdeBar' href="/Cadastro">Cadastrar</Nav.Link>
                    <Nav.Link className='DropDownSIdeBar' href="/">O que é PBL</Nav.Link>
                </Nav>
            </Col>

            <Col xs={8} sm={8} md={8} lg={10} xl={10} className='BarMedidas'>
                <Navbar className='main-navbar' expand="sm" variant="dark">
                    <Navbar.Brand>
                        <Nav.Item className='textos-navs'>Menu</Nav.Item>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Image className='icones' src={require('../../Images/pesquisar.png')} />
                    <Image className='icones' src={require('../../Images/calendar.png')} />
                    <Image className='icones' src={require('../../Images/sino.png')} />
                    <Nav.Link className='textos-navs'>Pessoa Logada</Nav.Link>
                    <Image className='iconeLogin' src={require('../../Images/loginIcon.png')} />
                </Navbar>

                <Container className='CardPrincipal'>
                    <div className='CardTitulo'>Iniciar PBL</div>
                    <Routes />
                </Container>


            </Col>
        </Row >
    );
};

export default AppBar;