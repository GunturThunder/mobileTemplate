/* eslint-disable prettier/prettier */
import { ADD_TOO_CART, GET_DETAIL, GET_DETAIL_FULLFILED, GET_DETAIL_REJECTED, REMOVE_FROM_CART, SEARCH_TITLE, TEST } from "./actionTypes";
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


export const getDetail = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  return {
    type: GET_DETAIL,
    payload: url
  };
};

export const getDetailFulfilled = (data: any) => {
  return {
    type: GET_DETAIL_FULLFILED,
    payload:data
  };
};

export const getDetailRejected = (data: any) => {
  return {
    type: GET_DETAIL_REJECTED,
    payload:data
  };
};

export const searchTitle = (data: string) => {
  return {
    type: SEARCH_TITLE,
    payload:data
  };
};