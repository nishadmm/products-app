import { createSelector } from "reselect";

import { Product } from '../../typings.t';


export const totalCartItems = createSelector((products: any) => products.cartItems, (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity: number, cartItem: Product) => accumulatedQuantity + cartItem.count,
    0
  )
);
