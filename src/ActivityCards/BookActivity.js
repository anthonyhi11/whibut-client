import React from 'react';
import './Activity.css';
import WhibutContext from '../WhibutContext';
import BooksApiService from '../services/books-api-service'

export default class BookActivity extends React.Component {

handleDelete = (e) => {
  e.preventDefault();
  const bookId = this.props.id;
  BooksApiService.deleteBook(bookId)
  this.context.deleteBook(bookId)
}

  static contextType = WhibutContext;
  render()
    {
    return (
      <div className='activity-div'>
        <div className='activity-flex-container'>
          <h3 className='activity-title'>{this.props.title}</h3>
          <p className='activity-author'>by {this.props.author}</p>
          <p className='activity-genre'>{this.props.genre}</p>
          <p className='activity-comments'>{this.props.comments}</p>
          <button className='activity-deletebutton' onClick={this.handleDelete}>Delete</button>
        </div>
        <p className={this.props.rating > 7 ? 'activity-rating-good': 'activity-rating-ok' && this.props.rating < 5 ? 'activity-rating-bad' : 'activity-rating-ok' }>{this.props.rating}</p>
      </div>
    )
  }
}