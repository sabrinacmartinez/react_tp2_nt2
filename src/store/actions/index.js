import { AGREGAR_SINOPSIS, AGREGAR_JUEGO } from '../constants/action_types'

export function agregarJuego(data) {
    return {
        type: AGREGAR_JUEGO,
        data
        }
}

export function agregarSinopsis(data) {
    return {
        type: AGREGAR_SINOPSIS,
        data
    }
}