import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/products' exact component={Products} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/about' exact component={About} />
        <Route path='/' exact component={Home} />
        <Route path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
