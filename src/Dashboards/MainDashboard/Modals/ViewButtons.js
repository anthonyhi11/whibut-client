import React from 'react';
import WhibutContext from '../../../WhibutContext';

import './viewbuttons.css'

export default class ViewButtons extends React.Component {

  handleMovieClick = () => {
    this.props.history.push('/dashboard/movies')
  }

  handleTvClick = () => {
    this.props.history.push('/dashboard/tv')
  }
  handleBooksClick = () => {
    this.props.history.push('/dashboard/books')
  }
  handleRestClick = () => {
    this.props.history.push('/dashboard/restaurants')
  }

  
  static contextType = WhibutContext;
  render() {
    return (
      <div className='viewbuttons'>
        <div className='buttons-container'>
        <button onClick={this.handleMovieClick} className='view'>Movies</button>
        <button onClick={this.handleTvClick} className='view'>TV</button>
        <button onClick={this.handleRestClick} className='view'>Restaurants</button>
        <button onClick={this.handleBooksClick} className='view'>Books</button>
        </div>
      </div>
    )
  }
}