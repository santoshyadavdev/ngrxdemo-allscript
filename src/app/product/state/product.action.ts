import { createAction, props } from "@ngrx/store";
import { Product } from '../services/product';

export const AddProduct = createAction('[Product] Add Product',
    props<{ product: Product }>()
);

export const GetProductList = createAction('[Product] Get Product');

export const GetProductListSuccess = createAction('[Product] Get Product',
    props<{ prodList: Product[] }>());


export const GetProductListFailure = createAction('[Product] Get Product',
    props<{ error: string }>());

export const AddProductToCart = createAction('[Product] Get Cart Product',
    props<{ product: Product }>());
