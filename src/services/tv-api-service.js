import TokenService from './token-service';
import config from '../config';

const TvApiService = {
  getTv() {
    return fetch(`${config.API_ENDPOINT}/tv`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  addTv(newTv) {
    return fetch(`${config.API_ENDPOINT}/tv`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newTv),
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  deleteTv(tvId) {
    return fetch(`${config.API_ENDPOINT}/tv/${tvId}`, {
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

export default TvApiService;
