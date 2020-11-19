import {React, Component} from 'react';
import Juego from './Juego'
import { connect } from 'react-redux'

class ListaDeJuegosComponent extends Component {

render() {
        return (
            this.props.catalogo.map(e => {
                return ( 
                <div key={e.id}>
                    <Juego nombreJuego={e.nombreJuego} sinopsis={e.sinopsis} />
                </div>
                )
            })
        )
    }
}

const mapStateToProps=(state) => {return {catalogo: state.juegos}}

export default connect(mapStateToProps, null)(ListaDeJuegosComponent);