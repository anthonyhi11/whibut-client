import React from 'react';
import Navbar from './Navbar/Navbar'
import UsersService from './services/user-api-service';
import LogInSignUpService from './services/login-signup-service';
import Error from './error';

export default class Settings extends React.Component {

  constructor(props) {
    super()
    this.state = { 
      error: null,
      errorActive: false,
    }
  }

  handleMakeChanges = (e) => {
    e.preventDefault();
   const updatedUser = {
      'username': e.target.name.value,
      'password': e.target.password.value,
      'password_confirm': e.target.passwordConfirm.value
    }
  const credentials = {
    username: updatedUser.username,
    password: updatedUser.password
  }
    UsersService.updateUser(updatedUser) 
      .then(() => {
        return LogInSignUpService.loginUser(credentials) //logs user in with new creds
      }).then(this.props.history.push('/main')) //pushes to main
  }
  render() {
    return (
      <div>
        <h1>whibut</h1>
        <form onSubmit={e => this.handleMakeChanges(e)} id='form'>
            <h2>Make Changes to User Profile</h2>
            <label htmlFor='name'>Username</label>
            <input type='text' id="name" name='name' placeholder='Choose Username' />
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name='password' placeholder='New Password' />
            <label htmlFor='passwordConfirm'>Confirm Password</label>
            <input type="password" id="passwordConfirm" name='passwordConfirm' placeholder='Confirm Password' />
            <button type='submit'>Make Changes</button>
          </form>
          {this.state.errorActive && <Error />}
          <Navbar history={this.props.history}/>
        </div>
    )
  }
}