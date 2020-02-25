import React from 'react';
import BookActivity from '../ActivityCards/BookActivity'
import AddModal from './MainDashboard/Modals/AddModal'
import WhibutContext from '../WhibutContext'
import Footer from '../Footer/Footer'

export default class BooksDashboard extends React.Component {
  handleClick = () => {
    this.context.handleAddClick();
  }
    static contextType = WhibutContext
    render() {
      const { books } = this.context;
      let results = books.map((book, i) => {
        return <BookActivity
                  id={book.id}
                  title={book.title}
                  genre={book.type}
                  author={book.url}
                  rating={book.rating}
                  key={i}
                  comments={book.comments} 
                />
      })
      return (
        <div>
          <h1>whibut</h1>
          <h2>Books</h2>
          <section className='buttons'>
            <button className='button' onClick={this.handleClick}>Add</button>
            {this.context.isAddActive && <AddModal />}
          </section>
          <section className='results'>
            {results}
          </section>
        <Footer history={this.props.history}/>
        </div>
      )
    }
  }