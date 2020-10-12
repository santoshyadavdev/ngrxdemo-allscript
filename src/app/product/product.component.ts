import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './services/product';
import { GetProductList } from './state/product.action';
import { ProductState } from './state/product.reducer';
import { getProductList } from './state/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList$: Observable<Product[]> = this.productStore.select(getProductList);

  constructor(private productStore: Store<ProductState>) { }

  ngOnInit() {
    this.productStore.dispatch(GetProductList());
  }
}
