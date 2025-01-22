// |----- ASYNC AWAIT -----| //
// tsc async-await.ts && node async-await.js

interface IUser {id: number; name: string}
const db: IUser[] = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}];

function findUser(id: number): Promise<boolean>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let existUserInDB: boolean = false;
      //Sentencias
      //db.find(argumentos);
      resolve(existUserInDB);
    }, 1000);
  });
}

// function find(id: number): Promise<boolean> {
//     return new Promise((resolve, reject) => { 
//       setTimeout(() => {
//         let exist = false;
//         // // sentencias
//         // db.find(argumentos)
//         resolve(exist)
//         return;
//       }, 1000);
//     })
// }

function saveUser(data: any): Promise<boolean>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let createUserInDB: boolean = true;
      //Sentencias
      //db.create(data);
      resolve(createUserInDB);
    }, 3000);
  });
}

// function save(data: any):  Promise<boolean> {
//   return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       let saved: boolean = true;
//       // sentencias
//       // db.create(data)
//       resolve(saved)
//       return;
//     }, 3000)
//   })
// }

const usuario: IUser = {id: 4, name: 'D'}

async function createUser(user: IUser) {
  console.log("Finding...");
  const existUserDB: boolean = await findUser(user.id);
  console.log("finish function find - Encontrado? ->", existUserDB);
  if(!existUserDB){
    console.log("saving...");
    const savedUserDB = await saveUser(user);
    console.log("finish function save -> Salvado?", savedUserDB);
    if(savedUserDB){
      console.log("Guardado con Exito!");
    }
  }
}

// async function createUser(user: any) {
//     console.log('finding...');
//     const exist = await find(user.id);
//     console.log('finish function find -> ', exist);
//     if (!exist) {
//         console.log('saving...');
//         const saved = await save(user);
//         console.log('finish function save -> ', exist);
//         if (saved) {
//           console.log('guardado con éxito');
//         }
//     }
// }

createUser(usuario);

//createUser with async and await



// const user: UserI = {id: 3, name: 'D'}
// createUser(user);


// DEMO: CREANDO UNA PROMESA
// function delay(time: number): Promise<number>{
//   return new Promise((resolve) => {
//     setTimeout(()=>{
//       console.log("finish delay");
//       resolve(10);
//     }, time * 1000);
//   });
// }

// async function action(){
//   console.log("call to delay");
//   const res: number = await delay(5);
//   console.log("after delay", res);
// }

// action();
