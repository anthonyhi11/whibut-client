import React from 'react';
import { Link } from 'react-router-dom';
import WhibutContext from '../WhibutContext'

export default class RestaurantForm extends React.Component {

  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <h2>Add a Restaurant</h2>
        <form method="post" id='form'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Ex. McDonalds' />
          <label htmlFor='type'>Type of Restaurant</label>
          <input type='text' id='genre' name='genre' placeholder='Fast Food'/>
          <label htmlFor='url'>Website</label>
          <input type='text' id='url' name='url' placeholder='https://www.mcdonalds.com/' />
          <label htmlFor='rating'>Rating</label>
          <input type='number' id='rating' name='rating' min='1' max='10' placeholder='1' />
          <label htmlFor='comments'>Comments</label>
          <textarea id='comments' name='comments' placeholder="What do you want to remember"></textarea>
          <Link to='dashboard/restaurants'><button type='submit'>Submit</button></Link>
          <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}