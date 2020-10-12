import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCartComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // StoreModule.forFeature('product',{})
  ]
})
export class ProductModule { }
