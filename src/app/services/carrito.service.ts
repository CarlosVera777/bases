import { Injectable } from '@angular/core';
import { Models } from '../models/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  //Crear sujeto a ser Observable (1.crear fomoso)
  private carrito$ = new Subject<Models.Store.ICarrito>();
  carrito: Models.Store.ICarrito;

  constructor() {
    this.initCarrito();
  }

  private initCarrito() {
    this.carrito = {
      total: 0,
      cantidadTotal: 0,
      items: []
    }
    console.log("this.carrito init carritoService ->", this.carrito);
  }

  getCarritoChanges(){
    //(2.Crear su red social)
    return this.carrito$.asObservable();
  }

  addItemPadre(item: Models.Store.IItem) {
    // console.log("addItemPadre()", item);
    let exist: boolean = false;
    this.carrito.items.every((itemExist) => {
      if(itemExist.item.id == item.id){
        itemExist.cant++;
        exist = true;
        return false;
      }
      return true;
    });
    if(!exist){
      this.carrito.items.push({
        item: item,
        cant: 1
      });
    }
    this.getTotalCarrito();
  }

  removeItemPadre(item: Models.Store.IItem){
    // console.log("removeItemPadre()", item);
    const existIndex = this.carrito.items.findIndex(itemExist => {
      if(itemExist.item.id == item.id){
        return true;
      }
      return false;
    });
    if(existIndex >= 0){
      console.log("exist", existIndex);
      if(this.carrito.items[existIndex].cant == 1){
        this.carrito.items.splice(existIndex, 1);
      }else{
        this.carrito.items[existIndex].cant--;
      }
    }
    this.getTotalCarrito();
  }

  getTotalCarrito(){
    let total = 0;
    let cantidadTotal = 0;
    this.carrito.items.forEach(producto => {
      total += (producto.item.price * producto.cant);
      cantidadTotal += producto.cant;
    });
    this.carrito.total = total;
    this.carrito.cantidadTotal = cantidadTotal;
    console.log("this.carrito->", this.carrito);
    //Emitir la transmision(3.emitir nueva publicacion en RS)
    this.carrito$.next(this.carrito);
  }
}
