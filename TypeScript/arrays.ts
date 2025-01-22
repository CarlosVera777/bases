// tsc arrays.ts && node arrays.js

console.log('ARRAYS');

// |----- ARRAYS -----| //
const arrayDatos1: string[] = ['B', 'C', 'D', 'E', 'F'];
console.log('arrayDatos -> ', arrayDatos1);

// |----- PUSH -----| //
    const numero = arrayDatos1.push('G', 'H');
    console.log('número de letras -> ', numero);
    console.log('arrayDatos -> ', arrayDatos1);

// |----- UNSHIFT -----| //

    console.log('arrayDatos -> ', arrayDatos1);
    arrayDatos1.unshift('A');
    console.log('arrayDatos -> ', arrayDatos1);

// |----- FOR EACH -----| //

//const arrayDatos: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
arrayDatos1.forEach( (ele, index) => {
    console.log('ele', ele);
} );
// console.log('arrayDatos -> ', arrayDatos);

// |----- MAP -----| //

const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const mapeo = meses.map( (elemento) => {
    // console.log('mes -> ', mes);
    const text = 'Mes ' +  elemento;
    return text;
})
// mapeo = ['Mes Ene', 'Mes Feb', ....]

console.log('meses -> ', meses);
console.log('mapeo -> ', mapeo);

// |----- MÁS FUNCIONES -----| //

interface NotasI { 
    nombre: string, 
    codigo: number 
}

const materias: NotasI[] = [ 
    {nombre: 'Matemáticas', codigo: 105},
    {nombre: 'Ciencias', codigo: 208},
    {nombre: 'Sociales', codigo: 309} 
]

const busquedaMateria = materias.find( (materia) => { 
    if (materia.nombre == 'Ciencias') {
        return true;
    } 
    return false
});

console.log('busquedaMateria -> ', busquedaMateria);
console.log('busquedaMateria -> ', busquedaMateria?.codigo);

