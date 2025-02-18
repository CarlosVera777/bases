//EJEMPLO:

import { Database } from "./database";
import { Interaction } from "./interaction";
import { IPedido } from "./models";

// class -> base datos
// class -> interaccion con el usuario
// class -> store -> con un metodo para hacer un pedido

class StoreComponent {
    db = new Database();
    interaction = new Interaction();

    constructor() {
        
    }

    async getPedidos(userId: number){
        this.interaction.showAlert("solicitando pedidos del usurio:" + userId);
        const res: boolean = await this.db.get("Pedidos", userId);
        if(res){
            this.interaction.showAlert("Pedidos impresos con exito!");
        }
    }

    async savePedido(pedido: IPedido){
        this.interaction.showAlert("Enviando tu pedido...");
        const res: boolean = await this.db.save("Pedidos", pedido);
        if(res){
            this.interaction.showAlert("Pedido enviado con exito!");
        }
    }
}

async function action(){
    const store = new StoreComponent();
    const pedido1: IPedido = {userId: 1, name: "Carlos", items: [{name: "Pizza Hat Familiar", cant: 1, price: 45}]}
    const pedido2: IPedido = {userId: 1, name: "Carlos", items: [{name: "Pepsi 2L", cant: 1, price: 8}]}
    const pedido3: IPedido = {userId: 2, name: "Andrea", items: [{name: "Pollo a la brasa", cant: 1, price: 70}]}
    await store.savePedido(pedido1);
    await store.savePedido(pedido2);
    await store.savePedido(pedido3);
    console.log("PEDIDOS SOLICITADOS:");
    await store.getPedidos(1);
}

action();

//DESAFIO:
//♦ En models:
//  •  Agregar el campo userId: number
//• En Clases:
//  • Cuando guardamos el pedido debemos ingresar el userId
//     const pedido1: IPedido = {userId: 1, name: "Juan", items: [{name: "pizza", cant: 1, price: 10}]};
//     store.savePedido(pedido1);

//♦ En Database:
//  • Crear una variable pedidos de tipo IPedido[] 
//    donde guardaremos los pedidos.

//♦ En StoreComponent:
//  • Implementar el metodo async getPedidos(userId:string)
//    suponer que dura en leer de la BD 3 segundos
//    este imprime cada uno de los pedidos del 
//    usuario cuyo id = userId.

//NECESARIO SABER:
// tipado
// variables - metodos - funciones
// condicionales
// bucles
// arrays - funciones flecha
// variables de tipo objeto
// async - await - promesas
// clases
