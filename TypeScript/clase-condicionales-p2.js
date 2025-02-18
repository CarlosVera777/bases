//-----|UTILIZANDO CONDICIONALES EN FUNCIONES|-----//
var persona = {
    nombre: 'Juan',
    edad: 40,
    sueldo: 3000,
    estudiante: false
};
function getVisa(turista) {
    var aprobado = false;
    if ((turista.estudiante == true && turista.edad <= 22) || turista.sueldo > 1500) {
        aprobado = true;
    }
    return aprobado;
}
var visa = getVisa(persona);
if (visa) {
    console.log('felicidades tiene la visa');
}
else {
    console.log('lo sentimos, no aplica para una visa');
}
//-----|DESAFIO|-----//
// materias: matematicas, ciencias, sociales   -  (0 - 8) -> 1   // (9 - 12) -> 2   //  (13 - 20) -> 3
function getEstado(calificaciones) {
    var estado = 1;
    var promedio = (calificaciones.ciencias + calificaciones.matematicas + calificaciones.sociales) / 3;
    console.log('promedio -> ', promedio);
    if (promedio >= 0 && promedio <= 8) {
        estado = 1;
    }
    else if (promedio >= 9 && promedio <= 12) {
        estado = 2;
    }
    else if (promedio >= 13) {
        estado = 3;
    }
    return estado;
}
function sayMotivacion(estado) {
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
var notas = {
    matematicas: 20,
    sociales: 10,
    ciencias: 5
};
var estado = getEstado(notas);
sayMotivacion(estado);
