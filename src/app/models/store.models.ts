export namespace ModelsStore {
    export interface IItem {
        id?: string;
        name: string;
        description: string;
        price: number;
        image?: string;
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
