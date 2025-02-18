// |----- TRY CATCH -----| //
// tsc try-catch.ts && node try-catch.js

console.log('try-catch');

function loginLibrary(credentials: any): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => { 
    setTimeout(() => {
      let success: boolean = true;
      // sentencias
      //resolve(success)
      reject('credenciales inválidas');
      return;
    }, 4000);
  })
}

interface Credentials {username: string; password: string}

const credentials: Credentials = {username: 'juan@inc.com', password: '123456'}

async function login(credentials: any) {
        console.log('procesando...');
        try {
          const validLogin = await loginLibrary(credentials);
          if (validLogin) {
              console.log('login successfull');
          }
        } catch (error) {
            console.log('error -> ', error);
        }
        console.log('after login ....');
}

console.log('init login');
login(credentials)