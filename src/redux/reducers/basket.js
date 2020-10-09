import { BASKET } from '../actions/types';

const initialState = [];
export default function basket(
  state = initialState,
  action = {}
) {
  if (action.type === BASKET) {
    return [...state, action.payload];
  } else return state;
}
