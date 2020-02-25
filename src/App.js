import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './MainDashboard/MainDashboard';
import MoviesDashboard from './MoviesDashboard';
import Fixtures from './Fixtures/fixtures'
import TvDashboard from './TvDashboard';
import RestaurantsDashboard from './RestaurantsDashboard';
import BooksDashboard from './BooksDashboard';
import WhibutContext from './WhibutContext';


class App extends React.Component {

  constructor(props) {
    super(props) 
    this.state ={
      movies: Fixtures.movies,
      books: Fixtures.books,
      tv: Fixtures.tv,
      restaurants: Fixtures.restaurants,
      isAddActive: false
    }
  }

  handleAddClick = () => {
    this.setState({
      isAddActive: true
    })
  }

  handleCancel = () => {
    this.setState({
      isAddActive: false
    })
  }

  static contextType = WhibutContext;
  render() {
    const value = {
      handleAddClick: this.handleAddClick,
      isAddActive: this.state.isAddActive,
      handleCancel: this.handleCancel
    }
    return (
      <WhibutContext.Provider value={value}>
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
                <MoviesDashboard 
                  movies={this.state.movies}
                />}
              />
              <Route 
              path='/dashboard/tv'
              render={(routeProps) =>
                <TvDashboard 
                  tv={this.state.tv}
                />}
              />
              <Route 
              path='/dashboard/books'
              render={(routeProps) =>
                <BooksDashboard 
                  books={this.state.books}
                />}
              />
              <Route 
              path='/dashboard/restaurants'
              render={(routeProps) =>
                <RestaurantsDashboard 
                  restaurants={this.state.restaurants}
                />}
              />
          </Switch>
        </main>
      </WhibutContext.Provider>
    );
  }
}

export default App;