import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import Home from './Home';
import Register from './Register';
import Login from './Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
