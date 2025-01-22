
// tipos de variables - tipado de datos
// boolean - string - number - Date - array -  - object - any - null - undefined

let helloWorld = "Hello World";
let text: string = 'Hello word';
let temp: number = 10;
// let temp;
let today: Date;
let datos: string[] = ['a', 'b', 'c']
let test: any; //Cualquier tipo dato: 10, "hola"
//let datos: string[] = ['a', 'b', 10] //Error
//let datos: Array<string> = ['a', 'b', 10] //Error
let datos1: Array<any> = ['a', 'b', 10]
// let datos: any[] = ['a', 'b', 10]
let user1 = { nombre: 'Juan', edad: 10, enable: false};
let user2: UserI1 = { name: 'Juan', edad: 10, enable: false, direccion: "Av Javier Prado 1233"};
// let user: UserI; 
// user = {
  
// }

// interfaces 
interface UserI1 {
  name: string;
  edad: number;
  enable: boolean;
  direccion?: string;
}



// componiendo tipos de datos personalizados
type MyBool = true | false;
let enable: MyBool = false;

type Rol = 'admin' | 'vendedor' | 'cliente';

interface User {
  name: string;
  email: string;
  rol: Rol
}

const cliente: User = {
  name: 'Juan',
  email: 'juan@inc.com',
  rol: 'admin'
}

//const users: User[] = [];
//let users: Array<User>;
//let users: Array<{name: string, email: string}>;

 


// console.log('cliente es de tipo -> ', typeof cliente);
// console.log('datos es de tipo  -> ', typeof datos);
// console.log('datos es un array  -> ', Array.isArray(datos));

// console.log('temp es de tipo  -> ', typeof temp);