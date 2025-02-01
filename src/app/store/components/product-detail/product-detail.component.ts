import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  // Input de componentes
  @Input() item: Models.Store.IItem;
  @Input() index: number;
  // Output de Eventos personalizados
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  //Variables
  carrito: Models.Store.ICarrito;
  cantxProducto: number = 0;

  constructor() { }

  ngOnInit() {}

  addItemHijo(){
    console.log("addItemHijo()");
    this.add.emit();
    this.cantxProducto++;
  }

  removeItemHijo(){
    console.log("removeItemHijo()");
    this.remove.emit();
    if(this.cantxProducto>0){
      this.cantxProducto--;
    }
  }
}
