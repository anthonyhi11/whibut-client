import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './MainDashboard/MainDashboard';
import ActivityDashboard from './ActivityDashboard';
import Fixtures from './Fixtures/fixtures'



class App extends React.Component {

  constructor(props) {
    super(props) 
    this.state ={
      movies: Fixtures.movies,
      books: Fixtures.books,
      tv: Fixtures.tv,
      restaurants: Fixtures.restaurants
    }
  }

  render() {
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
          <Route 
            path='/dashboard/movies'
            render={(routeProps) =>
              <ActivityDashboard 
                activity={this.state.movies}
              />}
            />
            <Route 
            path='/dashboard/tv'
            render={(routeProps) =>
              <ActivityDashboard 
                activity={this.state.tv}
              />}
            />
            <Route 
            path='/dashboard/books'
            render={(routeProps) =>
              <ActivityDashboard 
                activity={this.state.books}
              />}
            />
            <Route 
            path='/dashboard/restaurants'
            render={(routeProps) =>
              <ActivityDashboard 
                activity={this.state.restaurants}
              />}
            />
        </Switch>
      </main>
    );
  }
}

export default App;