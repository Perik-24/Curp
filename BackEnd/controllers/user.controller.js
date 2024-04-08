import { alumnos } from "../modules/user.model.js";

export const test = () => {
    console.log('Llamando la funcion desde controlador')
}

alumnos.create(
    {
        name:'Diego',
        estado:'Aguacalientes'
    }
)