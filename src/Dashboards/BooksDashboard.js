import React from 'react';
import BookActivity from '../ActivityCards/BookActivity'
import WhibutContext from '../WhibutContext'
import Navbar from '../Navbar/Navbar'
import BookForm from '../Forms/BookForm';
import BooksApiService from '../services/books-api-service';

export default class BooksDashboard extends React.Component {
  componentDidMount() {
    BooksApiService.getBooks()
      .then(books => {
        this.context.getBooks(books)
      })
  }

  handleClick = () => {
    this.context.handleAddClick();
  }

  renderBooks() {
    const { books } = this.context;
    let results = books.map((book, i) => {
      return <BookActivity
                id={book.id}
                title={book.title}
                genre={book.genre}
                author={book.author}
                rating={book.rating}
                key={i}
                comments={book.comments} 
              />
    })
    return results
  }

  
    static contextType = WhibutContext
    render() {
      let content = this.renderBooks();
      return (
        <div>
          <h1>whibut</h1>
          <h2>Books</h2>
          <section className='buttons'>
            <button className='button' onClick={this.handleClick}>Add</button>
            {this.context.isAddActive && <BookForm history={this.props.history}/>}
          </section>
          <section className='results'>
            {content}
          </section>
        <Navbar history={this.props.history}/>
        </div>
      )
    }
  }