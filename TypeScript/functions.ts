//FUNCION SIN PARAMETROS***********************
// function saludar(){
//     console.log("Hola Mundo");
// }
// saludar();
// saludar();

// let sueldo:number = 5500;
// console.log(sueldo);

//FUNCION CON PARAMETROS***********************
// function saludar(nombre:string){
//     console.log("Hola", nombre);
// }
// saludar("Carlos");

//FUNCION QUE RETORNA VALORES******************
// function pagar(valor:string):number{
//     const dinero: number = + valor; // = + convierte string en number
//     return dinero;
// }

// const pago:number = pagar("220.50");
// console.log("pague =>", pago);

//FUNCION CON VARIOS PARAMETROS****************
// function sumar(numero1: number, numero2: number):number{
//     const suma:number = numero1 + numero2;
//     return suma;
// }
// const resultado: number = sumar(1, 5);
// console.log("resultado =>", resultado);

//CONSIDERACIONES******************************
// •El nombre de las funciones y parametros deben ser intuitivos.
// •Las funciones reducen los problemas o tareas en partes mas pequeñas.
// •Las funciones ayudan a evitar repetir codigo repetitivo.

// const numero: number = 20;
// const numerotext = numero.toString();
// console.log("numerotext =>", typeof numerotext);

// function crearUser(email: string, password: string, name: string){
//     //logica
//     const id = "xd2";
//     return id;
// }

// function setRol(id: string, rol: Rol2){
//     //logica
//     return true;
// }

// const user2: User2 = {
//     email: "juan@inc.com",
//     password: "123456",
//     name: "juan"
// }

// const id = crearUser(user2.email, user2.password, user2.name);
// const change = setRol(id, "estudiante");
// console.log("el cambio fue =>", change);

// type Rol2 = "estudiante" | "profesor";

// interface User2{
//     email: string;
//     password: string;
//     name: string;
// }

//DESAFIO O RETO*******************************
// Crea una funcion que el promedio de 3 
// calificaciones y mostrar el valor en consola.

// function calcularNotaFinal(nota1: number, nota2: number, nota3: number): number{
//     const promedio = (nota1 + nota2 + nota3)/3;
//     return promedio;
// }

// const resultado: number = calcularNotaFinal(19, 18, 19);
// console.log("el promedio final es =>", resultado.toFixed(2));

//FUNCIONES FECHA: () => { //codigo } ****************
const show = function action(value: string){
    console.log("value: ", value);
};

const materiales: string[] = ["Hidrogeno", "Helio", "Litio", "Berilio"];

materiales.forEach(show);
materiales.forEach((material: string) => {
    console.log("material: ", material);
});
