import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is home page
      </Route>
      <Route exact path="/starred">
        {' '}
        starred
      </Route>
      <Route>this is 404 page</Route>
    </Switch>
  );
}

export default App;
