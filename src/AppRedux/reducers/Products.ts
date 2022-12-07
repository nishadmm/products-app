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

const initialState = {
  getProductsBegin: false,
  getProductsSuccessData: null,
  getProductsFailureData: null,

  cartItems: []
};

export const products = (state : any = initialState, action: any) => {
  const data = action.data;


  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        getProductsBegin: true,
        getProductsSuccessData: null,
        getProductsFailureData: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProductsBegin: false,
        getProductsSuccessData: data,
        getProductsFailureData: null,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        getProductsBegin: false,
        getProductsSuccessData: null,
        getProductsFailureData: data,
      };
    case RESET_GET_PRODUCTS:
      return {
        ...state,
        getProductsBegin: false,
        getProductsSuccessData: null,
        getProductsFailureData: null,
      };

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, {...data, count:1}]
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((product: Product) => product?.id !== data )
      };
    case ADD_PRODUCT_COUNT:
      return {
        ...state,
        cartItems:  state.cartItems.map((product: Product) => product?.id === data ? {...product, count: product.count + 1} : product )
      };
    case SUBTRACT_PRODUCT_COUNT:
      return {
        ...state,
        cartItems:  state.cartItems.map((product: Product) => product?.id === data ? {...product, count: product.count - 1} : product )
      };


    default:
      return state;
  }
};
