import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../services/product';
import { ProductState } from '../state/product.reducer';
import { getProcuctCart } from '../state/product.selector';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {

  constructor(private productStore: Store<ProductState>) { }


  cartList$: Observable<Product[]> = this.productStore.select(getProcuctCart);


}
