/* eslint-disable prettier/prettier */
import { ADD_TOO_CART, REMOVE_FROM_CART, TEST } from "./actionTypes";
import { Product } from "./types";

export const testAction = () => {
  return {
    type: TEST
  };
};

export const addToCartAction = (product: Product) => {
  return {
    type: ADD_TOO_CART,
    payload:product
  };
};

export const removeFromCartAction = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    payload:product
  };
};