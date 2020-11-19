import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {

render() {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="/MGS.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Ya disponible la sinopsis de Metal Gear Solid: Ground Zeroes </h3>
            <p>Leela desde "Lista de juegos".</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="/TR.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Ya disponible la sinopsis de Shadow of the Tomb Raider</h3>
            <p>Leela desde "Lista de juegos".</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="/hitman.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Ya disponible la sinopsis de Hitman 2 (2018)</h3>
            <p>Leela desde "Lista de juegos".</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        )
    }
}

export default Home;