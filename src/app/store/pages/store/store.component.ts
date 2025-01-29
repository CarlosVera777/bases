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

  constructor() {
    this.loadItems();
  }

  ngOnInit() {}

  loadItems() {
    setTimeout(() => {
      this.items = DataDemo;
      this.cargando = false;
      console.log('items ->', this.items);
    }, 2000);
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
