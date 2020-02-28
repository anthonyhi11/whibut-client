import TokenService from './token-service';
import config from '../config';

const BooksApiService = {
  getBooks() {
    return fetch(`${config.API_ENDPOINT}/books`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res => 
     (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },


}

export default BooksApiService