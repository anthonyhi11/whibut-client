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

  addBook(newBook) {
    return fetch(`${config.API_ENDPOINT}/books`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newBook)
    })
      .then(res => {
       if (!res.ok) {
        return res.json().then(e => Promise.reject(e))
      } else return res.json(); 
    })
  },

  deleteBook(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res => {
     if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
      }
    })
  }


}

export default BooksApiService