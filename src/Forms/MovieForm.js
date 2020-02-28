import React from 'react';
import WhibutContext from '../WhibutContext'
import uuid from 'uuid/v4'

export default class MovieForm extends React.Component {

  handleAddMovie = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;

    let id = uuid();
    const newMovie = {
    'id': id,
    'activity': 'movies',
    'title': title,
    'genre': genre,
    'rating': rating,
    'comments': comments
    }
    this.context.addMovie(newMovie);
    this.context.handleCancel();
    this.props.history.push(`/dashboard/${newMovie.activity}`)
  }

  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <h2>Add Movie</h2>
        <form onSubmit={this.handleAddMovie} id='form'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' placeholder='Ex. Parasite' required />
          <label htmlFor='genre'>Genre</label>
          <input type='text' id='genre' name='genre' placeholder='Suspense' required />
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