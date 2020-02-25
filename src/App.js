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
import Settings from './Settings';


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

  addMovie = (newMovie) => {
    this.setState({
      movies: [...this.state.movies, newMovie]
    })
  }

  addTv = (newTv) => {
    this.setState({
      tv: [...this.state.tv, newTv]
    })
  }

  addRest = (newRest) => {
    this.setState({
      restaurants: [...this.state.restaurants, newRest]
    })
  }

  deleteMovie = (movieId) => {
    this.setState({
      movies: this.state.movies.filter(movie => movie.id !== movieId)
    })
  }

  deleteTv = (tvId) => {
    this.setState({
      tv: this.state.tv.filter(show => show.id !== tvId)
    })
  }

  deleteBook = (bookId) => {
    this.setState({
      books: this.state.books.filter(book => book.id !== bookId)
    })
  }

  deleteRest = (restId) => {
    this.setState({
      restaurants: this.state.restaurants.filter(rest => rest.id !== restId)
    })
  }

  static contextType = WhibutContext;
  render() {
    const value = {
      handleAddClick: this.handleAddClick,
      isAddActive: this.state.isAddActive,
      handleCancel: this.handleCancel,
      addBook: this.addBook,
      addMovie: this.addMovie,
      addRest: this.addRest,
      addTv: this.addTv,
      books: this.state.books,
      movies: this.state.movies,
      restaurants: this.state.restaurants,
      tv: this.state.tv,
      deleteMovie: this.deleteMovie,
      deleteTv: this.deleteTv,
      deleteBook: this.deleteBook,
      deleteRest: this.deleteRest,
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
              component={MoviesDashboard}
              />
              <Route 
              path='/dashboard/tv'
              component={TvDashboard}
              />
              <Route 
              path='/dashboard/books'
              component={BooksDashboard}
              />
              <Route 
              path='/dashboard/restaurants'
              component={RestaurantsDashboard}
              />
              <Route 
                path='/settings'
                component={Settings}
              />
          </Switch>
        </main>
      </WhibutContext.Provider>
    );
  }
}

export default App;