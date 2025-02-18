//-----|CONDICIONALES|-----//

// if (<expresion>) {}

//  && -> AND    
//  || -> OR
//   != -> diferente
//   == igual 
//   === igualdad estricta // console.log('1' === 1); // false
//   ! negación
// > < >= <=


//-----|EJEMPLOS|-----//

// const edad = 15;
// if (edad >= 18) {
//     console.log('es mayor de edad');
// }

//-----|IF - ELSE|-----//

// if (<expresion>) {

// } else {

// }

const edad = 20;
if (edad >= 18) {
    console.log('es mayor de edad');
} else {
    console.log('es menor de edad');
}


//-----|ELSE IF|-----//
const boton: number = 3;
if (boton == 1) {
    console.log('ir al primer piso');
} else if (boton == 2) {
    console.log('ir al segundo piso');
} else if (boton == 3) {
    console.log('ir al tercer piso');
}

//-----|SWITCH|-----//

switch (boton) {
    case 1:
        // console.log('ir al primer piso');
        break;
    case 2:
        // console.log('ir al segundo piso');
        break;
    case 3:
        // console.log('ir al tercer piso');
        break;
    default:

        break;
}


//-----|UTILIZANDO CONDICIONALES ANIDADOS|-----//

const temp1 = 25
if (temp1 >= 20 && temp1 <= 35 ) {
    console.log('prender ventilador');
} else if (temp1 > 35) {
    console.log('sonar alarma');
} else {
    console.log('apagar ventilador');
    console.log('apagar alarma');
}

const user = {
    nombre: 'Juan',
    calificacion: 13,
    deportista: false
}

let exonerado: boolean = false;

if (user.calificacion >= 19 || user.deportista == true) {
    exonerado = true;
}

if (exonerado == true) {        
     console.log('el estudiante está exonerado');
}

// negación
if (!exonerado) {        
    console.log('el estudiante está exonerado', exonerado);
}
