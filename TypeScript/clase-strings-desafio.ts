// DESAFIO ********************
const apuntes: string = "Juan 16 aprobado, Jose 10 reprobado, Ana 15 aprobada";
// Dado unos apuntes de una secretaria crear una lista 
// de alumnos: nombre, nota, estado. 

interface IAlumno{
    nombre: string;
    edad: number;
    estado: boolean;
}

const registros: any[] = apuntes.split(", ");
console.log(registros);

let alumnos: IAlumno[] = []; 
for(let registro of registros){
    const atributos: any[] = registro.split(" ");
    const newAlu:IAlumno = {
        nombre: atributos[0],
        edad: atributos[1],
        estado: (atributos[2].search(/apr([a-z]{1,3})b/) == -1 ? false : true)
    };    
    
    alumnos.push(newAlu);
}

console.log(alumnos);
