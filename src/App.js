import React, { useEffect } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import ProductsService from './api/products';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  // initial state for products
  useEffect(() => {
    ProductsService.getProducts();
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route
              path='/product/:id'
              exact
              component={Product}
            />

            <Route
              path='/products'
              exact
              component={Products}
            />
            <Route
              path='/contact'
              exact
              component={Contact}
            />
            <Route path='/about' exact component={About} />
            <Route path='/' exact component={Home} />
            <Route path='/' component={NotFound} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
