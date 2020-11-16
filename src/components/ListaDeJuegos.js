import { connect } from 'react-redux' //vincula las propiedades del estado de la store con las propiedades del componente
import React, { Component } from 'react'
import { agregarJuego } from '../store/actions'

const mapStateToProps = (state) => { //propiedades que voy a agregarle a mis componentes // mapeo estados con prop
    return {
        propiedadJuego: state.juegos //nombre de la propiedad en el componente, propiedades que le meto al componente 
    }
}

const mapDispatchToProps = (dispatch) => { //mapea los dispatch hacia las propiedades del componente 
    return {
        propiedadAgregarJuego: juego => dispatch(agregarJuego(juego))
    }
}

class ListaDeJuegosComponent extends Component {
    constructor() {
        super()

        this.nombreJuego = React.createRef();
        this.addJuego = this.addJuego.bind(this);

    }

    addJuego(event) {   //tiene que hacer el dispatch
        console.log(this.nombreJuego.current.value)
        this.props.propiedadAgregarJuego({
            nombre: this.nombreJuego.current.value
        })
    }

    render() {
        return (
            <div>
                <h3> {this.props.propiedadJuego.length} </h3>
                <hr />
                <input type="text" id="nombre" ref={this.nombreJuego} /> <br />
                <button id="addJuego" onClick={this.addJuego}>Agregar Juego</button>
                <hr />
        </div>
            )
    }
}

const ListaDeJuegos = connect(mapStateToProps, mapDispatchToProps)(ListaDeJuegosComponent)

export default ListaDeJuegos