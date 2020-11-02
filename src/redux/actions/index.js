import {
  PRODUCTS,
  AD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

export const Products = (data) => {
  return {
    type: PRODUCTS,
    payload: data,
  };
};

export const AdToCart = (data) => {
  return {
    type: AD_TO_CART,
    payload: data,
  };
};

export const RemoveFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
