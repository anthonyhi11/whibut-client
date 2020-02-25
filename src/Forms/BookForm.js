import React from 'react';
import { Link } from 'react-router-dom';
import WhibutContext from '../WhibutContext'

export default class BookForm extends React.Component {

  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <h2>Add a Book</h2>
        <form method="post" id='form'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' placeholder='ex. White Fang' />
          <label htmlFor='genre'>Genre</label>
          <input type='text' id='genre' name='genre' placeholder='Suspense'/>
          <label htmlFor='author'>author</label>
          <input type='text' id='author' name='author' placeholder='Jack London' />
          <label htmlFor='rating'>Rating</label>
          <input type='number' id='rating' name='rating' min='1' max='10' placeholder='1' />
          <label htmlFor='comments'>Comments</label>
          <textarea id='comments' name='comments' placeholder="What do you want to remember"></textarea>
          <Link to='dashboard/books'><button type='submit'>Submit</button></Link>
          <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}