import React from 'react';
import './signUp.css';
import WhibutContext from '../../WhibutContext';
import LogInSignUpService from '../../services/login-signup-service';
import TokenService from '../../services/token-service'
export default class SignUp extends React.Component {

  handleAddUser = (e) => {
    e.preventDefault()
    console.log('Sign Up was clicked')
    const userName = e.target.name.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    const newUser = {
      username: userName,
      password: password,
      password_confirm: passwordConfirm
    }
    const loginAttempt = {
      username: userName,
      password: password
    }
    
    LogInSignUpService.signUpUser(newUser)
      .then(() => {
        alert('Sign Up successful!')
      })
      .then(() => {
        LogInSignUpService.loginUser(loginAttempt)
        .then(res => {
          TokenService.saveAuthToken(res.authToken)
          this.props.handleSubmit(); //routes you to the main dashboard
        })
      })
  }

  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <form onSubmit={e => this.handleAddUser(e)} id='form'>
          <h2>Sign Up!</h2>
          <p>Password must be longer than 8 characters and contain: Upper case, lower case, number, and special character</p>
          <label htmlFor='name'>Username</label>
          <input type='text' id="name" name='name' placeholder='Choose Username' />
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name='password' placeholder='New Password' />
          <label htmlFor='password-confirm'>Confirm Password</label>
          <input type="password" id="passwordConfirm" name='passwordConfirm' placeholder='Confirm Password' />
          <button type='submit'>Sign Up</button> <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}