//-----|DESAFIO|-----//
// materias: matematicas, ciencias, sociales   -  (0 - 8) -> 1   // (9 - 12) -> 2   //  (13 - 20) -> 3

interface CalificacionesI {
    matematicas: number 
    ciencias: number
    sociales: number
}

function getEstado(calificaciones: CalificacionesI): number {
    let estado: number = 1;
    let promedio = (calificaciones.ciencias + calificaciones.matematicas+  calificaciones.sociales) / 3;
    console.log('promedio -> ', promedio);
    if (promedio >= 0 && promedio <= 8) {
        estado = 1
    } else if (promedio >= 9 && promedio <= 12) {
        estado = 2
    } else if (promedio >= 13) {
        estado = 3
    }
    return estado;
}


function sayMotivacion(estado: number): void {
    if (estado == 1) {
        console.log('motivación de perdió');
    }
    if (estado == 2) {
        console.log('motivación de supletorio');
    }
    if (estado == 3) {
        console.log('motivación de felicidades');  
    }
} 

// contruir las funciones y llamar a las funciones

const notas: CalificacionesI = {
    matematicas: 20,
    sociales: 10,
    ciencias: 15
}

const estado = getEstado(notas);
sayMotivacion(estado);

