import React from 'react';
import WhibutContext from '../WhibutContext'
import uuid from 'uuid/v4';

export default class TvForm extends React.Component {

  handleAddTv = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const network = e.target.network.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;

    let id = uuid();
    const newTv = {
    'id': id,
    'activity': 'tv',
    'title': title,
    'network': network,
    'genre': genre,
    'rating': rating,
    'comments': comments
    }
    this.context.addTv(newTv);
    this.context.handleCancel();
    this.props.history.push(`/dashboard/${newTv.activity}`)
  }

  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <h2>Add a TV Show</h2>
        <form onSubmit={this.handleAddTv} id='form'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' placeholder='Ex. Friends' required />
          <label htmlFor='genre'>Genre</label>
          <input type='text' id='genre' name='genre' placeholder='Sitcom' required/>
          <label htmlFor='network'>Network</label>
          <input type='text' id='network' name='network' placeholder='NBC'/>
          <label htmlFor='rating'>Your Rating (1-10)</label>
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