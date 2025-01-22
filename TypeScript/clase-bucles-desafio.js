// DESAFIO
// Calcular el promedio de varios estudiantes cada uno con n notas
var E1 = { nombre: "carlos", notas: [20, 18, 17] };
var E2 = { nombre: "andrea", notas: [15, 18] };
var estudiantes = [E1, E2];
var promedioEstudiantes = 0;
for (var _i = 0, estudiantes_1 = estudiantes; _i < estudiantes_1.length; _i++) {
    var estudiante = estudiantes_1[_i];
    var promedioEstudiante = 0;
    for (var _a = 0, _b = estudiante.notas; _a < _b.length; _a++) {
        var nota = _b[_a];
        promedioEstudiante += nota;
    }
    promedioEstudiante = promedioEstudiante / estudiante.notas.length;
    console.log("promedio Estudiante:", promedioEstudiante.toFixed(2));
    promedioEstudiantes += promedioEstudiante;
}
promedioEstudiantes = promedioEstudiantes / estudiantes.length;
console.log("promedio Total:", promedioEstudiantes.toFixed(2));
