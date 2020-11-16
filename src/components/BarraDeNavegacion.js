import * as ReactBootsTrap from "react-bootstrap"
import React from 'react';

const navBar = () => (
<>
    <ReactBootsTrap.Navbar bg="dark" variant="dark">
    <ReactBootsTrap.Navbar.Brand href="#home">Games</ReactBootsTrap.Navbar.Brand>
    <ReactBootsTrap.Nav className="mr-auto">
        <ReactBootsTrap.Nav.Link href="Juegos">Lista de Juegos</ReactBootsTrap.Nav.Link>
        <ReactBootsTrap.Nav.Link href="#Log">Log in</ReactBootsTrap.Nav.Link>
        <ReactBootsTrap.Nav.Link href="#Registro">Registrarse</ReactBootsTrap.Nav.Link>
    </ReactBootsTrap.Nav>
    </ReactBootsTrap.Navbar>
    <br />
    </>
)

    export default navBar;

