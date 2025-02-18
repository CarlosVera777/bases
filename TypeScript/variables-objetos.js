// |----- VARIABLES DE TIPO OBJETO -----| //
// tsc variables-objetos.ts && node variables-objetos.js
var userObjeto1 = {
    name: 'Juan',
    email: 'juan@inc.com'
};
// MODIFICANDO SU CONTENIDO
userObjeto1.name = "Jose";
// USUALMENTE SE USA CON INTERFACES
// OBJETOS CON FUNCIONES COMO PROPIEDADES
var car = {
    placa: 'ABC-123',
    year: 2020,
    fechaMatriculacion: function () {
        console.log('debo matricular en noviembre');
    }
};
//car.fechaMatriculacion()
// UNA VARIABLE DE TIPO OBJETO NO SE PUEDE COPIAR - SE HACE UNA REFERENCIA
var articulo = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ...';
var copiaString = articulo;
copiaString = copiaString + ' fin del texto';
// console.log('articulo -> ', articulo);
// console.log('copiaString -> ', copiaString);
var userObjeto = { name: 'Juan', email: 'juan@inc.com' };
var newUser = userObjeto;
newUser.name = 'Nombre es: ' + newUser.name;
//console.log('userObjeto -> ', userObjeto);
//console.log('newUser -> ', newUser);
var item = { nombre: 'Cell', precio: 10, cant: 4 };
var items = [];
items.push(item);
items[0].cant--;
item.precio = 20;
//console.log('items -> ', items);
//console.log('item -> ', item);
var ingreso = 10;
var ingresos = [];
ingresos.push(ingreso);
ingreso++;
var bus = { year: 2020, kilometers: 141000 };
function addKm(bus) {
    bus.kilometers += 200;
}
//console.log('bus -> ', bus);
addKm(bus);
var newStudent = { rol: 'estudiante', name: '' };
var students = [];
function createStudent(name) {
    var newE = { name: name, rol: 'estudiante' };
    students.push(newE);
}
createStudent('Juan');
createStudent('Diego');
createStudent('Dacia');
console.log('students -> ', students);
students[1].rol = 'teacher';
console.log('students -> ', students);
