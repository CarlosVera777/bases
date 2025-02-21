export namespace ModelsStore {
    export interface IItem {
        id?: string;
        date?: Date;
        name: string;
        description: string;
        price: number;
        image?: string;
        stock: number;
    }  
    export interface IPedido { }
    export interface ICarrito {
        total: number;
        cantidadTotal: number;
        items: {
            item: IItem;
            cant: number;
        }[]
    }
}
