import React from 'react';
import MovieForm from '../Forms/MovieForm';
import WhibutContext from '../WhibutContext';
import MovieActivity from '../ActivityCards/MovieActivity';
import Footer from '../Footer/Footer';

export default class MoviesDashboard extends React.Component {

handleClick = () => {
  this.context.handleAddClick();
  this.props.history.push('/dashboard/movies')
}
  static contextType = WhibutContext
  render() {
    const { movies } = this.context;
    let results = movies.map((movie, i) => {
      return <MovieActivity
                title={movie.title}
                genre={movie.genre}
                actors={movie.actors}
                rating={movie.rating}
                key={i}
                id={movie.id}
                comments={movie.comments} 
              />
    })
    return (
      <div>
        <h1>whibut</h1>
        <h2>Movies</h2>
        <section className='buttons'>
          <button className='button' onClick={this.handleClick}>Add</button>
          {this.context.isAddActive && <MovieForm history={this.props.history}/>}
        </section>
        <section className='results'>
          {results}
        </section>
        <Footer history={this.props.history}/>
      </div>
    )
  }
}