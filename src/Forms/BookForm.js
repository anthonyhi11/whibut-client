import React from 'react';
import WhibutContext from '../WhibutContext';
import BooksApiService from '../services/books-api-service';
import './addform.css';

export default class BookForm extends React.Component {
  handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const author = e.target.author.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;

    const newBook = {
      activity: 'books',
      title: title,
      author: author,
      genre: genre,
      rating: rating,
      comments: comments,
    };
    BooksApiService.addBook(newBook).then((book) => {
      this.context.addBook(book);
    });
    this.context.handleCancel();
    this.props.history.push(`/dashboard/${newBook.activity}`);
  };
  static contextType = WhibutContext;
  render() {
    return (
      <div className="add-form-modal">
        <form onSubmit={this.handleAddBook} className="add-form-form">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="ex. White Fang" required />
          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" placeholder="Suspense" required />
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" placeholder="Jack London" required />
          <label htmlFor="rating">Rating (1-10)</label>
          <input type="number" id="rating" name="rating" min="1" max="10" placeholder="1" required />
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" placeholder="What do you want to remember"></textarea>
          <button className="add-form-button" type="submit">
            Add
          </button>
          <p className="cancel-add-form" onClick={this.context.handleCancel}>
            Cancel
          </p>
        </form>
      </div>
    );
  }
}
