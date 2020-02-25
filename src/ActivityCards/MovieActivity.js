import React from 'react';
import WhibutContext from '../WhibutContext'
import './Activity.css';

export default class MovieActivity extends React.Component {

  handleDelete = (e) => {
    e.preventDefault();
    const movieId = this.props.id;
    this.context.deleteMovie(movieId)
  }

  static contextType = WhibutContext;
  render() {
  return (
    <div>
      <h3>{this.props.title}</h3>
      <p>{this.props.actors}</p>
      <p>{this.props.genre}</p>
      <p>{this.props.rating}</p>
      <p>{this.props.comments}</p>
      <button className='deletebutton' onClick={this.handleDelete}>Delete</button>
    </div>
  )
  }
}