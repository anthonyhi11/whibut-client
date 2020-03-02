import React from 'react';
import WhibutContext from '../WhibutContext';
import RestaurantsApiService from '../services/restaurants-api-service';

export default class RestaurantForm extends React.Component {

  handleAddRest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const website = e.target.url.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;

    const newRest = {
    'activity': 'restaurants',
    'restaurant_name': name,
    'restaurant_type': type,
    'website': website,
    'rating': rating,
    'comments': comments
    }

    RestaurantsApiService.addRest(newRest)
      .then(rest => {
        this.context.addRest(rest); //add to context
        this.context.handleCancel(); //gets rid of form
        this.props.history.push(`/dashboard/${rest.activity}`) //takes you to restaurant dash
      })
  }
  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <h2>Add a Restaurant</h2>
        <form onSubmit={this.handleAddRest} id='form'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Ex. McDonalds' required/>
          <label htmlFor='type'>Type of Restaurant</label>
          <input type='text' id='type' name='type' placeholder='Fast Food' required />
          <label htmlFor='url'>Website</label>
          <input type='text' id='url' name='url' placeholder='Not Required' defaultValue='N/A' />
          <label htmlFor='rating'>Rating (1-10)</label>
          <input type='number' id='rating' name='rating' min='1' max='10' placeholder='1' required />
          <label htmlFor='comments'>Comments</label>
          <textarea id='comments' name='comments' placeholder="What do you want to remember"></textarea>
          <button type='submit'>Submit</button>
          <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}