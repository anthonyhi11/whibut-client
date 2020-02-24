import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      <Switch>
        <Route 
          exact path='/'
          component={LandingPage}
        />
      </Switch>
    </main>
  );
}

export default App;