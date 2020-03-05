import React from 'react';
import BookActivity from '../ActivityCards/BookActivity'
import WhibutContext from '../WhibutContext'
import Navbar from '../Navbar/Navbar'
import BookForm from '../Forms/BookForm';
import BooksApiService from '../services/books-api-service';
import Footer from '../Navbar/Footer';

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
          <Navbar history={this.props.history}/>
          <Footer history={this.props.history}/>
          <div className='activity-dash'>
            <div className='activity-dash-content'>
              <h1>Books</h1>
                <button className='activity-add-button' onClick={this.handleClick}>+</button>
                <p className='add-text' onClick={this.handleClick}>Add Book</p>
                <div className='randomdiv'>
                  {this.context.isAddActive && <BookForm history={this.props.history}/>}
                </div>
              <section className='activity-results'>
                {content}
              </section>
            </div>
          </div>
        </div>
      )
    }
  }