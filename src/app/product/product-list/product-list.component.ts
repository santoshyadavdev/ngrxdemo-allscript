import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../services/product';
import { AddProductToCart } from '../state/product.action';
import { ProductState } from '../state/product.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'description', 'actions'];
  @Input() prodList: Product[] = [];
  constructor(private productStore: Store<ProductState>) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.productStore.dispatch(AddProductToCart({ product }));
  }

}
