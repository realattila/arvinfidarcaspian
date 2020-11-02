import {
  AD_TO_CART,
  REMOVE_FROM_CART,
} from '../actions/types';
import _ from 'lodash';

const initialState = [];
export default function basket(
  state = initialState,
  action = {}
) {
  if (action.type === AD_TO_CART) {
    return _.uniqBy(
      [...state, action.payload],
      function (e) {
        return e.id;
      }
    );
  } else if (action.type === REMOVE_FROM_CART) {
    return _.filter(state, function (item) {
      return item.id !== action.payload;
    });
  } else {
    return state;
  }
}
