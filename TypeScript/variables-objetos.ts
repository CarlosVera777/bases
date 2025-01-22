// |----- VARIABLES DE TIPO OBJETO -----| //
// tsc variables-objetos.ts && node variables-objetos.js

interface UserI { 
    name: string; 
    email: string;
}

const userObjeto1: UserI = { 
    name: 'Juan', 
    email: 'juan@inc.com'  
}

// MODIFICANDO SU CONTENIDO

userObjeto1.name = "Jose";

// USUALMENTE SE USA CON INTERFACES

// OBJETOS CON FUNCIONES COMO PROPIEDADES

const car = {
    placa: 'ABC-123',
    year: 2020,
    fechaMatriculacion: () => {
        console.log('debo matricular en noviembre'); 
    }
}

//car.fechaMatriculacion()

// UNA VARIABLE DE TIPO OBJETO NO SE PUEDE COPIAR - SE HACE UNA REFERENCIA

const articulo = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ...'
let copiaString = articulo;

copiaString = copiaString + ' fin del texto'

// console.log('articulo -> ', articulo);
// console.log('copiaString -> ', copiaString);


const userObjeto = { name: 'Juan', email: 'juan@inc.com'  }
let newUser = userObjeto;

newUser.name = 'Nombre es: ' + newUser.name;

//console.log('userObjeto -> ', userObjeto);
//console.log('newUser -> ', newUser);

const item = {nombre: 'Cell', precio: 10, cant: 4};
const items: any = [];

items.push(item);

items[0].cant--;

item.precio = 20;

//console.log('items -> ', items);
//console.log('item -> ', item);

let ingreso = 10;
const ingresos = [];
ingresos.push(ingreso)

ingreso++;

//console.log('ingreso -> ', ingreso);
//console.log('ingresos -> ', ingresos);

// EJEMPLO DE MODIFICAR UN OBJETO DENTRO DE UNA FUNCION

interface BusI {year: number, kilometers: number}
const bus: BusI = {year: 2020, kilometers: 141000};
function addKm(bus: BusI) {
    bus.kilometers += 200;
}

//console.log('bus -> ', bus);

addKm(bus)

//console.log('bus -> ', bus);

interface StudentI {rol: string, name: string}

const newStudent = {rol: 'estudiante', name: ''};

const students: StudentI[] = [];

function createStudent(name: string) {
    const newE = {name , rol: 'estudiante'}
    students.push(newE);
}

createStudent('Juan')
createStudent('Diego')
createStudent('Dacia')

console.log('students -> ', students);


students[1].rol = 'teacher';
console.log('students -> ', students);













