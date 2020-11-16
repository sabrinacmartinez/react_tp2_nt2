import { AGREGAR_SINOPSIS, AGREGAR_JUEGO } from '../constants/action_types'

const initialState = {
    juegos: [],
    sinopsis: []
}

function rootReducer(state=initialState, action) { //aca adentro van las acciones
    
    switch(action.type){
        case AGREGAR_JUEGO:   //la accion esta definida en actions y aca la llamo para usarla
            state = Object.assign({}, state , {
                juegos: state.juegos.concat(action.data)
            })
            console.log('Agregar juego :' + action.data) //modularizar bien esto cuando funcione

    break;
    case AGREGAR_SINOPSIS:
        state = Object.assign({}, state , {
            sinopsis: state.sinopsis.concat(action.data)
        })
        console.log('Agregar sinopsis :' + action.data)
    break;
    default: //si lo saco no funciona, eslint me obliga a usar al default case
    }
    return state
}

export default rootReducer