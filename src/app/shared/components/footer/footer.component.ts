import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit, OnDestroy {
  cantidadTotalCarrito: number = 0;
  subscriptionCarrito: Subscription;

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    //Obtener valor inicial
    this.cantidadTotalCarrito = this.carritoService.carrito.cantidadTotal;
    //Subscribirse a observable para ver los cambios(4.Nos subcribimos a RS)
    this.subscriptionCarrito = this.carritoService.getCarritoChanges().subscribe((changesCarrito) => {
                                  console.log("GetCarritoChanges en footer ->", changesCarrito);
                                  this.cantidadTotalCarrito = changesCarrito.cantidadTotal;
                                });
  }

  ngOnDestroy(): void {
      this.subscriptionCarrito?.unsubscribe();
  }
}
