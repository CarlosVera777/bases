//-----|BUCLES|-----//
//-----|FOR|-----//
// for ([expresion-inicial]; [condicion]; [expresion-final]) sentencia
// for ( ; ; ) {
// }
//-----|EJEMPLOS|-----//    -- break -- continue
// index = 10
for (var index = 0; index < 10; index++) {
    if (index == 5) {
        break;
    }
    console.log('index -> ', index);
}
var ventas = [10, 20, 13, 16];
var total = 0;
for (var i = 0; i < ventas.length; i = i + 1) {
    total = total + ventas[i];
}
// const total = ventas[0] + ventas[1] + ventas[2] + ventas[3]
// console.log('total -> ', total);
//-----|FOR OF|-----//
// for (const iterator of array) {
// }
var iterable = [10, 20, 30];
for (var _i = 0, ventas_1 = ventas; _i < ventas_1.length; _i++) {
    var venta = ventas_1[_i];
    //   console.log(venta);
}
var cars = [{ placa: 'ABC-123', year: 2013 }, { placa: 'ABC-1230', year: 2015 }];
for (var _a = 0, cars_1 = cars; _a < cars_1.length; _a++) {
    var car = cars_1[_a];
    // console.log(car.placa);
}
//-----|FOR IN|-----//
var object = { a: 1, b: 2, c: 3 };
for (var property in object) {
    //   console.log(property);
    //   console.log(object [property])
}
// DESAFIO
// Calcular el promedio de varios estudiantes cada uno con n notas
var estudiantes = [{ nombre: "juan", notas: [20, 19, 18] }, { nombre: "josé", notas: [10, 13, 0, 10, 20, 20] }];
for (var _b = 0, estudiantes_1 = estudiantes; _b < estudiantes_1.length; _b++) {
    var estudiante = estudiantes_1[_b];
    var suma = 0;
    for (var _c = 0, _d = estudiante.notas; _c < _d.length; _c++) {
        var nota = _d[_c];
        suma += nota;
    }
    var prom = suma / estudiante.notas.length;
    console.log("el estudiante ".concat(estudiante.nombre, " tiene un promedio de ").concat(prom.toFixed(2)));
}
