import { PRODUCTS } from './types';

export const Products = (data) => {
  return {
    type: PRODUCTS,
    payload: data,
  };
};
