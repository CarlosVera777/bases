import { Injectable } from '@angular/core';
import { Models } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  items: Models.Store.IItem[];

  constructor() {
    this.loadItems();
   }

  loadItems() {
    setTimeout(() => {
      this.items = DataDemo;
      // this.cargando = false;
      console.log('items ->', this.items);
    });
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