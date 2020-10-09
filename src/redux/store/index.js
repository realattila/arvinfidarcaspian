import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistCombineReducers,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const loggerMiddleware = createLogger();

const persistedReducer = persistCombineReducers(
  persistConfig,
  rootReducer()
);

let store = createStore(
  persistedReducer,
  applyMiddleware(thunk, loggerMiddleware)
);
let persistor = persistStore(store);
export { store, persistor };
