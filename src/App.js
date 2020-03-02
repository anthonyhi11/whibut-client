import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './Dashboards/MainDashboard/MainDashboard';
import MoviesDashboard from './Dashboards/MoviesDashboard';
import TvDashboard from './Dashboards/TvDashboard';
import RestaurantsDashboard from './Dashboards/RestaurantsDashboard';
import BooksDashboard from './Dashboards/BooksDashboard'
import WhibutContext from './WhibutContext';
import Settings from './Settings';
import PrivateRoute from './services/private-route'


class App extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      movies: [],
      books: [],
      tv: [],
      restaurants: [],
      isAddActive: false,
      loginActive: false,
      signupActive: false,
    }
  }

  getMovies = (movies) => {
    this.setState({
     movies: movies,
    })
  }

  getBooks = (books) => {
    this.setState({
      books: books
    })
  }

  getTv = (shows) => {
    this.setState({
      tv: shows
    })
  }
  getRestaurants = (restaurants) => {
    this.setState({
      restaurants: restaurants
    })
  }

  handleAddClick = () => {
    this.setState({
      isAddActive: true
    })
  }
  handleLoginClick = () => {
    this.setState({
      loginActive: true
    })
  }
  handleSignupClick = () => {
    this.setState({
      signupActive: true
    })
  }

  handleCancel = () => {
    this.setState({
      isAddActive: false,
      loginActive: false,
      signupActive: false,
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
  handleSubmit = () => {
    this.props.history.push('/main')
  }

  static contextType = WhibutContext;
  render() {
    const value = {
      handleAddClick: this.handleAddClick,
      handleSignupClick: this.handleSignupClick,
      handleLoginClick: this.handleLoginClick,
      isAddActive: this.state.isAddActive,
      loginActive: this.state.loginActive,
      signupActive: this.state.signupActive,
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
      getMovies: this.getMovies,
      getRestaurants: this.getRestaurants,
      getBooks: this.getBooks,
      getTv: this.getTv,
      handleSubmit: this.handleSubmit
    }
    return (
      <WhibutContext.Provider value={value}>
        <main className='App'>
          <Switch>
            <Route 
              exact path='/'
              component={LandingPage}
            />
            <PrivateRoute
              path='/main'
              component={MainDashboard}
            />
            <PrivateRoute 
              path='/dashboard/movies'
              component={MoviesDashboard}
              />
              <PrivateRoute 
              path='/dashboard/tv'
              component={TvDashboard}
              />
              <PrivateRoute 
              path='/dashboard/books'
              component={BooksDashboard}
              />
              <PrivateRoute 
              path='/dashboard/restaurants'
              component={RestaurantsDashboard}
              />
              <PrivateRoute 
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