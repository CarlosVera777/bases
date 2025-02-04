import { Component, Inject, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';
import { CarritoService } from 'src/app/services/carrito.service';

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
  tituloPagina: string = "Tienda";

  // private carritoService = Inject(CarritoService);  //Declarar servicio Opc1
  constructor(  // Declarar servicio opc2 (Inyeccion)
    private carritoService: CarritoService 
  ) {
    this.loadItems();
  }

  ngOnInit() {
    this.carrito = this.carritoService.carrito;
    this.carritoService.getCarritoChanges().subscribe((changesCarrito) => {
      console.log("GetCarritoChanges en Store->", changesCarrito);
      this.carrito = changesCarrito;
    });
  }

  loadItems() {
    setTimeout(() => {
      this.items = DataDemo;
      this.cargando = false;
      console.log('items ->', this.items);
    }, 2000);
  }

  addItemPadre(item: Models.Store.IItem){
    // this.carrito = this.carritoService.carrito;
  }

  removeItemPadre(item: Models.Store.IItem){
    // this.carrito = this.carritoService.carrito;
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
