import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Models } from 'src/app/models/models';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  // Input de componentes
  @Input() item: Models.Store.IItem;
  //Variables
  cantxProducto: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {}

  addItemHijo(){
    console.log("addItemHijo()");
    this.cantxProducto++;
    this.carritoService.addItemPadre(this.item);
  }

  removeItemHijo(){
    console.log("removeItemHijo()");
    if(this.cantxProducto>0){
      this.cantxProducto--;
      this.carritoService.removeItemPadre(this.item);
    }
  }
}
