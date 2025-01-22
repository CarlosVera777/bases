//FUNCIONES DE STRING
// trim() ---------------------------------
var texto = " Hola mundo ";
console.log("texto->" + texto.trim());
// split() --------------------------------
var numeros = "10,20,30,40,50";
var misNumerosString = [];
var misNumerosNumber = [];
misNumerosString = numeros.split(",");
console.log(misNumerosString);
for (var i = 0; i < misNumerosString.length; i++) {
    misNumerosNumber.push(+misNumerosString[i]);
}
console.log(misNumerosNumber);
// search() ------------------------------------
var descripcion = "el estudiante fue aprobado";
var miEstado = descripcion.search("aprobado");
console.log("index->", miEstado);
if (miEstado > 0) {
    console.log("estudiante aprobó");
}
// slice() ---------------------------------------
var titular = "andrea zuloeta hidalgo";
var partes = titular.split(" ");
var anonimizado = "";
for (var _i = 0, partes_1 = partes; _i < partes_1.length; _i++) {
    var parte = partes_1[_i];
    anonimizado += parte.slice(0, 2) + "**** ";
}
console.log(anonimizado.trim());
// replace() --------------------------------------
var calificaciones = "10 20 30 40 50";
//const corregidos = calificaciones.replace(" ", ",");
var corregidos = calificaciones.replace(/\s/g, ",");
console.log(corregidos);
// EXPRESIONES REGULARES *************************
//validar si un alumno fue aprobado
var comentario = "alumno aprueba";
var aprobo = comentario.search(/apr([a-z]{1,3})b/);
console.log(aprobo);
