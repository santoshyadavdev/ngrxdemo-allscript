import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from './product.reducer';

const productSelector = createFeatureSelector<ProductState>('product');

export const getProductList = createSelector(
    productSelector,
    (state) => state.products
);

export const getProcuctCart = createSelector(
    productSelector,
    (state) => state.cart
);
