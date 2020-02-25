import React from 'react';
import './Activity.css';
import WhibutContext from '../WhibutContext';

export default class BookActivity extends React.Component {

handleDelete = (e) => {
  e.preventDefault();
  const bookId = this.props.id;
  this.context.deleteBook(bookId)
}

  static contextType = WhibutContext;
  render()
    {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
        <p>{this.props.genre}</p>
        <p>{this.props.rating}</p>
        <p>{this.props.comments}</p>
        <button className='deletebutton' onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}