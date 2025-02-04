import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Models } from 'src/app/models/models';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-detail-carrito',
  standalone: false,
  templateUrl: './detail-carrito.component.html',
  styleUrls: ['./detail-carrito.component.scss'],
})
export class DetailCarritoComponent  implements OnInit, OnDestroy {
  carrito: Models.Store.ICarrito;
  SubscriptionCarrito: Subscription;

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.carrito = this.carritoService.carrito;
    this.carritoService.getCarritoChanges().subscribe((changesCarrito) => {
      this.carrito = changesCarrito;
    });
  }

  ngOnDestroy(): void {
      this.SubscriptionCarrito?.unsubscribe();
  }
}
