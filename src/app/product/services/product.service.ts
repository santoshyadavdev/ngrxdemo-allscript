import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // productList: Product[] = [];
  // cartList: Product[] = [];

  // products$ = new BehaviorSubject<Product[]>([]);
  // cart$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  // addProduct(product: Product) {
  //   this.productList.push(product);
  //   return this.products$.next(this.productList);
  // }

  // getProductList(): Observable<Product[]> {
  //   return this.products$.asObservable();
  // }

  getProductList() {
    const productList: Product[] = [
      { name: 'Product1', category: 'Test', imageUrl: 'sdfds', description: 'test desc', price: 455 },
      { name: 'Product1', category: 'Test', imageUrl: 'sdfds', description: 'test desc', price: 455 },
      { name: 'Product1', category: 'Test', imageUrl: 'sdfds', description: 'test desc', price: 455 },
      { name: 'Product1', category: 'Test', imageUrl: 'sdfds', description: 'test desc', price: 455 }
    ];

    return of(productList);
  }

  // addProductToCart(cartProduct: Product) {
  //   this.cartList.push(cartProduct);
  //   this.cart$.next(this.cartList);
  // }

  // getCartList() {
  //   return this.cart$.asObservable();
  // }

}
