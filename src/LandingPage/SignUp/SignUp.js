import React from 'react';
import './signUp.css';
import WhibutContext from '../../WhibutContext';
import LogInSignUpService from '../../services/login-signup-service';
import TokenService from '../../services/token-service';

export default class SignUp extends React.Component {
  state = { error: null };

  handleAddUser = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    const newUser = {
      username: userName,
      password: password,
      password_confirm: passwordConfirm,
    };
    const loginAttempt = {
      username: userName,
      password: password,
    };

    LogInSignUpService.signUpUser(newUser)
      .then(() => {
        LogInSignUpService.loginUser(loginAttempt).then((res) => {
          TokenService.saveAuthToken(res.authToken);
          this.props.handleSubmit(); //routes you to the main dashboard
        });
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };

  static contextType = WhibutContext;
  render() {
    const { error } = this.state;

    return (
      <div className={error ? 'error-signup-modal' : 'signup-modal'}>
        <div role="alert">{error && <p className="sign-up-error">{error}</p>}</div>
        <p className="signup-instructions">
          Password must be longer than 8 characters and contain: Upper case, lower case, number, and special character
        </p>
        <form onSubmit={(e) => this.handleAddUser(e)} id="signup-form">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" placeholder="Choose Username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="New Password" />
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" />
          <div className="sign-up-buttons">
            <button type="submit" className="signup-button">
              Sign Up
            </button>{' '}
            <p className="cancel" onClick={this.context.handleCancel}>
              Cancel
            </p>
          </div>
        </form>
      </div>
    );
  }
}
