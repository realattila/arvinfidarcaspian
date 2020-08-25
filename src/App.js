import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Home from './components/Home';
import NotFound from './components/NotFound';
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
