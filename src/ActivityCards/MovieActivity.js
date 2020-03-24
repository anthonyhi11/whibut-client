import React from 'react';
import WhibutContext from '../WhibutContext'
import './Activity.css';
import MoviesApiService from '../services/movies-api-service'

export default class MovieActivity extends React.Component {

  handleDelete = (e) => {
    const movieId = this.props.id;
    MoviesApiService.deleteMovie(movieId)
    this.context.deleteMovie(movieId)
  }

  static contextType = WhibutContext;
  render() {
  return (
    <div className='activity-div'>
      <h3 className='activity-title'>{this.props.title}</h3>
      <p className='activity-genre'>{this.props.genre}</p>
      <p className={this.props.rating > 7 ? 'activity-rating-good': 'activity-rating-ok' && this.props.rating < 5 ? 'activity-rating-bad' : 'activity-rating-ok' }>{this.props.rating}</p>
      <p className='activity-comments'>{this.props.comments}</p>
      <button className='activity-deletebutton' onClick={this.handleDelete}>Delete</button>
    </div>
  )
  }
}