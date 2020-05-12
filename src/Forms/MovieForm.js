import React from 'react';
import WhibutContext from '../WhibutContext';
import MoviesApiService from '../services/movies-api-service';
import './movieform.css';

export default class MovieForm extends React.Component {
  state = {
    error: null,
  };
  handleAddMovie = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const comments = e.target.comments.value;

    const newMovie = {
      activity: 'movies',
      title: title,
      genre: genre,
      rating: rating,
      comments: comments,
    };
    MoviesApiService.addNewMovie(newMovie)
      .then((movie) => {
        this.context.addMovie(movie);
        this.context.handleCancel();
        this.props.history.push(`/dashboard/${movie.activity}`);
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };

  static contextType = WhibutContext;
  render() {
    return (
      <div className="add-movie-modal">
        <form onSubmit={this.handleAddMovie} className="addMovie-form">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Ex. Parasite" required />
          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" placeholder="Suspense" required />
          <label htmlFor="rating">Rating (1-10)</label>
          <input type="number" id="rating" name="rating" min="1" max="10" placeholder="1" required />
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" placeholder="What do you want to remember"></textarea>
          <button className="submitmovie-button" type="submit">
            Submit
          </button>
          <p type="reset" className="cancel-movie" onClick={this.context.handleCancel}>
            Cancel
          </p>
        </form>
      </div>
    );
  }
}
