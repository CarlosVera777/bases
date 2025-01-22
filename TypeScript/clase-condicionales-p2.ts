//-----|UTILIZANDO CONDICIONALES EN FUNCIONES|-----//

interface Persona {
    nombre: string;
    edad: number;
    sueldo: number;
    estudiante: boolean
}

const persona: Persona = {
    nombre: 'Juan',
    edad: 40,
    sueldo: 3000,
    estudiante: false
}

function getVisa(turista: Persona): boolean {
    let aprobado = false;
    if ( (turista.estudiante == true && turista.edad <= 22) || turista.sueldo > 1500) {
        aprobado = true;
    }
    return aprobado;
}

const visa = getVisa(persona);


if (visa) {
    console.log('felicidades tiene la visa');
} else {
    console.log('lo sentimos, no aplica para una visa');
}
