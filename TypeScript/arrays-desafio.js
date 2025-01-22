// |----- DESAFIO -----| //
var ventasArray = [
    { dia: 'Lunes', ventas: [10, 30, 45, 50] },
    { dia: 'Martes', ventas: [20, 30, 45, 30] },
    { dia: 'Viernes', ventas: [90, 30, 45, 5] },
    { dia: 'Lunes', ventas: [10, 50, 45, 80] },
];
function reporteByDia(dia) {
    // let total: number = 0;
    // for(let venta of ventasArray){
    //     if(venta.dia == dia){
    //         venta.ventas.forEach((item) => {
    //             total += item;
    //         });
    //     }
    // }
    var total = 0;
    ventasArray.map(function (value, index) {
        if (value.dia == dia) {
            value.ventas.forEach(function (venta) {
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
    return "Las ventas totales de los dias ".concat(dia, " es: ").concat(total);
}
// const msg = reporteByDia('Lunes');
var msg = reporteByDia('Martes');
console.log('msg -> ', msg);
