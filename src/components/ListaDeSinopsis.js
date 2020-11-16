import { connect } from 'react-redux' //vincula las propiedades del estado de la store con las propiedades del componente
import React, { Component } from 'react'
import { agregarSinopsis } from '../store/actions'
import Button from 'react-bootstrap/Button'

const mapStateToProps = (state) => { //propiedades que voy a agregarle a mis componentes // mapeo estados con prop
    return {
        propiedadSinopsis: state.sinopsis //nombre de la propiedad en el componente, propiedades que le meto al componente 
    }
}

const mapDispatchToProps = (dispatch) => { //mapea los dispatch hacia las propiedades del componente 
    return {
        propiedadAgregarSinopsis: sinopsis => dispatch(agregarSinopsis(sinopsis))
    }
}

class ListaDeSinopsisComponent extends Component {
    constructor() {
        super()

        this.idSinopsis = React.createRef();
        this.tituloSinopsis = React.createRef();
        this.addSinopsis = this.addSinopsis.bind(this);

    }

    addSinopsis(event) {   //tiene que hacer el dispatch
        console.log(this.idSinopsis.current.value)
        console.log(this.tituloSinopsis.current.value)
        this.props.propiedadAgregarSinopsis({
            id: this.idSinopsis.current.value,
            nombre: this.tituloSinopsis.current.value
        })
    }

    render() {
        return (
            <div>
                <h3> {this.props.propiedadSinopsis.length} </h3>
                <hr />
                <input type="text" id="id" ref={this.idSinopsis} />
                <br />
                <input type="text" id="nombre" ref={this.tituloSinopsis} /> <br />
                <br />
                <Button variant="dark" id="addResenia" onClick={this.addSinopsis}>Agregar Sinopsis</Button>
                <hr />
            <ul>
                {
                    this.props.propiedadSinopsis.map(el => (
                        <li key={el.id}>
                            {el.nombre} 
                        </li>
                    ))
                }
            </ul> 
        </div>
            )
    }
}

const ListaDeSinopsis = connect(mapStateToProps, mapDispatchToProps)(ListaDeSinopsisComponent)

export default ListaDeSinopsis