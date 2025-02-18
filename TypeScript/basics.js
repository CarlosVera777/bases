//COMENTARIOS:
// comentar texto seleccionado: Ctrl + K + C / Ctrl + K + U

console.log("Hola", "Mundo");

// TIPOS DE VARIABLES:
// string - number - boolean - array - object
// boolean - true | false

let numero = 20;
let texto = 'hola mundo';
let enable = false;
let datos1 = [10, 20];
let datos2 = [10, 20, 'a'];
let datos3 = ['a', 'b'];
let user = {name: 'juan', edad: 20, enable: true};

console.log('datos1 - > ', datos1);
console.log('datos2 - > ', datos2[1]);
console.log('user - > ', user);
console.log('user - > ', user.name);

// operadores + - * / %   |  += -=  -- ++ 

let total = 10;
total = total + 30;
total += 20;
console.log('total - > ', total++);
console.log('residuo - > ', total % 2);

// concatenar + 
let mensaje = 'la temperatura';
const temperatura = 20;
mensaje = mensaje + ' ' +  temperatura;

console.log('texto -> ', mensaje); // la temperatura 20

// comilla invertida
let mensaje2;
let temperatura2 = 20
mensaje2 = `la temperatura es
	   en Lima` + ' ' +  temperatura2;
console.log('mensaje2 -> ', mensaje2);
let opinion = "es muy alta";
mensaje2 = `la temperatura es ${temperatura2} ${opinion}`;
console.log('mensaje opinado -> ', mensaje2);