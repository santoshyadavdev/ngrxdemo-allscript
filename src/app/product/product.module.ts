import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { productReducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './state/product.effects';


@NgModule({
  declarations: [ProductComponent, ProductListComponent,
    ProductCartComponent,
    ProductAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ProductRoutingModule,
    MatTableModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule { }
