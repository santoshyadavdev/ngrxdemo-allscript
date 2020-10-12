import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { GetProductList, GetProductListFailure, GetProductListSuccess } from './product.action';


@Injectable()
export class ProductEffect {

  constructor(private actions$: Actions,
    private productService: ProductService) { }

  getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetProductList),
      mergeMap(() =>
        this.productService.getProductList().pipe(
          map((res) => GetProductListSuccess({ prodList: res })),
          catchError((error) => of(GetProductListFailure({ error })))
        )
      )
    ));
}
