import axios from './config';
import { store } from '../redux/store';
import { Products } from '../redux/actions';

const getProducts = async () => {
  try {
    const response = await axios.get('/products.json');
    store.dispatch(Products(response.data));
  } catch (e) {
    return e.response;
  }
};

export default { getProducts };
