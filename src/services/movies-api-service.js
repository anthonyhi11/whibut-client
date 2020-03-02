import TokenService from './token-service';
import config from '../config';

const MoviesApiService = {
  getMovies() {
    return fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>
    (!res.ok) 
    ? res.json().then(e => Promise.reject(e))
    : res.json()
    )},

    addNewMovie(newMovie) {
      return fetch(`${config.API_ENDPOINT}/movies`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(newMovie)
      })
        .then(res => 
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
    },

    deleteMovie(id) {
      return fetch(`${config.API_ENDPOINT}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `bearer ${TokenService.getAuthToken()}`
        },
      })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))
        }
      })
    },

  }

  export default MoviesApiService