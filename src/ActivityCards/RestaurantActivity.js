import React from 'react';
import './Activity.css';
import WhibutContext from '../WhibutContext';
import RestaurantsApiService from '../services/restaurants-api-service';

export default class RestaurantActivity extends React.Component {
  
  handleDelete = (e) => {
    e.preventDefault();
    const restId = this.props.id;
    RestaurantsApiService.deleteRest(restId)
    this.context.deleteRest(restId);
  }

  static contextType = WhibutContext;
  render() {
    return (
      <div className='activity-div'>
        <h3 className='activity-title'>{this.props.name}</h3>
        <p className='activity-genre'>{this.props.type}</p>
        <p className={this.props.rating > 7 ? 'activity-rating-good': 'activity-rating-ok' && this.props.rating < 5 ? 'activity-rating-bad' : 'activity-rating-ok' }>{this.props.rating}</p>
        <p className='activity-comments'>{this.props.comments}</p>
        <button className='activity-deletebutton' onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}