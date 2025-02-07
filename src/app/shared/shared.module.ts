import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { RouterModule } from '@angular/router';
import { DetailCarritoComponent } from './components/detail-carrito/detail-carrito.component';
import { ShortPipe } from './pipes/short.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DetailCarritoComponent,
    ShortPipe
  ],
  imports: [
    CommonModule,
    NotificationsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DetailCarritoComponent,
    ShortPipe
  ]
})

export class SharedModule { }
