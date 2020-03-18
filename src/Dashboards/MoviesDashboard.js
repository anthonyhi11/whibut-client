import React from 'react';
import MovieForm from '../Forms/MovieForm';
import WhibutContext from '../WhibutContext';
import MovieActivity from '../ActivityCards/MovieActivity';
import Navbar from '../Navbar/Navbar';
import MoviesApiService from '../services/movies-api-service'
import './activitydash.css';
import Footer from '../Navbar/Footer';

export default class MoviesDashboard extends React.Component {

handleClick = () => {
  this.context.handleAddClick();
}

componentDidMount() {
  MoviesApiService.getMovies()
    .then(movies => {
      this.context.getMovies(movies)
      this.props.history.push('/dashboard/movies')
    })
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
      <div className='activity-dash-container'>
        <Navbar history={this.props.history}/>
        <Footer history={this.props.history}/>
        <div className='activity-dash'>
          <div className='activity-add-div'>
            <h1>Movies</h1>
          </div>
        <div className='randomdiv'>
          {this.context.isAddActive && <MovieForm history={this.props.history}/>}
        </div>
        <div className='activity-results'>
          {results}
        </div>
        <div className='bottom-div'></div>
        </div>
      </div>
    )
  }
}