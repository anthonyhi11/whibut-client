import React from 'react';

const WhibutContext = React.createContext({
  books: [],
  movies: [],
  restaurants: [],
  tv: [],
  loginActive: false,
  signupActive: false,
  isAddActive: false,
  handleLandingCancel: () => {},
  handleLandingSubmit: () => {},
  handleFormCancel: () => {},
  handleAddClick: () => {},
  handleLoginClick: () => {},
  handleSignupClick: () => {},
  handleCancel: () => {},
  addBook: () => {},
  addMovie: () => {},
  addTv: () => {},
  addRest: () => {},
  deleteMovie: () => {},
  deleteTv: () => {},
  deleteRest: () => {},
  deleteBook: () => {},
  getMovies: () => {},
  getBooks: () => {},
  getTv: () => {},
  getRestaurants: () => {},
  handleSubmit: () => {},
})

export default WhibutContext