import React from 'react';
import { Link } from 'react-router-dom';
import WhibutContext from '../WhibutContext'

export default class TvForm extends React.Component {

  static contextType = WhibutContext;
  render() {
    return (
      <div class='modal'>
        <h2>Add a TV Show</h2>
        <form method="post" id='form'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' placeholder='Ex. Friends' />
          <label htmlFor='genre'>Genre</label>
          <input type='text' id='genre' name='genre' placeholder='Sitcom'/>
          <label htmlFor='network'>Network</label>
          <input type='text' id='network' name='network' placeholder='NBC' />
          <label htmlFor='rating'>Your Rating</label>
          <input type='number' id='rating' name='rating' min='1' max='10' placeholder='1' />
          <label htmlFor='comments'>Comments</label>
          <textarea id='comments' name='comments' placeholder="What do you want to remember"></textarea>
          <Link to='dashboard/tv'><button type='submit'>Submit</button></Link>
          <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}