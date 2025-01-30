import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit {

  items: Models.Store.IItem[];
  cargando: boolean = true;
  carrito: Models.Store.ICarrito;

  constructor() {
    this.loadItems();
    this.initCarrito();
  }

  ngOnInit() {}

  loadItems() {
    setTimeout(() => {
      this.items = DataDemo;
      this.cargando = false;
      console.log('items ->', this.items);
    }, 2000);
  }

  initCarrito() {
    this.carrito = {
      total: 0,
      cantidadTotal: 0,
      items: []
    }
    console.log("this.carrito ->", this.carrito);
  }

  addItem(item: Models.Store.IItem, index: number) {
    console.log("addItem",item.price, index);
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
  }

  removeItem(item: Models.Store.IItem) {
    console.log("removeItem ->", item);
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

  validateInput() {
    console.log("validateInput()");
  }

  updateInput(ev: any) {
    console.log("updateInput() -> ", ev);
  }
}

const DataDemo: Models.Store.IItem[] = [
  {
    id: '0001',
    name: 'Hamburguesa',
    description: 'Con queso, salsas, papas',
    price: 7.50,
    image: '/assets/images/hamburguesa.webp'
  },
  {
    id: '0002',
    name: 'Hamburguesa Especial',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime asperiores ex quia, nostrum laboriosam recusandae ea eaque explicabo cupiditate iure quo omnis aliquid beatae soluta odit aliquam. Velit, voluptate.',
    price: 9.50,
    // image: '/assets/images/hamburguesa.webp'
  },
  {
    id: '0003',
    name: 'Hamburguesa Doble',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime asperiores ex quia, nostrum laboriosam recusandae ea eaque explicabo cupiditate iure quo omnis aliquid beatae soluta odit aliquam. Velit, voluptate.',
    price: 11.50,
    image: '/assets/images/hamburguesa.webp'
  }
];
