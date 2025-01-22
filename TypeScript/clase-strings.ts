//FUNCIONES DE STRING

// trim() ---------------------------------
const texto: string = " Hola mundo ";
console.log("texto->" + texto.trim());

// split() --------------------------------
const numeros: string = "10,20,30,40,50";
let misNumerosString: string[] = [];
let misNumerosNumber: number[] = [];

misNumerosString = numeros.split(",");
console.log(misNumerosString);

for(let i=0; i<misNumerosString.length; i++){
    misNumerosNumber.push(+misNumerosString[i]);
}
console.log(misNumerosNumber);

// search() ------------------------------------
const descripcion: string = "el estudiante fue aprobado";
const miEstado: number = descripcion.search("aprobado");
console.log("index->", miEstado);

if(miEstado > 0){
    console.log("estudiante aprobó");
}

// slice() ---------------------------------------
const titular: string = "andrea zuloeta hidalgo";
const partes = titular.split(" ");
let anonimizado: string = "";
for(let parte of partes){
    anonimizado += parte.slice(0,2) + "**** ";
}
console.log(anonimizado.trim());

// replace() --------------------------------------
const calificaciones: string = "10 20 30 40 50";
//const corregidos = calificaciones.replace(" ", ",");
const corregidos = calificaciones.replace(/\s/g,",");
console.log(corregidos);

// EXPRESIONES REGULARES *************************

//validar si un alumno fue aprobado
const comentario: string = "alumno aprueba";
const aprobo: number = comentario.search(/apr([a-z]{1,3})b/);
console.log(aprobo);

