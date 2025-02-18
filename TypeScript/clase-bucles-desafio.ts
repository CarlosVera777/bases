// DESAFIO
// Calcular el promedio de varios estudiantes cada uno con n notas

const estudiantes = [ {nombre: "juan", notas: [20, 19, 18]}, {nombre: "josé", notas: [10, 13, 0, 10, 20, 20]}  ];

for (let estudiante of estudiantes) {
    let suma = 0;
    for (let nota of estudiante.notas) {
        suma += nota;
    }
    const prom = suma / estudiante.notas.length;
    console.log(`el estudiante ${estudiante.nombre} tiene un promedio de ${prom.toFixed(2)}`);
}

//Solucion 2:***************************************

interface estudianteI {
    nombre: string,
    notas: number[];
}

const E1: estudianteI = {nombre: "carlos", notas: [20,18,17]};
const E2: estudianteI = {nombre: "andrea", notas: [15,18]};

const Estudiantes: estudianteI[] = [E1, E2];


let promedioEstudiantes: number = 0;
for(let estudiante of Estudiantes){
    let promedioEstudiante: number = 0;
    for(let nota of estudiante.notas){
        promedioEstudiante += nota;
    }
    promedioEstudiante = promedioEstudiante / estudiante.notas.length;
    console.log("promedio Estudiante:", promedioEstudiante.toFixed(2));
    
    promedioEstudiantes += promedioEstudiante;
}

promedioEstudiantes = promedioEstudiantes / Estudiantes.length;
console.log("promedio Total:", promedioEstudiantes.toFixed(2));

