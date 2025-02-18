// |----- DESAFIO -----| //
// Consultar el total de ventas x dia especifico
type Dia = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes'
interface Venta {
    dia: Dia;
    ventas: number[]
}

const ventasArray: Venta[] = [
    {dia: 'Lunes', ventas: [10, 30, 45, 50] },
    {dia: 'Martes', ventas: [20, 30, 45, 30] },
    {dia: 'Viernes', ventas: [90, 30, 45, 5] },
    {dia: 'Lunes', ventas: [10, 50, 45, 80] },
];

function reporteByDia(dia: Dia): string {
    // let total: number = 0;
    // for(let venta of ventasArray){
    //     if(venta.dia == dia){
    //         venta.ventas.forEach((item) => {
    //             total += item;
    //         });
    //     }
    // }

    let total: number = 0;
    ventasArray.map((value, index) => {
        if(value.dia == dia){
            value.ventas.forEach((venta) => {
                total += venta;
            });
        }
    });
    
    // let total: number = 0;
    // ventasArray.forEach( (reporteDia) => {
    //     if (reporteDia.dia == dia) {
    //         reporteDia.ventas.forEach( (venta) => {
    //             total = total + venta
    //         })
    //     }
    // })
    return `Las ventas totales de los dias ${dia} es: ${total}`
}

// const msg = reporteByDia('Lunes');
const msg = reporteByDia('Martes');
console.log('msg -> ', msg);



