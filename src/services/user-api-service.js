import config from '../config';
import TokenService from '../services/token-service';

const UsersService = {
  updateUser(updatedUser) {
    return fetch(`${config.API_ENDPOINT}/users/settings`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .then(TokenService.clearAuthToken());
  },
};

export default UsersService;
