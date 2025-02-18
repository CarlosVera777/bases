
//-----|BUCLES|-----//

//-----|FOR|-----//

// for ([expresion-inicial]; [condicion]; [expresion-final]) sentencia

// for ( ; ; ) {
// }

//-----|EJEMPLOS|-----//    -- break -- continue

// index = 10

for (let index = 0; index < 10; index ++) {
    if (index == 5) {
        continue; //salta a la siguiente iteracion
        //break; //salgamos del for
    }
    console.log('index -> ', index);
}

const ventas = [10, 20 , 13, 16]

let total = 0;
for (let i = 0; i < ventas.length; i = i + 1) {
    total = total + ventas[i];
}

// const total = ventas[0] + ventas[1] + ventas[2] + ventas[3]

// console.log('total -> ', total);


//-----|FOR OF|-----//

// for (const iterator of array) {
    
// }

for (let venta of ventas) {
   console.log(venta);
}

const cars = [ {placa: 'ABC-123', year: 2013}, {placa: 'ABC-1230', year: 2015}]

for (let car of cars) {
    console.log(car.placa);
}


//-----|FOR IN|-----//

const object: any = { a: 1, b: 2, c: 3 };

for (const property in object) {
   console.log(property);
   console.log(object[property])
}
