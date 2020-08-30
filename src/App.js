import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Contact from './components/Contact';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path='/contact' exact component={Contact} />
        <Route path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
