import { AGREGAR_JUEGO, ELIMINAR_JUEGO } from '../constants/action_types'

export function agregarJuego(data) {
    return {
        type: AGREGAR_JUEGO,
        data
        }
}

export function eliminarJuego(data) {
    return {
        type: ELIMINAR_JUEGO,
        data
        }
}
