import { createReducer, on } from '@ngrx/store';
import { Product } from '../services/product';
import { AddProduct, AddProductToCart, GetProductListSuccess } from './product.action';

export interface ProductState {
    products: Product[];
    cart: Product[];
    error: string;
    filters: {
        minPrice: number;
        maxPrice: number;
    };
}

const initialState: ProductState = {
    products: [],
    cart: [],
    error: '',
    filters: {
        minPrice: 0,
        maxPrice: 0
    }
};


export const productReducer = createReducer(initialState,
    on(AddProduct, (state, { product }) => ({
        ...state,
        products: [...state.products, product]
    })),
    on(AddProductToCart, (state, { product }) => ({
        ...state,
        cart: [...state.cart, product]
    })),
    on(GetProductListSuccess, (state, { prodList }) => ({
        ...state,
        products: prodList
        // products :
    }))
);

