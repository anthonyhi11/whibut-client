import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './MainDashboard/MainDashboard';
function App() {
  return (
    <main className='App'>
      <Switch>
        <Route 
          exact path='/'
          component={LandingPage}
        />
        <Route
         path = '/main'
         component={MainDashboard}
        />
      </Switch>
    </main>
  );
}

export default App;