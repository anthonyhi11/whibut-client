import React from 'react';
import './Activity.css';
import WhibutContext from '../WhibutContext';
import TvApiService from '../services/tv-api-service';

export default class TvActivity extends React.Component {

  handleDelete = (e) => {
    e.preventDefault();
    const tvId = this.props.id;
    TvApiService.deleteTv(tvId)
    this.context.deleteTv(tvId)
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