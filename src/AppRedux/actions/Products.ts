import { Dispatch } from 'redux'
import { Product } from '../../typings.t';

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  RESET_GET_PRODUCTS,

  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_COUNT,
  SUBTRACT_PRODUCT_COUNT
} from '../constants/Products';

//get Products
export function getProducts() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_PRODUCTS_BEGIN,
    });

    const promise = new Promise(async (resolve, reject) => {
       await fetch("https://fakestoreapi.com/products")
       .then((res) => res.json())
       .then((res: Product[]) => {
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            data: res,
          });
          dispatch({
            type: RESET_GET_PRODUCTS,
          });

          resolve(res);
        }
      ).catch((err: any) => {
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          data: err.response,
        });
        dispatch({
          type: RESET_GET_PRODUCTS,
        });

        reject(err);
      })
    });

    return promise;
  };
}

//Add product to cart
export function addProduct(product: Product) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      data: product
    });
  };
}

//Remove product from cart
export function removeProduct(productId: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      data: productId
    });
  };
}

//Add product count
export function AddProductCount(productId: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_PRODUCT_COUNT,
      data: productId
    });
  };
}

//Subtract product count
export function subtractProductCount(productId: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SUBTRACT_PRODUCT_COUNT,
      data: productId
    });
  };
}
