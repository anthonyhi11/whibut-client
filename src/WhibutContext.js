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
  handleCancel: () => {},
  addBook: () => {},
  addMovie: () => {},
  addTv: () => {},
  addRest: () => {},
})

export default WhibutContext