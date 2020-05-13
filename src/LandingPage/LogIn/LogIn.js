import React from 'react';
import WhibutContext from '../../WhibutContext';
import LogInSignUpService from '../../services/login-signup-service';
import TokenService from '../../services/token-service';
import './login.css';

export default class LogIn extends React.Component {
  state = {
    error: null,
  };
  handleLogIn = (e) => {
    e.preventDefault();
    const loginAttempt = {
      username: e.target.name.value,
      password: e.target.password.value,
    };
    LogInSignUpService.loginUser(loginAttempt)
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.context.handleCancel();
        this.props.handleSubmit(); //routes you to the main dashboard
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  static contextType = WhibutContext;
  render() {
    const { error } = this.state;

    return (
      <div className="login-modal">
        <div role="alert">{error && <p className="login-error">{error}</p>}</div>

        <form className={error ? 'error-form' : 'login-form'} onSubmit={(e) => this.handleLogIn(e)}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" placeholder="Username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" />

          <button className="login-button-large" type="submit">
            Log in
          </button>
          <p className="cancel-login" onClick={this.context.handleCancel}>
            Cancel
          </p>
        </form>
      </div>
    );
  }
}
