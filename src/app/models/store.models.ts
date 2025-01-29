export namespace ModelsStore {
    export interface IItem {
        id?: string;
        name: string;
        description: string;
        price: number;
        image?: string;
    }
    
    export interface IPedido { }
    export interface ICarrito { }
}
