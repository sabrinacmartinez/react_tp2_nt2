import {Card, Button} from 'react-bootstrap'
import {React, Component} from 'react';
import { eliminarJuego } from '../store/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => { //mapea los dispatch hacia las propiedades del componente 
    return {
        eliminarJuego: juego => dispatch(eliminarJuego(juego))
    }
}

class JuegoComponent extends Component {
    constructor() {
        super()

        this.deleteGame = this.deleteGame.bind(this);

    }

    deleteGame() {

        this.props.eliminarJuego({
            nombreJuego: this.props.nombreJuego,
            sinopsis: this.props.sinopsis,
            id: this.props.id
        })
        alert('El juego fue eliminado de la lista!')
        }

    render() {
        return (
        <div>
            <Card>
            <Card.Body>
            <Card.Title> 
                { this.props.nombreJuego }
                </Card.Title>
                <p>
                { this.props.sinopsis }
                </p>
                <Button variant="dark" onClick={this.deleteGame}>Eliminar Juego</Button>
                </Card.Body>
                </Card>
                <br/>
        </div>
        )
    }
}

const Juego = connect(null, mapDispatchToProps)(JuegoComponent)

export default Juego;
