import { AGREGAR_JUEGO } from '../constants/action_types'

export function agregarJuego(data) {
    return {
        type: AGREGAR_JUEGO,
        data
        }
}
