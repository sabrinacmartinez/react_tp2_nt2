import { Navbar, Nav } from "react-bootstrap"
import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
    <div>
        <Navbar bg="dark" variant="dark">
        <Link to="/">
        <Navbar.Brand href="">Videojuegos</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
        <Link to="/AgregarJuegos">
        <Nav.Link href="Juegos">Agregar juegos</Nav.Link>
        </Link>
        <Link to="/ListaDeJuegos">
        <Nav.Link href="#ListaDeJuegos">Lista de juegos</Nav.Link>
        </Link>
        </Nav>
        </Navbar>
    </div>
)

export default NavBar;

