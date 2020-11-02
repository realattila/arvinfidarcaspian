import { PRODUCTS } from '../actions/types';

const initialState = [];
export default function products(
  state = initialState,
  action = {}
) {
  if (action.type === PRODUCTS) {
    return action.payload;
  } else return state;
}
