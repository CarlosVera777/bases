// DESAFIO ********************
var apuntes = "Juan 16 aprobado, Jose 10 reprobado, Ana 15 aprobada";
var registros = apuntes.split(", ");
console.log(registros);
var alumnos = [];
for (var _i = 0, registros_1 = registros; _i < registros_1.length; _i++) {
    var registro = registros_1[_i];
    var atributos = registro.split(" ");
    var newAlu = {
        nombre: atributos[0],
        edad: atributos[1],
        estado: (atributos[2].search(/apr([a-z]{1,3})b/) == -1 ? false : true)
    };
    alumnos.push(newAlu);
}
console.log(alumnos);
