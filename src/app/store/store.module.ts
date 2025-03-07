import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { ProductComponent } from './pages/product/product.component';
import { IonContent } from '@ionic/angular/standalone';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StoreComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    IonContent,
    SharedModule
  ]
})

export class StoreModule { }
