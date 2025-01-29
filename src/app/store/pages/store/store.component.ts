import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit {

  carrito: Models.Store.ICarrito;
  items: Models.Store.IItem[];
  pedidos: Models.Store.IPedido[];

  constructor() { }

  ngOnInit() {}
}
