import { IPedido } from "./models";

export class Database {
    private credentials: any;
    pedidos: IPedido[] = [];

    constructor() {
        this.initConnection();
    }

    private initConnection(){
        //use credentials to connection
    }

    get(path: string, userId: number): Promise<boolean>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Usuario:", userId);
                console.log("------------------------------------")
                this.pedidos.forEach((pedido) => {
                    if(pedido.userId == userId){
                        pedido.items.forEach((item) => {
                            console.log("Nombre:", item.name);
                            console.log("Cantidad:", item.cant);
                            console.log("Precio:", item.price.toFixed(2));
                            console.log("------")
                        });
                    }
                });
                console.log("------------------------------------")
                resolve(true);
            }, 3000);
        });
    }

    save(path: string, data: IPedido): Promise<boolean>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.pedidos.push(data);
                resolve(true);
            }, 2000);
        });
    }
}
