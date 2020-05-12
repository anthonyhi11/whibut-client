import config from '../config';
import TokenService from '../services/token-service';

const RestaurantsApiService = {
  getRest() {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  addRest(newRest) {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newRest),
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  deleteRest(restId) {
    return fetch(`${config.API_ENDPOINT}/restaurants/${restId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
    });
  },
};

export default RestaurantsApiService;
