import { connect } from 'react-redux' //vincula las propiedades del estado de la store con las propiedades del componente
import React, { Component } from 'react'
import { agregarJuego } from '../store/actions'
import Button from 'react-bootstrap/Button'
import {ListGroup, Form} from 'react-bootstrap'

const mapStateToProps = (state) => { //propiedades que voy a agregarle a mis componentes // mapeo estados con prop
    return {
        propiedadJuego: state.juegos //nombre de la propiedad en el componente, propiedades que le meto al componente 
    
    }
}

const mapDispatchToProps = (dispatch) => { //mapea los dispatch hacia las propiedades del componente 
    return {
        agregarJuego: juego => dispatch(agregarJuego(juego))
    }
}

class AgregarJuegosJuegosComponent extends Component {
    constructor() {
        super()

        this.nombreJuego = React.createRef();
        this.sinopsis = React.createRef();
        this.addJuego = this.addJuego.bind(this);

    }

    addJuego(event) {   //tiene que hacer el dispatch
        console.log(this.nombreJuego.current.value)
        console.log(this.sinopsis.current.value)
        this.props.agregarJuego({
            nombre: this.nombreJuego.current.value,
            sinopsis: this.sinopsis.current.value
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre del juego</Form.Label>
                        <Form.Control type="nombre" ref={this.nombreJuego} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Sinopsis del juego</Form.Label>
                    <Form.Control type="sinopsis" rows={3} ref={this.sinopsis} />
                </Form.Group>
                </Form>
                <hr />
                <br />
                <Button variant="dark" id="addJuego" onClick={this.addJuego}>Agregar Juego</Button>
                <hr />
                <ListGroup.Item action variant="dark">
                Cantidad de juegos incorporados: { this.props.propiedadJuego.length }
                </ListGroup.Item>
                <hr />
                <ul>
{/*                 {
                    this.props.propiedadJuego.map(el => (
                        <li key={el.nombre}>
                            {el.sinopsis}
                        </li>
                    ))
                } */}
            </ul> 
        </div>
            )
    }
}

const Juego = connect(mapStateToProps, mapDispatchToProps)(AgregarJuegosJuegosComponent)

export default Juego