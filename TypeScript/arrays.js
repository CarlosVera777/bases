// tsc arrays.ts && node arrays.js
console.log('ARRAYS');
// |----- ARRAYS -----| //
var arrayDatos1 = ['B', 'C', 'D', 'E', 'F'];
console.log('arrayDatos -> ', arrayDatos1);
// |----- PUSH -----| //
var numero = arrayDatos1.push('G', 'H');
console.log('número de letras -> ', numero);
console.log('arrayDatos -> ', arrayDatos1);
// |----- UNSHIFT -----| //
console.log('arrayDatos -> ', arrayDatos1);
arrayDatos1.unshift('A');
console.log('arrayDatos -> ', arrayDatos1);
// |----- FOR EACH -----| //
//const arrayDatos: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
arrayDatos1.forEach(function (ele, index) {
    console.log('ele', ele);
});
// console.log('arrayDatos -> ', arrayDatos);
// |----- MAP -----| //
var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
var mapeo = meses.map(function (elemento) {
    // console.log('mes -> ', mes);
    var text = 'Mes ' + elemento;
    return text;
});
// mapeo = ['Mes Ene', 'Mes Feb', ....]
console.log('meses -> ', meses);
console.log('mapeo -> ', mapeo);
var materias = [
    { nombre: 'Matemáticas', codigo: 105 },
    { nombre: 'Ciencias', codigo: 208 },
    { nombre: 'Sociales', codigo: 309 }
];
var busquedaMateria = materias.find(function (materia) {
    if (materia.nombre == 'Ciencias') {
        return true;
    }
    return false;
});
console.log('busquedaMateria -> ', busquedaMateria);
console.log('busquedaMateria -> ', busquedaMateria === null || busquedaMateria === void 0 ? void 0 : busquedaMateria.codigo);
