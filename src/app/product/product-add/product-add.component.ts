import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductState } from '../state/product.reducer';
import { AddProduct } from '../state/product.action';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private productStore: Store<ProductState>
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      imageUrl: new FormControl(''),
      description: [''],
    });
  }

  addProduct(): void {
    // this.productService.addProduct(this.productForm.getRawValue());
    this.productStore.dispatch(AddProduct({ product: this.productForm.getRawValue() }));
  }

}
