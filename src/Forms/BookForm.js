import React from 'react';
import WhibutContext from '../WhibutContext';
import uuid from 'uuid/v4';

export default class BookForm extends React.Component {

  handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const author = e.target.author.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;

    let id = uuid();
    const newBook = {
    'id': id,
    'activity': 'Books',
    'title': title,
    'author': author,
    'genre': genre,
    'rating': rating,
    'comments': comments
    }
    this.context.addBook(newBook);
    this.context.handleCancel();
  }
  static contextType = WhibutContext;
  render() {
    return (
        <div className='modal'>
          <h2>Add a Book</h2>
          <form onSubmit={this.handleAddBook} id='form'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' placeholder='ex. White Fang' />
            <label htmlFor='genre'>Genre</label>
            <input type='text' id='genre' name='genre' placeholder='Suspense'/>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' name='author' placeholder='Jack London' />
            <label htmlFor='rating'>Rating</label>
            <input type='number' id='rating' name='rating' min='1' max='10' placeholder='1' />
            <label htmlFor='comments'>Comments</label>
            <textarea id='comments' name='comments' placeholder="What do you want to remember"></textarea>
            <button type='submit'>Submit</button>
            <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
          </form>
        </div>
    )
  }
}