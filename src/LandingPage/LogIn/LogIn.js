import React from 'react';
import WhibutContext from '../../WhibutContext';
import LogInSignUpService from '../../services/login-signup-service';
import TokenService from '../../services/token-service'

export default class LogIn extends React.Component {

  handleLogIn = (e) => {
    e.preventDefault()
    console.log('log in clicked')

    const loginAttempt = {
      username: e.target.name.value,
      password: e.target.password.value
    }
    LogInSignUpService.loginUser(loginAttempt)
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.context.handleSubmit(); //routes you to the main dashboard
      })
  }//add error handling
  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <form onSubmit={e => this.handleLogIn(e)} id='form'>
          <h2>Log in!</h2>
          <label htmlFor='name'>Username</label>
          <input type='text' id="name" name='name' placeholder='Username' />
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name='password' placeholder='Password' />
          <button type='submit'>Log in</button><button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}