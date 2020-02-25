import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './Dashboards/MainDashboard/MainDashboard';
import MoviesDashboard from './Dashboards/MoviesDashboard';
import Fixtures from './Fixtures/fixtures'
import TvDashboard from './Dashboards/TvDashboard';
import RestaurantsDashboard from './Dashboards/RestaurantsDashboard';
import BooksDashboard from './Dashboards/BooksDashboard'
import WhibutContext from './WhibutContext';


class App extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      movies: [],
      books: [],
      tv: [],
      restaurants: [],
      isAddActive: false
    }
  }
componentDidMount() {
  this.setState({
    movies: Fixtures.movies,
    books: Fixtures.books,
    tv: Fixtures.tv,
    restaurants: Fixtures.restaurants,
  })
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

  addBook = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  static contextType = WhibutContext;
  render() {
    const value = {
      handleAddClick: this.handleAddClick,
      isAddActive: this.state.isAddActive,
      handleCancel: this.handleCancel,
      addBook: this.addBook,
      books: this.state.books,
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
              component={BooksDashboard}
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