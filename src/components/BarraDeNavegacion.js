import { Navbar, Nav } from "react-bootstrap"
import React from 'react';
import { Link } from "react-router-dom";

const navBar = () => (
<>
    <Navbar bg="dark" variant="dark">
    <Link to="/Home">
    <Navbar.Brand href="#home">Videojuegos</Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
    <Link to="/ListaDeJuegos">
    <Nav.Link href="Juegos">Lista de Juegos</Nav.Link>
    </Link>
    <Nav.Link href="#Log">Log in</Nav.Link>
    <Link to="/Registro">
    <Nav.Link href="#Registro">Registrarse</Nav.Link>
    </Link>
    </Nav>
    </Navbar>
    <br />
    </>
)

export default navBar;

