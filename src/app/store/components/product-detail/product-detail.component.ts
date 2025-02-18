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
  @Input() item: Models.Store.IItem;  // Input de componente
  cantxProducto: number = 0;
  colorStock: '#f5f596' | '#fde2e2' | '#dfe7d6' = '#f5f596';

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.getColorProducto();
  }

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

  getColorProducto() {
    if(this.item.stock == 0) {
      this.colorStock = "#fde2e2";
    } else if(this.item.stock < 5) {
      this.colorStock = "#f5f596";
    } else {
      this.colorStock = "#dfe7d6";
    }
  }

}
