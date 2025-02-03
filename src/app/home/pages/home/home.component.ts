import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor( private carritoService: CarritoService ) { }

  ngOnInit() {}

  getCarrito(){
    console.log("Carrito Home:", this.carritoService.carrito);
  }
}
