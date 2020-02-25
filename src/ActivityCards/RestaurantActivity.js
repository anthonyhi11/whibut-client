import React from 'react';
import './Activity.css';
import WhibutContext from '../WhibutContext';

export default class RestaurantActivity extends React.Component {
  
  handleDelete = (e) => {
    e.preventDefault();
    const restId = this.props.id;
    this.context.deleteRest(restId);
  }

  static contextType = WhibutContext;
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.type}</p>
        <p>{this.props.rating}</p>
        <p>{this.props.comments}</p>
        <button className='deletebutton' onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}