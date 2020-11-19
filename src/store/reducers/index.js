import { AGREGAR_JUEGO } from '../constants/action_types'

const initialState = {
    juegos: [
        {
            nombreJuego: 'Metal Gear Solid: Ground Zeroes',
            sinopsis: 'Metal Gear Solid V Ground Zeroes nos habla de la Guerra Fría, un período de tensiones, marcado por iconos como el Teléfono Rojo, la destrucción mutua asegurada o las guerrillas. En esa tesitura, hubo una serpiente que se sintió en su salsa, hasta convertirse en el Gran Jefe. No tenía conexión directa con la Casa Blanca o el Kremlin, pero sí armamento nuclear y unos militares sin fronteras a su servicio. Tras tomarse un período sabático, Snake, alias Big Boss, regresa a la acción con Metal Gear Solid V Ground Zeroes, el prólogo del futuro The Phantom Pain.',
            id: 1
            },
                { 
            nombreJuego: 'Shadow of the Tomb Raider',
            sinopsis: 'La historia empieza unos dos meses después de los eventos de Rise of the Tomb Raider. Lara Croft viaja a México, y más tarde a Perú, para detener un evento apocalíptico. No obstante, ella misma termina por iniciarlo, matando accidentalmente a decenas de personas inocentes. Cargada de culpa, Lara se siente responsable por lo ocurrido. En lugar de intentar sobrevivir, la historia se basa en una Lara que comete errores y se enfrenta a las consecuencias; tratando de hacer del mundo un lugar mejor y entender su lugar en él. La Trinidad una vez más está involucrada, y Lara jura venganza contra la organización por lo que le hicieron a su padre. Esto pone a Lara en conflicto con el líder del Alto Consejo de la Trinidad, un hombre llamado Dr. Pedro Domínguez..',
            id: 2
            },
            { 
            nombreJuego: 'Hitman 2 (2018)',
            sinopsis:'El asesino más letal y silencioso está de vuelta. El Agente 47 tiene una nueva misión, nuevos objetivos y un propósito, descubrir su pasado. Hitman 2 es la secuela directa del primer juego que se lanzó en formato episódico. Y es aquí donde encontramos la primera diferencia. Está segunda entrega abandona ese formato y vuelve a uno más tradicional, sin episodios y con una campaña repleta de acción. Desde el primer momento tendremos toda la historia completa, con seis escenarios totalmente nuevos. De este modo, tendremos que localizar y eliminar a nuestros objetivos en escenarios como los bajos fondos de Bombai o un barrio residencial de republicanos americanos. Eso si, el salto entre una entrega y otra no es tan grande como podríamos esperar pero sigue siendo excelente.',
            id:3
            }
    ],
    sinopsis: []
}

let id=4;

function rootReducer(state=initialState, action) { //aca adentro van las acciones
    
    switch(action.type){
        case AGREGAR_JUEGO:   //la accion esta definida en actions y aca la llamo para usarla
        action.data.id=id
        state = Object.assign({}, state , {
                juegos: state.juegos.concat(action.data)
            })
            console.log('Agregar juego :' + action.data) //modularizar bien esto cuando funcione
            id++
    break;
    default: //si lo saco no funciona, eslint me obliga a usar al default case
    }
    return state
}

export default rootReducer